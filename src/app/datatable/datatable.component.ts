import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator       } from '@angular/material/paginator';
import { Observable         } from 'rxjs';
import { LogEntry           } from '../loginfo.model';
import { LogInfoService     } from '../loginfo.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
//
export class DatatableComponent implements OnInit, AfterViewInit {
  //
  title = '[Material Table with json/http local source and pagination]';
  //
  informeLogLocal!   : Observable<LogEntry[]>;
  //
  displayedColumns: string[] = ['id_Column', 'pageName', 'accessDate', 'ipValue'];
  //
  dataSource                 = new MatTableDataSource<LogEntry>;
  //
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //
  constructor(private logInfoService: LogInfoService) {
      //
  }
  //
  ngOnInit(): void {
    //
    this.informeLogLocal =  this.logInfoService.getLogLocal();
    //
    let ELEMENT_DATA_LOCAL: LogEntry[] = [];
    //  
    this.informeLogLocal.forEach(
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
  }
  //
  ngAfterViewInit() {
    //
    this.dataSource.paginator = this.paginator;
  }
}
