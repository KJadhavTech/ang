import { Component } from '@angular/core'; 
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component {

  message !:string;
  subscription !: Subscription;

  constructor(private commonService: CommonServiceService) { }

  ngOnInit() {
    this.subscription = this.commonService.currentMessage.subscribe(message => this.message = message)
    console.log("ServiceData : "+ this.message);
  }

  updateService(){
    this.commonService.changeMessage("Hello from Sibling")
  }
  
 

}
