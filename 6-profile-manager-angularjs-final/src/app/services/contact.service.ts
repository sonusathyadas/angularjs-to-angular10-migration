import { Inject, Injectable } from '@angular/core';
// import { downgradeInjectable } from '@angular/upgrade/static';
// import * as angular from 'angular';
import { ToasterService } from 'angular2-toaster';
import { Contact } from './contact-resource';

@Injectable({
    providedIn:'root'
})
export class ContactService {

    private page = 1;
    private hasMore = true;
    private isLoading = false;
    private isSaving = false;
    private isDeleting = false;
    private persons = [];
    public search = '';
    public sorting = "name";
    public ordering = "ASC";

    constructor(@Inject(Contact) private Contact:Contact, @Inject(ToasterService) private toaster:ToasterService) {
        this.loadContacts();
    }

    getPerson(email) {
        for (let person of this.persons) {
            if (person.email === email) {
                return person;
            }
        }
    }

    doSearch() {
        this.hasMore = true;
        this.page = 1;
        this.persons = [];
        this.loadContacts();
    }

    doOrder() {
        this.hasMore = true;
        this.page = 1;
        this.persons = [];
        this.loadContacts();
    }

    loadContacts() {
        if (this.hasMore && !this.isLoading) {
            this.isLoading = true;

            var params = {
                _page: this.page,
                _sort: this.sorting,
                _order: this.ordering,
                q: this.search
            };

            this.Contact.query(params)
                .then((res) => {
                    console.log(res);
                    for (let person of res) {
                        this.persons.push(person);
                    }
                    if (res.length === 0) {
                        this.hasMore = false;
                    }
                    this.isLoading = false;
                })
        }
    }

    loadMore() {
        if (this.hasMore && !this.isLoading) {
            this.page += 1;
            this.loadContacts();
        }
    }

    updateContact(person) {
        return new Promise<void>((resolve, reject) => {
            this.isSaving = true;
            this.Contact.update(person)
                .then(()=> {
                    this.isSaving = false;
                    this.toaster.pop("success", "Updated " + person.name);
                    resolve();
                });
        })

    }

    removeContact(person) {
        return new Promise<void>((resolve, reject) => {
            this.isDeleting = true;
            let name = person.name;
            this.Contact.remove(person)
                .then(()=> {
                    this.isDeleting = false;
                    var index = this.persons.indexOf(person);
                    this.persons.splice(index, 1);
                    this.toaster.pop("success", "Deleted " + name);
                    resolve();
                });
        })
    }

    createContact(person) {
        return new Promise<void>((resolve, reject) => {
            this.isSaving = true;
            this.Contact.save(person)
                .then(()=> {
                    this.isSaving = false;
                    this.hasMore = true;
                    this.page = 1;
                    this.persons = [];
                    this.loadContacts();
                    this.toaster.pop("success", "Created " + person.name);
                    resolve();
                });
        })
    }

}
// angular
//     .module("bytestream")
//     .service("ContactService", downgradeInjectable(ContactService));