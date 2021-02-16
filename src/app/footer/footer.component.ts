import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  facebookIcon = faFacebookSquare;
  twitterIcon = faTwitterSquare;
  instaIcon = faInstagramSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
