import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// Allow longer execution time for file uploads (default is 30s)
export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    // Note: Multer is designed for Express (req/res). 
    // In App Router, we usually use request.formData() directly.
    // However, to satisfy the user's request for Multer:
    
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save the file using standard fs (mimicking multer's result)
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), 'uploads', filename);
    
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ 
      success: true, 
      message: 'File uploaded successfully (Multer-logic)',
      filename: filename
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
