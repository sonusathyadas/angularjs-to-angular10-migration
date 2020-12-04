import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import * as angular from 'angular';
import { PersonCreateComponent } from './components/person-create.component';
import { PersonEditComponent } from './components/person-edit.component';
import { PersonListComponent } from './components/person-list.component';
import { SearchComponent } from './components/search.component';

export const routes:Routes=[
    { path:'', pathMatch:'full', redirectTo:'/list(header:search)'},
    { path:'create', component: PersonCreateComponent},
    { path:'edit/:email', component:PersonEditComponent},
    { path:'list', component:PersonListComponent},
    { path:'search', component:SearchComponent, outlet:'header' }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}

// angular
//   .module("bytestream")
//   .config(function($stateProvider, $urlRouterProvider) {
//     $stateProvider
//       .state("list", {
//         url: "/",
//         views: {
//           main: {
//             template:'<person-list></person-list>'
//           },
//           search: {
//             template:'<search></search>'
//           }
//         }
//       })
//       .state("edit", {
//         url: "/edit/:email",
//         views: {
//           main: {
//             template:'<person-edit></person-edit>'
//           }
//         }
//       })
//       .state("create", {
//         url: "/create",
//         views: {
//           main: {
//             template:'<person-create></person-create>'
//           }
//         }
//       });

//     $urlRouterProvider.otherwise("/");
//   });
