import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from "gsap";
import { Cta } from './components/cta/cta';
import { Navbar } from './components/navbar/navbar';

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Cta],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object, private zone: NgZone
  ) {
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });

      setTimeout(() => ScrollTrigger.refresh(), 0);
    });
  }
}
