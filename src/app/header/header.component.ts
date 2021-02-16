import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = '../../assets/images/logo.png';
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
