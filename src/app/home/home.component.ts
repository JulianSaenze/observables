import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  //to store subscriptions
  private firstObsSubscription: Subscription

  constructor() { }

  ngOnInit() {
    //taking a number as parameter (f.e. 1000) -> every second a new value will be fired
    //will continue to run, even if navigated away. Will start another when navigate back -> don't forget to cancel subscriptions
    //when they are no longer needed
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=> {
        observer.next(count);
        if(count == 2) {
          observer.complete();
        }
        //throwing an error quits the interval
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    //when an error occurs it cancels the observable. It does not complete

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
      //reacting to error
    }, error => {
      console.log(error);
      alert(error.message);
    //reacting to completion (takes no argument)
    },() => {
      console.log('completed');
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
