import { Injectable } from '@angular/core';
import { Http, Request, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
//import { HttpLoadingService } from './loading.service';
import { NzNotificationService } from 'ng-zorro-antd';

const HOST_URL = environment.api.host;

@Injectable()
export class HttpInterceptorService extends Http {
   
    constructor(backend: ConnectionBackend,  defaultOptions: RequestOptions, private router: Router,) {
                    // private _notification: NzNotificationService 
        super(backend, defaultOptions);
    }
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        //    console.log("全局拦截器--->(request)",url);
        return this.intercept(super.request(url, options));
    }
    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url, options));
    }
    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }
    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }
    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
    }
    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        //options.headers.append('Content-Type', 'application/json');
        return options;
    }
    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.map(response => {
            // console.log('全局拦截器--(response)', response);
            return response;
        })
            .catch((err, source) => {
                //console.log(err.url+"<----url"+"===="+err.url.indexOf('/portal/login'));
                if (err.status == 403) {
                    // console.log("403")
                    // location.href = HOST_URL +'/login';
                    // this.createNotification('error', 'error', '身份信息过期，请重新登录');
                    // setTimeout(()=>{
                       this.router.navigateByUrl('/login');
                    // },1000);
                } else if (err.status == 401 ) {
                    this.router.navigateByUrl('/login');
                } else if (err.status == 404 ) {
                    this.router.navigateByUrl('/login');
                }
                else  {
                    // location.href = HOST_URL + '/login';
                    // this.createNotification('error', 'error', '网络连接异常');
                    return Observable.throw(err);
                }
            });
    }

    // createNotification = (type, tit, content) => {
    //     this._notification.create(type, tit, content);
    // };
}