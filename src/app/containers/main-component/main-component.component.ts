import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ApiInterface } from 'src/app/models/api.interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit {
  abilities$!: Observable<string[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.abilities$ = this.getAbilities();
  }

  getAbilities(): Observable<string[]> {
    return this.apiService.getAbilities();
  }

  selectItem(id: string): void {
    // SOME ACTION
  }
}
