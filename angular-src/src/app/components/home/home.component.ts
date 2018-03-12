import { Component, OnInit,ViewChild } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private authService:AuthService,) { }

  private redirectURL;
  amount:Number;
  // paybutton: boolean = false;

// @ViewChild('paybtn') paybtn;

  ngOnInit() {
      //console.log('paybtn', this.paybtn);
  }
  pay(amount){
      document.getElementById("loading").style.display = "block";
       //console.log(this.load);
  	const donationAmount={
  		amt:this.amount
  	}
  	console.log("donationAmount",donationAmount);
  	this.authService.pay(donationAmount).subscribe(data=>{
  		this.redirectURL=data.href;
  		window.location.href=this.redirectURL;
  	},error=>console.log(error));

  }

  // onEnterAmount(amount){
  //   console.log(amount);
  //   this.paybutton = true;
  //   console.log(this.paybutton);

  // }

  
}
