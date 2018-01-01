import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

const sessionStroageKey = "currentUser";

@Injectable()
export class AuthorizationService  {

    constructor(private http: Http, private route: Router) { }

    public saveAccount(userInfo: any): boolean {
        sessionStorage.setItem(sessionStroageKey, JSON.stringify(userInfo));
        return true;
    }

    public removeAccount(): boolean {
        sessionStorage.removeItem(sessionStroageKey);
        return true;
    }

    public isLogin(role?): boolean {
        let currentUser = this.getCurrentUser() ?  this.getCurrentUser().role : null;
        console.log("currentUser",currentUser,'role',role)
        return  role? 
                role === currentUser ? true :  false 
                :
                currentUser
    }

    public getCurrentUser(): any {
        return JSON.parse(sessionStorage.getItem(sessionStroageKey));
    }

}