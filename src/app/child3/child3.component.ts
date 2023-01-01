import { Output , Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
