import { Pipe, PipeTransform} from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
    name:'upper'
})

export class UppercasePipe implements PipeTransform {
    transform (value: string) : string {

            const transformedValue = value.toLocaleUpperCase();

            return transformedValue;
    }

}
