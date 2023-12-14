import { Component, OnInit, AfterViewInit, Renderer2, NgModule } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';
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


  constructor( private http: HttpClient, private renderer: Renderer2) {

  }


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
  showTambahModal(): void{
    $("#tambahModal").modal();
  }
  postRecord(): void{
    var nim = $("#nimText").val();
    var nama = $("#namaText").val();
    var jenisKelamin = $("#jenisKelaminSelect").val();
    var tempatLahir = $("#tempatLahirText").val();
    var tanggalLahir = $("#tanggalLahirText").val();
    var jp = $("#jpSelect").val();
    var alamat = $("#alamatText").val();
    var statusNikah = $("#statusNikahSelect").val();
    var tahunMasuk = $("#tahunMasukText").val();

    if (!nim || !nama || !jenisKelamin || !tempatLahir || !tanggalLahir || !jp || !alamat || !statusNikah || !tahunMasuk) {
      alert("Harap lengkapi semua kolom");
      return;
    }

    alamat = encodeURIComponent(alamat);
    jenisKelamin = encodeURIComponent(jenisKelamin);
    jp = encodeURIComponent(jp);
    nama = encodeURIComponent(nama);
    nim = encodeURIComponent(nim);
    statusNikah = encodeURIComponent(statusNikah);
    tahunMasuk = encodeURIComponent(tahunMasuk);
    tanggalLahir = encodeURIComponent(tanggalLahir);
    tempatLahir = encodeURIComponent(tempatLahir);

    var url = "https://stmikpontianak.net/011100862/tambahMahasiswa.php" +
    "?alamat=" + alamat +
    "&jenisKelamin=" + jenisKelamin +
    "&jp=" + jp +
    "&nama=" + nama +
    "&nim=" + nim +
    "&statusPernikahan=" + statusNikah +
    "&tahunMasuk=" + tahunMasuk +
    "&tanggalLahir=" + tanggalLahir +
    "&tempatLahir=" + tempatLahir;

    this.http.get(url)
    .subscribe(
      (data: any) => {
        console.log(data);
        alert(data.status + "-->" + data.message);
        this.bind_mahasiswa();
        $("#tambahModal").modal("hide");
      },
      (error: any) => {
        console.error('Error occurred:', error);
        // Lakukan penanganan kesalahan di sini (contohnya: menampilkan pesan kesalahan)
        alert('Terjadi kesalahan saat memproses permintaan.');
        // Tetap panggil bind_mahasiswa() untuk memperbarui data jika terjadi kesalahan
        this.bind_mahasiswa();
        $("#tambahModal").modal("hide");
      }
    );

  }
}
