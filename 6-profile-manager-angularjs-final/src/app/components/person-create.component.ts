
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { downgradeComponent } from '@angular/upgrade/static';
// import * as angular from 'angular';
import { ContactService } from '../services/contact.service';
//import { UIRouterState } from '../upgraded-providers';

@Component({
    selector: 'personCreate', // <person-create></person-create>
    templateUrl: `app/components/person-create.component.html`
})
export class PersonCreateComponent {
    private person = {
        name:'',
        email:'',
        photo:'',
        sex:'M',
        birthdate:'',
        phonenumber:'',
        address:'',
        city:'',
        country:''
    };

    constructor(@Inject(ContactService) private contacts:ContactService, 
        @Inject(Router) private router:Router) {
    }

    save() {
        console.log("createContact");
        let self= this;
        this.contacts.createContact(this.person)
            .then(function () {
                self.router.navigate(['list']);
            });
    };
}

// angular
//     .module("bytestream")
//     .directive('personCreate', downgradeComponent({
//         component:PersonCreateComponent
//     }));