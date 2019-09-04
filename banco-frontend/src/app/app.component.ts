import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'bc-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome to Banco App!'

  constructor() { }

  ngOnInit() {
  }

}
