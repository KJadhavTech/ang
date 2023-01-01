import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

title!:string;
data !: any; 
userName !: any;

constructor(){ 
}


ngOnInit(): void{
this.title="New Home Component";
this.data =[
  {id:1,name:'One'},
  {id:2,name:'Two'},
  {id:3,name:'Three'},
  {id:4,name:'Four'},
]
}

alertDemo(){
  alert('Demo ' + this.title);
}

}
