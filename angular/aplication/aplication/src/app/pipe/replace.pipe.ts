import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
    name: "replace"
})
export class ReplacePipe implements PipeTransform{

    transform(value: string, char: string, valueToRepalce: string){
            return value.replace(char, valueToRepalce);
    }

}

