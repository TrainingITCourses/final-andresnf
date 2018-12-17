import { Launch } from './../store/models/launch';
import { Component, EventEmitter, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../store/api.service';
import { Status } from '../store/models/status';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { ConditionStatus } from '../reducers/condition.actions';


@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  @Output() public search = new EventEmitter<any>();
  public statuses: Status[];
  public launches: Launch[];
  public conditions: any[];
  public entry: any = null;
  public updateVaribles: Boolean = false;


  constructor(private api: ApiService, private store: Store<State>, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {

   this.store.select(s => s.condition).subscribe(value => {
      this.statuses = value.conditions;
      if (this.statuses !== []) {
        this.cdRef.detectChanges();
      }
   });

   this.store.dispatch(new ConditionStatus(this.conditions));

   this.getLaunchList();
  }

  getLaunchList(): void {
    this.api.getLaunchList().
    subscribe(data =>
        this.launches = data);
  }

}
