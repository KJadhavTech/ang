import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

  parentData!:any;
  ngOnInit(): void{
    this.parentData="Parent Data Passing to CHild";
  }

}
