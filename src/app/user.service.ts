import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

//shortcut to import
@Injectable({providedIn: 'root'})
export class UserService {
  //Subject is a special kind of Observable which is more active.
  //Meaning: next() can be called outside of the component, which makes it suitable for use cases where
  //you can also use EventEmitters (when something needs to be actively triggered)
  activatedEmitter = new Subject<boolean>();
}
