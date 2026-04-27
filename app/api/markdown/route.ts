import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!file) {
    return NextResponse.json({ error: 'No file specified' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), 'data', `${file}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ content });
  } catch (error) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
