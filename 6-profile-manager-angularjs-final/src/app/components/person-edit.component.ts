import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { downgradeComponent } from '@angular/upgrade/static';
// import * as angular from 'angular';
import { ContactService } from '../services/contact.service';
//import { UIRouterState, UIRouterStateParams } from '../upgraded-providers';

@Component({
    selector: 'personEdit', //<person-edit></person-edit>
    templateUrl: `app/components/person-edit.component.html`
})
export class PersonEditComponent {

    private person = {};

    constructor(@Inject(ActivatedRoute) private route: ActivatedRoute,
        @Inject(Router) private router: Router,
        @Inject(ContactService) private contacts: ContactService) {
        
            this.route.params.subscribe(params=>{
                if(params['email']){
                    this.person = this.contacts.getPerson(params['email']);
                }
            })
        
    }

    save() {
        let self = this;
        this.contacts.updateContact(this.person)
            .then(function () {
                self.router.navigate(["list"]);
            });
    };

    remove() {
        let self = this;
        this.contacts.removeContact(this.person)
            .then(function () {
                self.router.navigate(["list"]);
            });
    };

}


// angular
//     .module("bytestream")
//     .directive('personEdit', downgradeComponent({
//         component: PersonEditComponent
//     }));