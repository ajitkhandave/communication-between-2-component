import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component'
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'child-tutorial',
  templateUrl:'./child-new.component.html',

   inputs: ['passingData'],
   outputs: ['newChildEvent']
})
export class ChildNewComponent{

    	newChildEvent = new EventEmitter<string>();
    	onChange(value:string){
    	this.newChildEvent.emit(value);
    	console.log(value);
    	}
}
