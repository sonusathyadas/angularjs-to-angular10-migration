import { Component, Inject } from '@angular/core';
// import { downgradeComponent } from '@angular/upgrade/static';
// import * as angular from 'angular';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'personList', //<person-list></person-list>
    template: `<div class="col-md-12">

    <div class="row" infiniteScroll
        [infiniteScrollDistance]="2"
        [infiniteScrollThrottle]="50"
        [immediateCheck]="false"
        (scrolled)="contacts.loadMore()">
    
      <ccCard *ngFor="let person of contacts.persons" [user]="person">
      </ccCard>
  
    </div>
  
    <div *ngIf="contacts.persons.length == 0 && !contacts.isLoading">
      <div class="alert alert-info">
        <p class="text-center">No results found for search term '{{contacts.search }}'</p>
      </div>
    </div>
  
    <ccSpinner [isLoading]="contacts.isLoading" [message]="'Loading...'"></ccSpinner>
  </div>`})
export class PersonListComponent {
    constructor(@Inject(ContactService) private contacts: ContactService) {
    }
}

// angular
//     .module("bytestream")
//     .directive('personList', downgradeComponent({
//         component: PersonListComponent
//     }));