import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'nav-component',
    templateUrl: 'nav.component.html'
})

export class NavComponent implements OnInit {

    @Input() title: string;
    
    constructor() { }

    ngOnInit() { 

    }
}