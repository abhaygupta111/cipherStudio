import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detele-modal',
  templateUrl: './detele-modal.component.html',
  styleUrls: ['./detele-modal.component.css']
})
export class DeteleModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() deleteData:any;
  @Output() deleteConfirmed=new EventEmitter();

  deleteConfirm(){  
    this.deleteConfirmed.emit(this.deleteData);
  }
}
