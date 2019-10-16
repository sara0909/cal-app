import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent  {

public num1: number;
public num2: number;
public result: number;

add() {
  this.result = this.num1 + this.num2;
}
sub() {
  this.result = this.num1 - this.num2;
}
multiply() {
  this.result = this.num1 * this.num2;
}
div() {
  this.result = (this.num1) / (this.num2);
}
}
