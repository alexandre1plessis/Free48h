import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthService,
    private router: Router) {}

  login() {
    const hashedPassword = CryptoJS.SHA256(this.password).toString();
    this.authService.login(this.email, hashedPassword).subscribe(
      () => {
        this.router.navigate(['']);
        // Connexion réussie, rediriger l'utilisateur vers la page d'accueil
      },
      error => {
        // Afficher un message d'erreur à l'utilisateur
      }
    );
  }
}