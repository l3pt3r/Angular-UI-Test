import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-card',
  templateUrl: './inner-card.component.html',
  styleUrls: ['./inner-card.component.scss'],
})
export class InnerCardComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() info: string;
  @Input() img: string;

  constructor() {
    this.title ="";
    this.subTitle ="";
    this.info ="";
    this.img ="";
  }

  ngOnInit(): void {
  }
}
