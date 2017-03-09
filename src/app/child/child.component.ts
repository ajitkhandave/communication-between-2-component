import { Component} from '@angular/core';
import { ChildNewComponent } from '../child-new/child-new.component'
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'my-tutorials',
  template: `<h2>child tutorial  component</h2>
                   <label>Enter child tutorial component value</label>
                    <input type="text" #childText (keyup)="onChange(childText.value)">
                    <p>value from New child component is</p>
                    {{passingDataNew}}
                   `,
  inputs: ['passingDataNew'],
  outputs: ['childEvent']
})
export class ChildComponent{

    	childEvent = new EventEmitter<string>();
    	onChange(value:string){
    	this.childEvent.emit(value);
      console.log(value);
    	}

}
