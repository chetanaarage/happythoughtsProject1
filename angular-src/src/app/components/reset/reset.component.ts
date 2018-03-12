import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
//import { Router, NavigationCancel } from '@angular/router';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
	password:String;
	confirm:String;
  token:String;
  constructor(private validateService:ValidateService,
  		      private flashMessage:FlashMessagesService,
  		      private authService:AuthService,
            private route:ActivatedRoute,
  		      private router:Router) { 

  	

  }

  ngOnInit() {
   // this.route.params.subscribe(params => {
   //    this.token = params['token']; // --> Name must match wanted parameter
   //  });
    this.token = this.route.snapshot.params["token"];
   
  }

  onResetPassword(){
   //  console.log(this.token);
    
  	// console.log("access_token",resetToken);
  	const user={
  		password:this.password,
  		confirm:this.confirm,
      token:this.token
  	}


  	console.log("in reset component user",user);
  	this.authService.resetPassword(user).subscribe(data=>{
  		console.log("data in reset resetPassword",data);
      if(data.success){
        this.flashMessage.show(data.msg,{
          cssClass:'alert-success',
          timeout:1000});
        this.password="";
        this.confirm="";
        this.router.navigate(['/login']);

      }else{
        this.flashMessage.show('Unable to change password',{
          cssClass:'alert-danger',
          timeout:1000});
        this.router.navigate(['/forgotten-password']);
      }
  	})
  }

}
