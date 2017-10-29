import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import {Subject} from 'rxjs/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subject = new Subject();

  numbers: Array<number> = [];
  enterString: string;

  constructor() {
    this.subject.next(this.enterString);
  }

  public shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  ngOnInit() {
    this.updateString(this.numbers);
    this.subject.debounceTime(1000).subscribe(() => {
      const starArray = this.numbers.slice().map(e => '*');
      this.updateString(starArray);
    });
  }

  private updateString(numArr: Array<any> = this.numbers) {
    this.enterString = numArr.join('');
    this.subject.next(this.enterString);
  }

  public shuffleNumbers() {
    if (this.numbers.length > 1) {
      const copyNumbers = this.shuffle(this.numbers.slice());
      this.updateString(copyNumbers);
    }
  }

  public clear() {
    this.numbers = [];
    this.updateString();
  }

  public cancel() {
    this.numbers.pop();
    this.updateString();
  }

  public clickNum(num) {
    if (this.numbers.length >= 8) {
      return;
    } else {
      this.numbers.push(num);
      this.updateString();
    }
  }

  openDialog() {
    if (this.numbers.length > 0) {
      alert(this.numbers.join(''));
    }
  }

}
