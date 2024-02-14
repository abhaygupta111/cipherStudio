import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  dataList: any = [];
  recordObj: any;
  primaryId: any;
  totalLength:any;
  page:number=1;
  searchObj:any;
  noOfPage = 5;
  p = 1;
  constructor() { }

  ngOnInit() {
    const localData = localStorage.getItem('dataList');
    if (localData != null) {
      this.dataList = JSON.parse(localData);
    }
  }

  onEdit(data: any, index: any) {
    debugger
    $("#aboutModal").modal('show');
    this.recordObj = { ...data };
  }
  deleteRecord(primaryId:any){
    debugger
    for(let i=0; i<this.dataList.length; i++){
      if(this.dataList[i].id==primaryId){
        this.dataList.splice(i,1);
      }
      localStorage.setItem('dataList', JSON.stringify(this.dataList));
    }
  }
  
  // data shorting start
  key: any = 'createdOn';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  // data shorting end
}
