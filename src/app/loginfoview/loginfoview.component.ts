import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator       } from '@angular/material/paginator';
import { BehaviorSubject, Observable, tap         } from 'rxjs';
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
  title = '[Material Table with json/http remote source and pagination]';
  //
  informeLogRemoto!                  : Observable<LogEntry[]>;
  //
  dataSource                         = new MatTableDataSource<LogEntry>();
  // 
  displayedColumns                   : string[] = ['id_Column', 'pageName', 'accessDate', 'ipValue'];
  //
  private _loginfo                   = new BehaviorSubject([]);
  //
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //
  constructor(private logInfoService: LogInfoService) {
    //
    this.informeLogRemoto = this.logInfoService.getLogRemoto();
    //
    this.informeLogRemoto.pipe(tap((p_logInfo) => {
      //
      console.log("ELEMENT_DATA_LOCAL : " + p_logInfo); 
      //
      this.dataSource           = new MatTableDataSource<LogEntry>(p_logInfo);
    }));
  }
  //
  ngOnInit(): void {
      //
  }
  //
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  //
  update() {
    //
  }
}
