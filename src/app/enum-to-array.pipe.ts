import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
    transform(data: Object) {
        console.log(data);
        const keys = Object.keys(data);
        return keys.slice(keys.length / 2);
    }
}