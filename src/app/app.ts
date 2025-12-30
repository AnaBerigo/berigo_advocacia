import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cta } from './components/cta/cta';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Cta],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landingpage-advocacia');
}
