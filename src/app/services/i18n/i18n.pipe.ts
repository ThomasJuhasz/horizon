import { Pipe, PipeTransform } from '@angular/core';
import { i18nService } from "./i18n.service";

@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {

  constructor(private i18n: i18nService) { }

  transform(value: string, args: string | string[]): any {
    if (!value) return;
    return this.i18n.instant(value, args);
  }
}
