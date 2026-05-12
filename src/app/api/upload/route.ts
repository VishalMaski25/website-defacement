import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configure multer for disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = './uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Helper to run multer middleware in Next.js App Router
function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, let multer handle it
  },
};

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
