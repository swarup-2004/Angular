import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number, inputType: 'cal' | 'fah', outputType?: 'cal' | 'fah'): string {
    
    // let outputTemp: number = parseToT(value);
    let symbol: string;
    // if (inputType === 'cel' && outputType === 'fah') {

    // }

    // else if (inputType === 'fah' && outputType === 'cel') {

    // }

    if (!outputType) {
      symbol = inputType ==='cal'? "C": 'F';
    }
    else {
      symbol = outputType==='cal'? "C": 'F';
    }

    
    return `${value} ${symbol}`;
  }

}
