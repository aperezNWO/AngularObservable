import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator       } from '@angular/material/paginator';
import { Observable         } from 'rxjs';
import { LogEntry           } from '../loginfo.model';
import { LogInfoService     } from '../loginfo.service';
//
@Component({
  selector: 'loginfoview-app',
  templateUrl: './loginfoview.component.html',
  styleUrls: ['./loginfoview.component.scss']
})
//
export class LogInfoViewComponent implements OnInit, AfterViewInit {
  //
  title = '[Material Table with json/http source and pagination]';
  //
  informeLogRemoto!   : Observable<LogEntry[]>;
  //
  dataSource         : MatTableDataSource<LogEntry>;
  //
  displayedColumns: string[] = ['id_Column', 'pageName', 'accessDate', 'ipValue'];
  //
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //
  constructor(private logInfoService: LogInfoService) {
      //
      this.informeLogRemoto =  this.logInfoService.getLogRemoto();
      //
      let ELEMENT_DATA_LOCAL: LogEntry[] = [];
      //  
      this.informeLogRemoto.forEach(
          _p_logInfo =>{
            _p_logInfo.forEach(
              p_logInfo =>{
                  ELEMENT_DATA_LOCAL.push(p_logInfo);
                  //
                  console.log("ELEMENT_DATA_LOCAL : " + JSON.stringify(p_logInfo));
              }
            )
      });// TODO : SUBSCRIBE
      //
      this.dataSource           = new MatTableDataSource<LogEntry>(ELEMENT_DATA_LOCAL);
      this.dataSource.paginator = this.paginator;
      //
      console.log("ELEMENT_DATA_LOCAL : " + ELEMENT_DATA_LOCAL);
  }
  //
  ngOnInit(): void {
      //
  }
  //
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
  //
  update() {
    //
  }
}
