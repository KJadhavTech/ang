import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component {

  message !:string; 

  constructor(private commonService: CommonServiceService) { }

  ngOnInit() {
    this.commonService.currentMessage.subscribe(message => this.message = message)
    console.log("ServiceData : "+ this.message);
  }

}
