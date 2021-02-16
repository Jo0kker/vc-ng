import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  get lastPost(): any[] {
    return this.#_lastPost = [
      {
        name: 'bonjour',
        date: '20-13-3215'
      },
      {
        name: 'au-revoire',
        date: '20-13-3215'
      }
    ];
  }
  undevDev = '../../assets/images/under-dev.jpg';
  baniere = '../../assets/images/img-baniere.jpeg';

  #_lastPost: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
