import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// Allow longer execution time for file uploads (default is 30s)
export const maxDuration = 60;

/**
 * Implements the YARA rule: WebShell_Signatures
 * rule WebShell_Signatures {
 *     strings:
 *         $s1 = "b374k" nocase
 *         $s2 = "WSO 2.5" nocase
 *         $s3 = "Shell Command" nocase
 *         $s4 = "Execute PHP" nocase
 *         $s5 = "eval(gzinflate(base64_decode"
 *         $s6 = "chmod(0777)"
 *         $s7 = "pass = md5($password)"
 *     condition:
 *         any of them
 * }
 */
function scanForWebShell(buffer: Buffer): { detected: boolean; signature?: string } {
  const content = buffer.toString('utf-8');
  
  const signatures = [
    { id: 's1', pattern: /b374k/i },
    { id: 's2', pattern: /WSO 2\.5/i },
    { id: 's3', pattern: /Shell Command/i },
    { id: 's4', pattern: /Execute PHP/i },
    { id: 's5', pattern: /eval\(gzinflate\(base64_decode/ },
    { id: 's6', pattern: /chmod\(0777\)/ },
    { id: 's7', pattern: /pass = md5\(\$password\)/ }
  ];

  for (const sig of signatures) {
    if (sig.pattern.test(content)) {
      return { detected: true, signature: sig.id };
    }
  }

  return { detected: false };
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Perform security scan based on YARA rule
    const scanResult = scanForWebShell(buffer);
    if (scanResult.detected) {
      console.warn(`Webshell detected in file ${file.name}: signature ${scanResult.signature}`);
      return NextResponse.json({ 
        error: 'Security Threat Detected', 
        details: 'The uploaded file contains patterns associated with web shells or backdoors.',
        trigger_id: 'webshell_backdoor_detected',
        severity_tier: 1
      }, { status: 403 });
    }

    // Save the file using standard fs
    const filename = `${Date.now()}-${file.name}`;
    const uploadDir = path.join(process.cwd(), 'uploads');
    
    // Ensure directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ 
      success: true, 
      message: 'File uploaded successfully',
      filename: filename
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
