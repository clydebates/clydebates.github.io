import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service'

@Component({
  selector: 'app-senators',
  templateUrl: './senators.component.html',
  styleUrls: ['./senators.component.css']
})
export class SenatorsComponent implements OnInit {

  senators: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSenatorData().subscribe(data => {
      this.senators = data;
    });
  }

}
