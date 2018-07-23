import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'splitWords'
})
export class SplitWordsFromEnumPipe implements PipeTransform {
    transform(data: String) {
        return data.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1).join(' ');
    }
}