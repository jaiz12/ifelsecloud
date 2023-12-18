import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardComponent } from './card/card.component';
import { TotalBalanceComponent } from './total-balance/total-balance.component';
import { MoneyStatisticsComponent } from './money-statistics/money-statistics.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './searchFilter.pipe';


@NgModule({
  declarations: [							
    AppComponent,
      HeaderComponent,
      SidenavComponent,
      CardComponent,
      TotalBalanceComponent,
      MoneyStatisticsComponent,
    TransactionHistoryComponent,
    SearchFilterPipe
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [DatePipe,Ng2SearchPipeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
