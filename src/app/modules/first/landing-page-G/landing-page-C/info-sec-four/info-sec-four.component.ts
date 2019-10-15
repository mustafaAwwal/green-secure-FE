import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-info-sec-four',
  templateUrl: './info-sec-four.component.html',
  styleUrls: ['./info-sec-four.component.scss']
})
export class InfoSecFourComponent implements OnInit {
  iconPack = {
    search: faSearch
  }
  constructor() { }

  ngOnInit() {
  }

}
