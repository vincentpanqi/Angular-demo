/**
 * auther: deepthan
 * createDate: 2017.10.23
 * explain: 应用的主要入口点。 
 * 
 * */ 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
// import { restoreState } from '@ngrx/store';

if (environment.production) {
  enableProdMode();

  // 禁止打印console信息
  window.console.log = function (){};
  window.console.info = function (){};   
  window.console.warn = function (){};   
  window.console.error = function (){};   
  window.console.debug = function (){};  

}

// 热替换 ng server --hmr + 下面的配置
declare var module: any;
if(module.hot) { // 如果webpack启用了热替换功能
  // 接受模块更新的事件，同时阻止这个事件继续冒泡
  module.hot.accept();
//   restoreState(module.hot.data.state); // 热替换后的组件数据会丢失，得用到ngrx管理组件数据从而还原数据状态,
  module.hot.dispose(() => {
		let styles = document.head.querySelectorAll('style');
		for(let i = 0, len = styles.length; i++; i < len) {
			if(styles[i].innerText.indexOf('_ng') >= 0) {
				styles[i].remove();
				styles[i] = null;
			}
		}
	});
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
