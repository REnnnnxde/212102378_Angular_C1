
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

//Dashboard


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [

    CommonModule,
    RouterLink,
    RouterLinkActive,

  ],

  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  @Input() moduleName: string = "";
}
