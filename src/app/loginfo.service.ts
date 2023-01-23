import { Injectable          } from '@angular/core';
import { HttpClient          } from '@angular/common/http';
import { LogEntry            } from './loginfo.model';

@Injectable({
  providedIn: 'root'
})

export class LogInfoService {
  //
  //ELEMENT_DATA_LOCAL:  LogEntry[] = [];
  //
  //ELEMENT_DATA_LOCAL_: LogEntry[] = [];
  //
  //private _loginfo = new BehaviorSubject([]);
  //
  constructor(    private http: HttpClient  ) {
      //
  }
  //
  /*
  get loginfo() {
    return this._loginfo.asObservable()
  }*/
  // 
  /*
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
  }*/
  //
  getLogLocal() {
      //
      let url='../assets/loginfo.json'
      //    
      return this.http.get<LogEntry[]>(url);
  }
  //
  getLogRemoto() {
    //
    let url = 'https://learningpath.somee.com/demos/generarinformejson';
    // 
    return this.http.get<LogEntry[]>(url);   
  }

}

