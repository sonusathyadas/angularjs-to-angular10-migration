import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"defaultImage"
})
export class DefaultImagePipe implements PipeTransform{

    transform(input:string, def:string) {
        if(!def){
            def= "/img/avatar.png"
        }
        if(!input)
        {
            return def;
        }
        return input;
    }
    
}