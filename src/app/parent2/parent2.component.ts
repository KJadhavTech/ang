import { Component, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {

  @ViewChild(Child2Component) child: any;
 

  onChildAccess(){
    this.child.howAreYou(); 
  }

}
