import { Controller, Get, Param } from '@nestjs/common';
import * as fs from 'fs';
import { resolve } from 'path';

@Controller('article')
export class ArticleController {
  @Get(':filename')
  getFile(@Param('filename') filename: string): string {
    const filePath = resolve(__dirname, `../../src/entry/${filename}.md`);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf8');
    } else {
      throw new Error('File not found');
    }
  }
}
