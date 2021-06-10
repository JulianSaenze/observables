import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;
  constructor(private userService: UserService) {}

  //Instead of EventEmitters use Subjects when dealing with cross component communication! A better way and also Operators can be called on them
  //When using @Output still use EventEmitters
  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
  }

  //dont forget to cancel subscription
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
