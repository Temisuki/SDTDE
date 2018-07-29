import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SearchFilter'
})

export class SearchFilterPipe implements PipeTransform {

    transform(value: any, fake: any, words?: any): any {
        if(!value) return null;
        if(!words) return value;
        if(words.length < 1) return value;
        return value.filter((element) => {
            let found = false;
            words.forEach(arg => {
                if (JSON.stringify(element.$.name + element.$.value).toLowerCase().indexOf(arg.toLowerCase()) >= 0) {
                    found = true;
                }
            });
            return found;
        });
    }
}

