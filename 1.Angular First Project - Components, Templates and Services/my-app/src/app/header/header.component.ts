import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true, // for angular version 19+ true by default
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {}