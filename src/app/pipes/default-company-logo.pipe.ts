import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultCompanyLogo'
})
export class DefaultCompanyLogoPipe implements PipeTransform {

  private readonly fallbackLogoUrl = 'assets/default_company_logo.png'; 

  transform(value: string): string {
    const img = new Image();
    img.src = value;

    img.onload = () => {
      return value;
    };

    img.onerror = () => {
      return this.fallbackLogoUrl;
    };

    return this.fallbackLogoUrl;
  }

}
