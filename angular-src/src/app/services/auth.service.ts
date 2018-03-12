import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
	authToken:any;
	user:any;

private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
 private options = new RequestOptions({ headers: this.headers });

  constructor(private http:Http) { }

  registerUser(user){

    console.log("in authenticate service register",user);
  	let headers=new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post('http://localhost:3000/users/register',user,{headers:headers})
  				.map(res=>res.json());
  }

  authenticateUser(user){
    console.log("in authenticate service login",user);
  	let headers=new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers})
  				.map(res=>res.json());
  }

  forgottenPasswordUser(user){
    console.log('in AuthService forgotten forgottenPassword',user);
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/forgottenPassword',user,{headers:headers})
                .map(res=>res.json());
  }


  resetPassword(user){
    console.log("in resetPassword service ",user.token);
    // let token=user.token;
    // console.log("user.token",token);
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    let options = new RequestOptions({ headers: headers });

    //let body = JSON.stringify(user);
    //console.log("body.token",body.token);
    return this.http.post('http://localhost:3000/reset/'+user.token,user,options)
                .map(res=>res.json());
  }


  getProfile(){
  	let headers=new Headers();
  	this.loadToken();
  	headers.append('Authorization',this.authToken);
  	headers.append('Content-Type','application/json');
  	return this.http.get('http://localhost:3000/users/profile',{headers:headers})
  				.map(res=>res.json());
  }



  pay(donationAmount){
    console.log("amount need to be paid",donationAmount)
    return this.http.post("http://localhost:3000/paypal/buy",JSON.stringify(donationAmount),this.options).map(res=> res.json());
  }

  storeUserData(token,user){
  	localStorage.setItem('id_token',token);
  	localStorage.setItem('user',JSON.stringify(user));
  	this.authToken=token;
  	this.user=user;
  }

  loadToken(){
  	const token=localStorage.getItem('id_token');
  	this.authToken=token;
  }

  loggedIn(){
  	return tokenNotExpired('id_token');
  }

  logout(){
  	this.authToken=null;
  	this.user=null;
  	localStorage.clear();
  }

}
