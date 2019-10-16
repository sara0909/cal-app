import { Component } from '@angular/core';
@Component({
  selector: this.newMethod(),
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
// tslint:disable-next-line: component-class-suffix
export class ButtonTypesExample {
  private newMethod(): string {
    return 'button-types-example';
  }
}
