import { Component } from '@angular/core';
import { fromEvent, Observable, Observer, of } from 'rxjs';
//
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
//
export class ObservableComponent {
    //
    title : string = "[Angular Observable & rxjs]";
    //
    constructor()
    {
        //
        this.ObservableTest01();
        //
        this.ObservableTest02();
    }
    //
    ObservableTest01():void
    {
        // Create simple observable that emits three values
        const myObservable = of(1, 2, 3);

        // Create observer object
        const myObserver = {
          next: (x: number) => console.log('Observer got a next value: ' + x),
          error: (err: Error) => console.error('Observer got an error: ' + err),
          complete: () => console.log('Observer got a complete notification'),
        };

        // Execute with the observer object
        myObservable.subscribe(myObserver);

        // Logs:
        // Observer got a next value: 1
        // Observer got a next value: 2
        // Observer got a next value: 3
        // Observer got a complete notification

        myObservable.subscribe(
          x => console.log('Observer got a next value: ' + x),
          err => console.error('Observer got an error: ' + err),
          () => console.log('Observer got a complete notification')
        );

        // Logs:
        // Observer got a next value: 1
        // Observer got a next value: 2
        // Observer got a next value: 3
        // Observer got a complete notification
    }
    //
    ObservableTest02():void
    {
        // Create a new Observable that will deliver the above sequence
        const sequence = new Observable(this.sequenceSubscriber);

        // execute the Observable and print the result of each notification
        sequence.subscribe({
          next(num) { console.log(num); },
          complete() { console.log('Finished sequence'); }
        });

        // Logs:
        // 1
        // 2
        // 3
        // Finished sequence
    }
    // This function runs when subscribe() is called
    sequenceSubscriber(observer: Observer<number>) {
      // synchronously deliver 1, 2, and 3, then complete
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return {unsubscribe() {}};
    }
}
//
const ESC_CODE     = 'Escape';
const nameInput    = document.getElementById('name') as HTMLInputElement;
//const subscription = fromEvent(nameInput, 'keydown').subscribe(
  // (e: KeyboardEvent) 
  //=> {
  //
  //if (e.code === ESC_CODE) {
  //    nameInput.value = '';
  //}
//});

