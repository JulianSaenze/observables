import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
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
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    })
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
