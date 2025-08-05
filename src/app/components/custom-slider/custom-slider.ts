import { Component } from '@angular/core';
import {texts } from '../../constants/texts';

@Component({
  standalone: true,
  selector: 'app-custom-slider',
  imports: [],
  templateUrl: './custom-slider.html',
  styleUrl: './custom-slider.css',
})

export class CustomSlider {
  currentIndex = 0;
  private readonly HOME = texts.HOME;

  slides = [
    {
      id: 0,
      image: 'assets/icons/logo.svg',
      text: this.HOME.version,
    },
    {
      id: 1,
      image: 'assets/images/slider1.png',
      text: this.HOME.taskPlanning,
    },
    {
      id: 2,
      image: 'assets/images/slider2.png',
      text: this.HOME.weeklySchedule,
    },
    {
      id: 3,
      image: 'assets/images/slider3.png',
      text: this.HOME.teamTasks,
    },
    {
      id: 4,
      image: 'assets/images/slider4.png',
      text: this.HOME.dataSecurity,
    },
  ];

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }
}
