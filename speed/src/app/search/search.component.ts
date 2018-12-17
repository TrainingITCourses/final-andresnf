import { Criterio } from './../store/models/criterio';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../store/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public launches: any[];
  public filteredLaunches: any[] = [];
  constructor(private api: ApiService) {}

  ngOnInit() {
  }

  onSearch = (searchCiteria: Criterio) => {
    console.log('onSearch con criterio', searchCiteria.criterioName, ': ', searchCiteria.criterioValue );
    const searchName = searchCiteria.criterioName.toLowerCase();
    const searchValue = searchCiteria.criterioValue;
    const filteredLaunches = this.api.launches.filter(
      l =>
        (((searchName === 'estado') && (l.status === searchValue))));
     this.filteredLaunches = filteredLaunches;
  }
}

