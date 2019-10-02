import {Pipe, PipeTransform}  from '@angular/core'

@Pipe({
    name: 'summary'
})

export class Summary implements PipeTransform{
    
    transform(value: String, limit :number=10){
        return value.substring(0, limit) + '...read more'
    }
    
}