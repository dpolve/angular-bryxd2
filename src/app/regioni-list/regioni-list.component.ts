import { Component, OnInit } from '@angular/core';
import { RegioniService } from '../regioni.service';

@Component({
  selector: 'app-regioni-list',
  templateUrl: './regioni-list.component.html',
  styleUrls: ['./regioni-list.component.css']
})
export class RegioniListComponent implements OnInit {

  constructor(public regioniService: RegioniService) { }

  ngOnInit() {
  }

}