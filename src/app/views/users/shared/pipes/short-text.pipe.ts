import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(text: string, len: number): string {
    return text && text.length > len ? text.substr(0, len) + '...': text;
  }

}
