import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from '../content/content.component';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent, ContentComponent],

  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminComponent {

}
