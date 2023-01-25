import { Component } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
//
@Component({
  selector: 'app-asyncprog',
  templateUrl: './asyncprog.component.html',
  styleUrls: ['./asyncprog.component.css']
})
//
export class AsyncprogComponent {
   //
   title : string = "[Angular RxJS]";
   //
   constructor()
   {
      //
      this.RxJSTest01();
      //
      this.RxJSTest02();
   }
   //
   RxJSTest01():void{
      //
      let url : string = "https://learningpath.somee.com/demos/generarinformejson";
      // Create an Observable out of a promise
      let data = from(fetch(url));
      // Subscribe to begin listening for async result
      data.subscribe({
        next(response) { console.log(response); },
        error(err) { console.error('Error: ' + err); },
        complete() { console.log('Completed'); }
      });
   }
   //
   RxJSTest02():void{
      /*
      // Create an Observable that will publish a value on an interval
      const secondsCounter = interval(1000);
      // Subscribe to begin publishing values
      const subscription   = secondsCounter.subscribe(n =>
        console.log(`It's been ${n + 1} seconds since subscribing!`));*/
   }
}