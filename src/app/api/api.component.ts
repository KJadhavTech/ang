import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  data !:any ;
  constructor(private commonService: CommonServiceService) { 
   this.commonService.getData().subscribe(res => {
      this.data=res; 
    }) 
  }
}
