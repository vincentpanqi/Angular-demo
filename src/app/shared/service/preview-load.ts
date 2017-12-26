import { Observable } from 'rxjs/Rx';
import { PreloadingStrategy, Route } from '@angular/router';

export class PreloadSelectedModules implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<boolean>): Observable<boolean> {
        return Observable.of(true).delay(5000).flatMap((_: boolean) => fn());
    }
}
