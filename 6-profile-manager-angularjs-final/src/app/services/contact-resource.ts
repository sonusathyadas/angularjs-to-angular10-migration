import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
// import { downgradeInjectable } from '@angular/upgrade/static';
// import * as angular from 'angular';

@Injectable({
    providedIn:'root'
})
export class Contact{
    private apiRoot:string ="http://localhost:3000/profiles";

    constructor(@Inject(HttpClient)private http:HttpClient){
    }

    //read all profiles
    query(params?):Promise<any[]>{
        return this.http.get<any[]>(this.apiRoot, {params}).toPromise();
    }

    //read a single profile
    get(id, params?):Promise<any>{
        return this.http.get<any>(this.apiRoot + "/" + id, {params}).toPromise();
    }

    //add a new profile
    save(data:any){
        return this.http.post(this.apiRoot, data).toPromise();
    }

    update(data:any){
        return this.http.put(this.apiRoot + "/" + data.id, data).toPromise();
    }

    remove(data:any){
        return this.http.delete(this.apiRoot + "/" + data.id).toPromise();
    }
}

// angular
//   .module("bytestream")
//   .service("Contact", downgradeInjectable(Contact));