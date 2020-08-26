import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show = false;
  scrollUp = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrolling, true);
  }

  scrolling = (s) => {
    const sc = s.target.scrollingElement.scrollTop;
    if (sc >= 100){this.scrollUp = true; }
    else{this.scrollUp = false; }
  }

}
