import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showWarningModal(message: string): void {
    // Implementasi fungsi untuk menampilkan modal peringatan di sini
  }

  signIn(): void {
    this.router.navigate(['/admin']);
  }
}
