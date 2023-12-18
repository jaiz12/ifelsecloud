import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DatePipe } from '@angular/common';
import {  Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  apiURL : any = '';
  transactionData: any = [];
  view:any={};
  pageNo: number = 1;
  itemsPerPage: number = 5;
  searchText: any ="";
  constructor(private http: HttpClient, private appComponent: AppComponent, private datePipe: DatePipe, private filter : Ng2SearchPipeModule) { 
    this.apiURL = this.appComponent.apiUrlData;

  }

  ngOnInit() {
    this.getData();
  }

    getData(){
      this.http.get(this.apiURL).subscribe ((res: any)=>{
        this.transactionData = res.transactions
      })
    }
    viewData(data:any){
      this.view = data
    }

}
