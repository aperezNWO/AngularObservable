import { Injectable          } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient          } from '@angular/common/http';
import { LogEntry            } from './loginfo.model';

@Injectable({
  providedIn: 'root'
})

export class LogInfoService {
  //
  ELEMENT_DATA_LOCAL:  LogEntry[] = [];
  //
  ELEMENT_DATA_LOCAL_: LogEntry[] = [];
  //
  private _loginfo = new BehaviorSubject([]);
  //
  constructor(    private http: HttpClient  ) {
      //
  }
  //
  get loginfo() {
    return this._loginfo.asObservable()
  }
  //
  updateLogInfo() {
    //
    let url = 'https://learningpath.somee.com/demos/generarinformejson';
    //
    this.http.get<LogEntry[]>(url).forEach(
      p_logInfo =>{
        //this._loginfo.next(p_logInfo);
      }
    )
    //   
    console.log("ELEMENT_DATA_LOCAL from http/json : " + this.ELEMENT_DATA_LOCAL);
  }
  //
  private getRandom() {
    return Math.floor(Math.random() * 100)
  }
  //
  private getRandomStr() {
    return Math.floor(Math.random() * 100).toString()
  }
  /*
  //
  getLogLocal() {
      //
      // http://learningpath.somee.com/demos/generarinformejson
      //    
      return this.http.get<{id_Column:string,pageName:string,accessDate:string,ipValue:string}[]>('../assets/loginfo.json');
  }
  //
  getLogRemoto() {
      //
      // http://learningpath.somee.com/demos/generarinformejson
      //    
      return this.http.get<{id_Column:string,pageName:string,accessDate:string,ipValue:string}[]>('https://learningpath.somee.com/demos/generarinformejson');
  }
  */
}

