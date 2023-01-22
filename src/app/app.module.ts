import { NgModule       } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule   } from '@angular/material/paginator';
import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule     } from '@angular/common/http';
import { AppComponent         } from './app.component';
import { LogInfoViewComponent } from './loginfoview/loginfoview.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      //{  path: 'lista'        , component: ListaComponent           },
      //{  path: 'datatable'    , component: DatatableComponent       },
      {  path: 'dynamictable'   , component: LogInfoViewComponent   }, 
    ])
  ],
  declarations: [AppComponent, LogInfoViewComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
