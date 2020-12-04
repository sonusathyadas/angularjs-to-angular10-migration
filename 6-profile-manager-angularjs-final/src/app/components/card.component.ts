import { Component, Inject, Input } from '@angular/core';
// import { downgradeComponent } from '@angular/upgrade/static';
// import * as angular from 'angular';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'ccCard',
    template: `<div class="col-md-6">
    <div class="well well-sm">
      <div class="row">
        <div class="col-md-4">
          <img src="{{ user.photo | defaultImage  }}"
               alt=""
               class="img-rounded img-responsive" />
        </div>
        <div class="col-md-8">
          <h4>{{ user.name }}
            <i class="fa"
               [ngClass]="{'fa-female':user.sex == 'F', 'fa-male': user.sex == 'M'}"></i>
          </h4>
          <small>{{ user.city }}, {{ user.country }}
            <i class="fa fa-map-marker"></i>
          </small>
          <p>
            <i class="fa fa-envelope-o"></i>
            {{ user.email }}
            <br />
            <i class="fa fa-gift"></i>
            {{ user.birthdate | date:"longDate"}}
          </p>
  
  
          <a class="btn btn-default btn-sm"
             [routerLink]="['/edit',user.email]">
            <i class="fa fa-pencil"></i>
            &nbsp;Edit
          </a>
  
          <a class="btn btn-danger btn-sm"
             ladda="isDeleting"
             (click)="deleteUser()">
            <i class="fa fa-trash"></i>
            &nbsp;Delete
          </a>
  
        </div>
      </div>
    </div>
  </div>
    `})
export class CardComponent {
    private isDeleting;
    @Input() private user;

    constructor(@Inject(ContactService) private ContactService:ContactService) {
    }

    deleteUser() {
        this.isDeleting = true;
        let self = this;
        this.ContactService.removeContact(this.user)
            .then(function () {
                self.isDeleting = false;
            });
    }
}

// angular
//     .module("bytestream")
//     .directive('ccCard', downgradeComponent({
//         component:CardComponent,
//         inputs:['user']
//     }))