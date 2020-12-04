import { Component, ElementRef, Input, ViewChild } from '@angular/core';
// import { downgradeComponent } from '@angular/upgrade/static';
// import * as angular from 'angular';
import { Spinner } from 'spin.js';

@Component({
    selector: 'ccSpinner',
    template: `<div class="spinner" [hidden]="!isLoading">
    <span #spinnerEl></span>

    <p>{{ message }}</p>
    </div>`})
export class SpinnerComponent {
    @Input() private isLoading;
    @Input() private message;
    @ViewChild('spinnerEl') private spinnerEl:ElementRef;

    ngAfterViewInit(){
        let spinner = new Spinner({radius:8, width:5, length:3, lines:9});
        spinner.spin(this.spinnerEl.nativeElement);
    }
}

// angular
//     .module("bytestream")
//     .directive('ccSpinner',downgradeComponent({
//         component:SpinnerComponent,
//         inputs:['isLoading', 'message']
//     }))
