import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-custom-slider',
  imports: [],
  templateUrl: './custom-slider.html',
  styleUrl: './custom-slider.css',
})
export class CustomSlider {
  currentIndex = 0;

  slides = [
    {
      id: 0,
      image: 'assets/icons/logo.svg',
      text: 'v 1.0.0',
    },
    {
      id: 1,
      image: 'assets/images/slider1.png',
      text: 'Plan your tasks to do, that way you’ll stay organized and you won’t skip any',
    },
    {
      id: 2,
      image: 'assets/images/slider2.png',
      text: 'Make a full schedule for the whole week and stay organized and productive all days',
    },
    {
      id: 3,
      image: 'assets/images/slider3.png',
      text: 'create a team task, invite people and manage your work together with your team',
    },
    {
      id: 4,
      image: 'assets/images/slider4.png',
      text: 'You information are secure with us, we use the best security practices to keep your data safe',
    },
  ];

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }
}
