import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss']
})
export class TotalBalanceComponent implements OnInit {
  apiURL : any = '';
  totalBalance: any = {};

  constructor(private http: HttpClient, private appComponent: AppComponent) { 
    this.apiURL = this.appComponent.apiUrlData;

  }

  ngOnInit() {
    this.getData();
  }

    getData(){
      this.http.get(this.apiURL).subscribe ((res: any)=>{
        console.log(res.balance)
        this.totalBalance = res.balance;
      })
    }
}
