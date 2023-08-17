import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data-service'

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: any[] = [];
  type: string = '';

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe((paramMap: any) => {
      const type = paramMap.params.type;
      this.doDataFetch(type);
    });
  }

  doDataFetch(type: string) {
    switch (type) {
      case 'senate':
        this.dataService.getSenatorData().subscribe((data: any) => {
          this.candidates = data;
        });
      break;
    }
  }

}
