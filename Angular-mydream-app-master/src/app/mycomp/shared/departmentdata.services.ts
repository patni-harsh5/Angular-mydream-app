import {Injectable} from '@angular/platform-browser';

@Injectable
export class DepartmentData {
    
    loaddepartment():string[]{
        return ['Dept1', 'Dept2', 'Dept3'];
    }
}