import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

const sessionStroageKey = "currentUser";

@Injectable()
export class AuthorizationService {

    constructor(private http: Http, private route: Router) { }

    public saveAccount(userInfo: any): boolean {
        sessionStorage.setItem(sessionStroageKey, JSON.stringify(userInfo));
        return true;
    }

    public removeAccount(): boolean {
        sessionStorage.removeItem(sessionStroageKey);
        return true;
    }

    public isLogin(): boolean {
        let currentUser = this.getCurrentUser();
        console.log("currentUser",currentUser)
        return currentUser;
    }

    public getCurrentUser(): any {
        return JSON.parse(sessionStorage.getItem(sessionStroageKey));
    }

}