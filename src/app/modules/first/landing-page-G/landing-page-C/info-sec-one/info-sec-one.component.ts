import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-info-sec-one',
  templateUrl: './info-sec-one.component.html',
  styleUrls: ['./info-sec-one.component.scss']
})
export class InfoSecOneComponent implements OnInit {
  iconPack = {
    search: faSearch
  }
  constructor() { }

  ngOnInit() {
  }

}
