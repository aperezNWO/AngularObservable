import { Component } from '@angular/core';
import { from, fromEvent, interval, Observable, Observer, of } from 'rxjs';
//
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
//
export class ObservableComponent {
    //
    title : string = "[Angular Observable]";
    //
    constructor()
    {
        //
        this.ObservableTest01();
        //
        this.ObservableTest02();
        //
        this.ObservableTest03();
        //
        this.ObservableTest04();
        //
        this.ObservableTest05();
        //
        this.ObservableTest06();
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
        // execute the Observable and print the result of each notification
        sequence_1.subscribe({
          next(num) { console.log(num); },
          complete() { console.log('Finished sequence'); }
        });

        // Logs:
        // 1
        // 2
        // 3
        // Finished sequence
    }
    //
    ObservableTest03():void{
      //
      sequence_2.subscribe({
          next(num) { console.log(num); },
          complete() { console.log('Finished sequence'); }
      });
    }
    //
    ObservableTest04():void{
      /*
      // Subscribe starts the clock, and will emit after 1 second
      sequence_3.subscribe({
        next(num) { console.log('1st subscribe: ' + num); },
        complete() { console.log('1st sequence finished.'); }
      });

      // After 1/2 second, subscribe again.
      setTimeout(() => {
        sequence_3.subscribe({
          next(num) { console.log('2nd subscribe: ' + num); },
          complete() { console.log('2nd sequence finished.'); }
        });
      }, 500);*/
      // Logs:
      // (at 1 second): 1st subscribe: 1
      // (at 1.5 seconds): 2nd subscribe: 1
      // (at 2 seconds): 1st subscribe: 2
      // (at 2.5 seconds): 2nd subscribe: 2
      // (at 3 seconds): 1st subscribe: 3
      // (at 3 seconds): 1st sequence finished
      // (at 3.5 seconds): 2nd subscribe: 3
      // (at 3.5 seconds): 2nd sequence finished
    }
    //
    ObservableTest05():void{
      /*
      // Subscribe starts the clock, and begins to emit after 1 second
      multicastSequence.subscribe({
        next(num) { console.log('1st subscribe: ' + num); },
        complete() { console.log('1st sequence finished.'); }
      });

      // After 1 1/2 seconds, subscribe again (should "miss" the first value).
      setTimeout(() => {
        multicastSequence.subscribe({
          next(num) { console.log('2nd subscribe: ' + num); },
          complete() { console.log('2nd sequence finished.'); }
        });
      }, 1500);
      */
      // Logs:
      // (at 1 second): Emitting 1
      // (at 1 second): 1st subscribe: 1
      // (at 2 seconds): Emitting 2
      // (at 2 seconds): 1st subscribe: 2
      // (at 2 seconds): 2nd subscribe: 2
      // (at 3 seconds): Emitting 3
      // (at 3 seconds): 1st subscribe: 3
      // (at 3 seconds): 2nd subscribe: 3
      // (at 3 seconds): 1st sequence finished
      // (at 3 seconds): 2nd sequence finished
    }
    //
    ObservableTest06():void{
        /*
        const ESC_CODE     = 'Escape';
        const nameInput    = document.getElementById('name') as HTMLInputElement;
        const subscription = fromEvent(nameInput, 'keydown').subscribe(
          (e: any) => {
              //
              //if (e.code === ESC_CODE) {
              //    nameInput.value = '';
              //}
          });*/
    }
}

// This function runs when subscribe() is called
function sequenceSubscriber_01(observer: Observer<number>) {
      // synchronously deliver 1, 2, and 3, then complete
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return {unsubscribe() {}};
}
//
function sequenceSubscriber_02(observer: Observer<number>) {
      //
      const seq = [1, 2, 3];
      let timeoutId: any;

      // Will run through an array of numbers, emitting one value
      // per second until it gets to the end of the array.
      function doInSequence(arr: number[], idx: number) {
        timeoutId = setTimeout(() => {
          observer.next(arr[idx]);
          if (idx === arr.length - 1) {
            observer.complete();
          } else {
            doInSequence(arr, ++idx);
          }
        }, 1000);
      }

      //
      doInSequence(seq, 0);

      // Unsubscribe should clear the timeout to stop execution
      return {
        unsubscribe() {
          clearTimeout(timeoutId);
        }
  };
}
//
function multicastSequenceSubscriber() {
  const seq = [1, 2, 3];
  // Keep track of each observer (one for every active subscription)
  const observers: Observer<unknown>[] = [];
  // Still a single timeoutId because there will only ever be one
  // set of values being generated, multicasted to each subscriber
  let timeoutId: any;

  // Return the subscriber function (runs when subscribe()
  // function is invoked)
  return (observer: Observer<unknown>) => {
    observers.push(observer);
    // When this is the first subscription, start the sequence
    if (observers.length === 1) {
      const multicastObserver: Observer<number> = {
        next(val) {
          // Iterate through observers and notify all subscriptions
          observers.forEach(obs => obs.next(val));
        },
        error() { // handle error 
        },
        complete() {
          // Notify all complete callbacks
          observers.slice(0).forEach(obs => obs.complete());
        }
      };
      doSequence(multicastObserver, seq, 0);
    }
    //
    return {
      unsubscribe() {
        // Remove from the observers array so it's no longer notified
        observers.splice(observers.indexOf(observer), 1);
        // If there's no more listeners, do cleanup
        if (observers.length === 0) {
          clearTimeout(timeoutId);
        }
      }
    };

    // Run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
    function doSequence(sequenceObserver: Observer<number>, arr: number[], idx: number) {
      timeoutId = setTimeout(() => {
        console.log('Emitting ' + arr[idx]);
        sequenceObserver.next(arr[idx]);
        if (idx === arr.length - 1) {
          sequenceObserver.complete();
        } else {
          doSequence(sequenceObserver, arr, ++idx);
        }
      }, 1000);
    }
  };
}

// Create a new Observable that will deliver the above sequence
const sequence_1        = new Observable(sequenceSubscriber_01);

// Create a new Observable that will deliver the above sequence
const sequence_2        = new Observable(sequenceSubscriber_02);

// Create a new Observable that will deliver the above sequence
const sequence_3        = new Observable(sequenceSubscriber_02);

// Create a new Observable that will deliver the above sequence
const multicastSequence = new Observable(multicastSequenceSubscriber());
