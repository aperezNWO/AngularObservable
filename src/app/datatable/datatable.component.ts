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
  title              : string   = '[Material Table with local static source and pagination]';
  //
  informeLogLocal!   : Observable<LogEntry[]>;
  //
  displayedColumns   : string[] = ['id_Column', 'pageName', 'accessDate', 'ipValue'];
  //
  dataSource                    = new MatTableDataSource<LogEntry>;
  //
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //
  constructor(private logInfoService: LogInfoService) {
      //
  }
  //
  ngOnInit(): void {
    //
    this.dataSource           = new MatTableDataSource<LogEntry>(ELEMENT_DATA_LOCAL);
  }
  //
  ngAfterViewInit() {
    //
    this.dataSource.paginator = this.paginator;
  }
}
const ELEMENT_DATA_LOCAL : LogEntry[] = [
 {id_Column:"99825",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-13T18:53:15.35",ipValue:"69.63.184.3"}
,{id_Column:"99824",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-13T18:53:14.897",ipValue:"69.63.184.1"}
,{id_Column:"99823",pageName:"PAGE_DEMO_INDEX"     ,accessDate:"2023-01-13T15:26:44.203",ipValue:"181.48.33.178"}
,{id_Column:"99822",pageName:"PAGE_DEMO_INDEX"     ,accessDate:"2023-01-13T14:10:32.08",ipValue:"181.48.33.178"}
,{id_Column:"99821",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-13T13:17:03.44",ipValue:"181.48.33.178"}
,{id_Column:"99820",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-13T13:16:58.11",ipValue:"181.48.33.178"}
,{id_Column:"99819",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-13T13:16:37.577",ipValue:"181.48.33.178"}
,{id_Column:"99818",pageName:"PAGE_DEMO_INDEX"     ,accessDate:"2023-01-13T13:16:30.83",ipValue:"181.48.33.178"}
,{id_Column:"99817",pageName:"PAGE_DIJKSTRA_DEMO." ,accessDate:"2023-01-13T12:12:29.763",ipValue:"40.77.167.23"}
,{id_Column:"99816",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-12T23:51:05.343",ipValue:"31.13.127.13"}
,{id_Column:"99815",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-12T23:50:32.743",ipValue:"31.13.127.118"}
,{id_Column:"99814",pageName:"PAGE_DIJKSTRA_DEMO." ,accessDate:"2023-01-12T21:55:31.353",ipValue:"38.43.130.68"}
,{id_Column:"99813",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-12T21:55:23.93",ipValue:"38.43.130.68"}
,{id_Column:"99812",pageName:"PAGE_DEMO_INDEX"     ,accessDate:"2023-01-12T21:55:11.95",ipValue:"38.43.130.68"}
,{id_Column:"99811",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-12T21:50:25.653",ipValue:"38.43.130.68"}
,{id_Column:"99810",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-12T20:34:24.193",ipValue:"191.99.1.33"}
,{id_Column:"99809",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-12T19:59:40.7",ipValue:"40.77.167.54"}
,{id_Column:"99808",pageName:"ANGULAR_DEMO"        ,accessDate:"2023-01-12T19:41:11.03",ipValue:"20.25.14.9"}
,{id_Column:"99807",pageName:"PAGE_CSV_ASYNC_DEMO" ,accessDate:"2023-01-12T19:32:04.617",ipValue:"207.46.13.167"}
,{id_Column:"99806",pageName:"PAGE_DEMO_INDEX"     ,accessDate:"2023-01-12T19:25:09.76",ipValue:"132.184.130.224"}
,{id_Column:"99805",pageName:"PAGE_DEMO_INDEX"     ,accessDate:"2023-01-12T19:25:01.837",ipValue:"132.184.130.224"}
];
