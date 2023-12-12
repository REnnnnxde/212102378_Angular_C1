import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard3',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, SidebarComponent ],
  templateUrl: './dashboard3.component.html',
  styleUrl: './dashboard3.component.css'
})
export class Dashboard3Component {

}
