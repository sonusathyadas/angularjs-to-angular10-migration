import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import * as angular from 'angular';
import { ContactService } from '../services/contact.service';
import { debounceTime, tap } from 'rxjs/operators';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
    selector: 'search',
    template: `
    <form [formGroup]="myForm" class="navbar-form navbar-left">

    <div class="form-group">
      <input type="text"
             class="form-control"
             id="name"
             formControlName="search"
             placeholder="Search name..."
      />
    </div>
  
    <div class="form-group">
      <select class="form-control" formControlName="sorting">
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>
    </div>
  
    <div class="form-group">
      <select class="form-control" formControlName="ordering">
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
    </div>
  </form>`
})
export class SearchComponent implements OnInit {

    private myForm:FormGroup;

    constructor(@Inject(ContactService)private contacts:ContactService) {
        this.myForm=new FormGroup({
            search:new FormControl(),
            sorting:new FormControl('name'),
            ordering:new FormControl('ASC')
        })
    }

    loadMore() {
        this.contacts.loadMore();
    };

    ngOnInit(){
        this.myForm.valueChanges
            .pipe(
                debounceTime(400),
                tap(val=>console.log(val))
            )
            .subscribe(
                ({sorting, ordering,search})=>{
                    this.contacts.search = search;
                    this.contacts.ordering = ordering;
                    this.contacts.sorting = sorting;
                    this.contacts.doSearch();
                }
            )
    }
}

// angular
//     .module("bytestream")
//     .directive('search', downgradeComponent({
//         component:SearchComponent
//     }));