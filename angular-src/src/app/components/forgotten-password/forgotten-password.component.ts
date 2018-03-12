import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {
	email:String;

  constructor(private authService:AuthService,
  			  private flashMessage:FlashMessagesService,
  			  private router:Router) { }

  ngOnInit() {
  }

  onResetLinkSubmit(){
  	const user={
  		email:this.email 		
  	}

  	this.authService.forgottenPasswordUser(user).subscribe(data=>{
      console.log("data in forgotten-password",data);
  		if(data.success){
  			this.flashMessage.show(data.msg,{
  				cssClass:'alert-success',
  				timeout:1000});
  			this.router.navigate(['/login']);

  		}else{
  			this.flashMessage.show('Unable to send  reset link',{
  				cssClass:'alert-danger',
  				timeout:1000});
  			this.router.navigate(['/login']);
  		}
  	});

  }

}
