import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./main.css']
})

  export class AppComponent {
    title = 'RoutingDemo';
    constructor(private router:Router){}
    getHome(){
      this.router.navigate(['/homeLink']);
    }
    getLogin(){
      this.router.navigate(['/loginLink']);
    }
    getRegister(){
      this.router.navigate(['/registerLink']);
    }
}
