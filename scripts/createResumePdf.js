import fs from 'fs';
import path from 'path';

const uploadedPath = 'C:/Users/Siddharth/.gemini/antigravity/brain/0b503682-8bc8-4339-add6-0ef936ae8745/.user_uploaded/media_1793741356276_139df264.pdf';

if (fs.existsSync(uploadedPath)) {
  fs.copyFileSync(uploadedPath, 'public/resume.pdf');
  fs.copyFileSync(uploadedPath, 'public/Siddharth_Sarda_Resume.pdf');
  console.log('Successfully synced public/resume.pdf from verified source.');
} else {
  console.log('Source file not found, preserving public/resume.pdf.');
}
