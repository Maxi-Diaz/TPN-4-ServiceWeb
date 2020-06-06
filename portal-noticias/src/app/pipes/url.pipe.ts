import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'sanitizer'
})
export class UrlPipe implements PipeTransform {

  constructor(private dom: DomSanitizer){}

  transform(value, args) {
    return this.dom.bypassSecurityTrustUrl(value);
  }

}
