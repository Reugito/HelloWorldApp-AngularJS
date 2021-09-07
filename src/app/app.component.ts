import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "../assets/blzlogo.png";
  url = "https://www.bridgelabz.com/"
  userName = "";
  nameError="";
  ngOnInit(): void{
    this.title = "Hello from bridgeLabz"
  }

  onClick($event: any){
    console.log("save button is clicked", $event);
    window.open(this.url, "-blanck")
  }

  onInput($event: any){
    console.log("change event occured!", $event.data);
    const nameRegexp = RegExp('^[A-z][a-zA-z\\s]{2,}$');
    if(nameRegexp.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!;"
  }
}
