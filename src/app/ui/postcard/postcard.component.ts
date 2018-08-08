import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'ui-postcard',
    templateUrl: './postcard.component.html',
    styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {

    @Input() imageUrl: string
    @Input() name: string

    constructor() { }

    ngOnInit() {
    }

}
