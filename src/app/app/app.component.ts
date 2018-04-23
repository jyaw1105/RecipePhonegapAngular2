import { Component, OnInit,NgZone } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RecipeApp';

  constructor(private router: Router, private ngZone:NgZone) {
  }

  ngOnInit(){
    this.ngZone.run(() => {
      this.router.navigate(['home']);
    });
  }
}
