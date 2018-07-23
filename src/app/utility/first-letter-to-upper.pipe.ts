import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'firstUpper'
})
export class FirstLetterToUpperPipe implements PipeTransform {
    transform(data: String) {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }
}