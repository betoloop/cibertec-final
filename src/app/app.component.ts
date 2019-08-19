import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Cibertec Proyecto Final - Alberto Arturo Machado Hidalgo';
  year: number = (new Date()).getFullYear();

  // ngOnInit(){
  //   setTimeout(() => {
  //     this.title = 'Angular App++';
  //   }, 1500);
  // }
}
