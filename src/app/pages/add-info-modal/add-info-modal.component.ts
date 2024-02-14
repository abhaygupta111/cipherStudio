import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-add-info-modal',
  templateUrl: './add-info-modal.component.html',
  styleUrls: ['./add-info-modal.component.css']
})
export class AddInfoModalComponent implements OnInit {
  @Input() dataList: Array<any> = [];
  @Output() setRecordData = new EventEmitter();
  @Input() editRecord: any;
  index: any = null;
  dataObj: any = {};
  constructor() { }

  ngOnInit() {
  }

  saveRecord() {
    debugger
    if (!this.dataObj.id) {
      this.dataObj.id = Math.floor(Math.random() * (100)) + 1;
      this.dataObj.createdOn= new Date().toISOString().slice(0, 16);
      this.dataList.push(this.dataObj);
    }
    else {
      var i = this.dataList.findIndex(
        (elem) => elem.id == this.dataObj.id
      );
      this.dataList[i] = this.dataObj;
    }
    this.dataList = [...this.dataList];
    localStorage.setItem('dataList', JSON.stringify(this.dataList));
    $("#aboutModal").modal('hide');
    this.setRecordData.emit(this.dataList);
    this.reset();
  }
  reset() {
    this.dataObj = {};
    this.index = null;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes) return;
    if (changes['editRecord'] && changes['editRecord'].currentValue) {
      this.dataObj = changes['editRecord'].currentValue;
      this.index = this.dataObj.index;
    }
    localStorage.setItem('dataList', JSON.stringify(this.dataList));
  }

}
