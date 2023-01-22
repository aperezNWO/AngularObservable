import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator       } from '@angular/material/paginator';
import { map, Observable    } from 'rxjs';
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
  title = '';
  //
  private dataSource = new MatTableDataSource<LogEntry>();
  //
  displayedColumns: string[] = ['id_Column', 'pageName', 'accessDate', 'ipValue'];
  //
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  //  
  logInfoAsMatTableDataSource$: Observable<MatTableDataSource<LogEntry>> =
  this.logInfoService.loginfo.pipe(
    map((p_loginfo) => {
      const dataSource = this.dataSource;
      dataSource.data  = p_loginfo
      return dataSource;
    })
  );
  //
  constructor(private logInfoService: LogInfoService) {
    this.update();
  }

  update() {
    this.logInfoService.updateLogInfo();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
