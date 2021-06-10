import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    //params is an Observable (construct to get informed about changed data)
    //Observables provided by Angular like params are managed by Angular and takes
    //care about unsubscribing
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
