import { Pipe, PipeTransform } from '@angular/core';
import { Images } from '../interfaces/images';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
  notfound: Images[] = [
    {
      height: 300,
      width: 300,
      url: 'assets/img/noimage.png',
    },
  ];

  transform(images: Images[]): string {
    return !images || images.length === 0
      ? this.notfound[0].url
      : images[0].url;
  }
}
