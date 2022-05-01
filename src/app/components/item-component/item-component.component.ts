import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiInterface } from 'src/app/models/api.interfaces';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss'],
})
export class ItemComponentComponent implements OnInit {
  @Input() item!: string | null;

  @Output() readonly onSelect: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectItem(): void {
    this.item && this.onSelect.emit(this.item);
  }
}
