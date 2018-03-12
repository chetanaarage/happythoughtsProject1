
import { Component, OnInit,ViewChild } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:Object;
//@ViewChild('toggle') menu_up;
  constructor(private authService:AuthService,
  			  private flashMessage:FlashMessagesService,
  			  private router:Router) { }
  collapse: boolean = true;

  ngOnInit() {

     // if(this.authService.loggedIn()){
      this.authService.getProfile().subscribe(profile=>{
      console.log("profile ",profile);
      this.user=profile.user;
    },
    err=>{
      console.log(err);
      return false;
    });
      
    //}
    
   
  }

  

  onLogoutClick(){
  	this.authService.logout();
  	this.flashMessage.show('You are logged out', {
  				cssClass:'alert-success',
  				timeout:5000});

  	this.router.navigate(['/login']);
  	return false;
  }
//@ViewChild('menu-toggle') menuup;
//   myFunction(){
//     //console.log('hitting myfuction',this.navb.nativeElement);
//      //var x = document.getElementById("myTopnav");
//   //   if (x.className === "topnav") {
//   //       x.className += " responsive";
//   //   } else {
//   //       x.className = "topnav";
//   //   }
//   // }

//    if (this.navb.nativeElement.className === "topnav") {
//           this.navb.nativeElement.className += " responsive";
//      } else {
//           this.navb.nativeElement.className = "topnav";
//       }
// }
  // toggle(){
  //   console.log(this.menuup);
  // }
}

