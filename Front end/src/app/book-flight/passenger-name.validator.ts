import { AbstractControl } from "@angular/forms";

export class PassengerNameValidator {
    static checkName(name: AbstractControl) {
        let value=name.value;
        let regex="[A-Za-z\\s]{1,}";
        if(value.match(regex))
            {
               let namearr=value.split(" "); 
               for(let i of namearr)
               {
                if(i.trim().length<=1)
                {
                    return {'checkName':true}
                }
               }
            }
        else{
            return {'checkName':true}
            }
        return null;
    }

}