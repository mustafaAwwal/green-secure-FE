import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-info-sec-three',
  templateUrl: './info-sec-three.component.html',
  styleUrls: ['./info-sec-three.component.scss']
})
export class InfoSecThreeComponent implements OnInit {
  iconPack = {
    search: faSearch
  }
  constructor() { }

  ngOnInit() {
  }

}
