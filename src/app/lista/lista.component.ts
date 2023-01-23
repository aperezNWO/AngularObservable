import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit        } from '@angular/core';
import { Observable               } from 'rxjs';
import { LogEntry                 } from '../loginfo.model';
import { LogInfoService           } from '../loginfo.service';
//
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
//
export class ListaComponent implements OnInit {
    //
    title = '[Material list with json/http source]';
    //
    informeLogRemoto!   : Observable<LogEntry[]>;
    //
    constructor(private logInfoService: LogInfoService) {
        //
        this.informeLogRemoto =  this.logInfoService.getLogRemoto(); 
        //
        console.log("LOADING DATA : " + JSON.stringify(this.informeLogRemoto));
    }
    //
    ngOnInit(): void {
        //
    }
}