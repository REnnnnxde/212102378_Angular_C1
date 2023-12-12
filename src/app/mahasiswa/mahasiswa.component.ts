import { Component, OnInit, AfterViewInit, Renderer2} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

declare const $: any;

@Component({
  selector: 'app-mahasiswa',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './mahasiswa.component.html',
  styleUrl: './mahasiswa.component.css'
})
export class MahasiswaComponent implements OnInit, AfterViewInit {
  data: any;
  table1: any;

  constructor(private renderer : Renderer2){}

  ngOnInit(): void {
    this.bind_mahasiswa();
  }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this.table1 = $("#table1").DataTable();
    this.bind_mahasiswa();
  }

  bind_mahasiswa(): void {
    fetch('https://stmikpontianak.net/011100862/tampilMahasiswa.php')
      .then(response => response.json())
      .then((data: any) => {
        console.log(data);
        this.table1.clear();

        data.forEach((element: any) => {
          var tempatTanggalLahir = element.TempatLahir + " , " + element.TanggalLahir;

          var row = [
            element.NIM,
            element.Nama,
            element.JenisKelamin,
            tempatTanggalLahir,
            element.JP,
            element.Alamat,
            element.StatusNikah,
            element.TahunMasuk,
          ];

          console.log(tempatTanggalLahir);
          $('#table1').DataTable().row.add(row);
        });

        $('#table1').DataTable().draw(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}