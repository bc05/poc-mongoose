import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  findAll() {
    return [
      {
        titulo: 'O mar de monstros',
      },
    ];
  }
}
