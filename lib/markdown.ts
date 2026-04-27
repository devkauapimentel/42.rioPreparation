import fs from 'fs';
import path from 'path';

export function getModuleContent(filename: string): string | null {
  try {
    const filePath = path.join(process.cwd(), 'data', `${filename}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return null;
  }
}
