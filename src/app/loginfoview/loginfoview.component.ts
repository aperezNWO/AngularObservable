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
  informeLogRemoto!   : Observable<LogEntry[]>;
  //
  title = '';
  //
  dataSource : any;
  //
  displayedColumns: string[] = ['id_Column', 'pageName', 'accessDate', 'ipValue'];
  //
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //
  ELEMENT_DATA_LOCAL: LogEntry[] = [];
  //
  constructor(private logInfoService: LogInfoService) {
    //
    this.informeLogRemoto =  this.logInfoService.getLogRemoto();
    //  
    this.informeLogRemoto.forEach(
        _p_logInfo =>{
          _p_logInfo.forEach(
            p_logInfo =>{
                this.ELEMENT_DATA_LOCAL.push(p_logInfo);
            }
          )
    });
    //
    this.dataSource           = new MatTableDataSource<LogEntry>(this.ELEMENT_DATA_LOCAL);
    this.dataSource.paginator = this.paginator;
  }
  //
  update() {
    //
    //this.informeLogRemoto =  this.logInfoService.getLogRemoto();
  }
  //
  ngOnInit(): void {
      //
      this.informeLogRemoto =  this.logInfoService.getLogRemoto();
      //  
      this.informeLogRemoto.forEach(
          _p_logInfo =>{
            _p_logInfo.forEach(
              p_logInfo =>{
                  this.ELEMENT_DATA_LOCAL.push(p_logInfo);
              }
            )
      });
      //
      this.dataSource           = new MatTableDataSource<LogEntry>(this.ELEMENT_DATA_LOCAL);
  }
  //
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
}
