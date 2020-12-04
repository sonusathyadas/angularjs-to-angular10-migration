// import 'angular';
// import 'angular-resource';
// import 'angular-animate';
// import 'angular-ui-router';
// import 'angular-ladda';
// import 'angular-spinner';
// import 'angular-strap';
// import 'angularjs-toaster';
// import 'ng-infinite-scroll';
// import 'angular-auto-validate/dist/jcs-auto-validate';

// import './app.main';
// import './services';
// import './filters';
// import './components';
// import './app.routes';

import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
// import { UpgradeModule } from '@angular/upgrade/static';


platformBrowserDynamic().bootstrapModule(AppModule)
    // .then(platformRef=>{
    //     console.log("Dual booting with AngularJS");
    //     const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    //     upgrade.bootstrap(document.body, ['bytestream'])
    // })