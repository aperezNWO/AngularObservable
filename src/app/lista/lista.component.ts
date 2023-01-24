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
    title = '[Material list with json/http local source]';
    //
    informeLogLocal!   : Observable<LogEntry[]>;
    //
    constructor(private logInfoService: LogInfoService) {
        //
        this.informeLogLocal =  this.logInfoService.getLogLocal(); 
        //
        console.log("LOADING DATA : " + JSON.stringify(this.informeLogLocal));
    }
    //
    ngOnInit(): void {
        //
    }
}