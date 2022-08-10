import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog12';
  //   data = 'code step by step' + " " + 2*2;
  //  getValue(){
  //     alert("Big HELLO");
  //   }
  //   getName(name:any){
  //     alert("name");
  //   }

  //   getData(event : any){
  //     console.log(event);}

  //     displayVal:any=0;
  //   getWhat(val:string){
  //    console.warn(val);
  //    this.displayVal=val
  // count=0;
  // counter(type:string){
  //   type==='add' ?this.count++:this.count--;
  // }
  //   }
  // name='peter';
  // //disable=true;
  //   disable: boolean = false;
  // getDisabled(){
  //   this.disable =  !this.disable;
  // }
  // show=true;
  // getDisabled(){
  //   this.show= !this.show;
  //    }

  //show=true;
  //show=false;

  //multiple elseIf
  //color="green";
  //color="black";

  //LOOPS in Angular

  // users=['Anil','Bhaskar','John','Peter'];
  // userDetails=[
  //   {name:'Pranav',Email:'Pranav@test.com',Phone:'8888'},
  //   {name:'Bhaskar',Email:'Bhaskar@test.com',Phone:'8777'},
  //   {name:'Sumit',Email:'Sumit@test.com',Phone:'8666'},
  //   {name:'Mangal',Email:'Mangal@test.com',Phone:'8555'},
  //   {name:'Peter',Email:'Peter@test.com',Phone:'8444'},

  // ];

  //Nested Loops

  // users=[
  //     {name:'Pranav',Email:'Pranav@test.com',Phone:'8888',SocialAccounts:['facebook','insta','gmail']},
  //     {name:'Bhaskar',Email:'Bhaskar@test.com',Phone:'8777',SocialAccounts:['facebook','insta','gmail']},
  //     {name:'Sumit',Email:'Sumit@test.com',Phone:'8666',SocialAccounts:['facebook','insta','gmail']},
  //     {name:'Mangal',Email:'Mangal@test.com',Phone:'8555',SocialAccounts:['facebook','insta','gmail']},
  //     {name:'Peter',Email:'Peter@test.com',Phone:'8444',SocialAccounts:['facebook','insta','gmail']},

  //   ];
  // color = 'red';
  // bgColor = 'green';
  // updateColor() {
  //   this.color = 'pink';
  //   this.bgColor = 'blue';
  // }

  //Toggle
  color1 = 'red';
  bgcolor1 = 'green';
  color2 = 'blue';
  bgcolor2 = 'grey';

  display = false;
  toggle() {
    this.display = !this.display;
  }

  
}

