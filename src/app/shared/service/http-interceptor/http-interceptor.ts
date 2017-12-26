import { Injectable } from '@angular/core';
import { Request,Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

@Injectable()
export class HttpInterceptor {
    constructor(private router:Router){}

    beforeRequest(request:Request): Request {
        return request;
    }

    afterResponse(res: Observable<Response>): Observable<any> {
        return res;
    }
}