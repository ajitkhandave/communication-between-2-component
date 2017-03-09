import { Component } from '@angular/core';
import {ChildComponent} from './child/child.component';
import {ChildNewComponent} from './child-new/child-new.component';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'

})
export class AppComponent {
  public childData:string;
  public newChildData:string;

  childInfo(strdata:string){
    this.childData=strdata;

  }
  newChildInfo(strad:string){
    this.newChildData=strad;
  }

}
