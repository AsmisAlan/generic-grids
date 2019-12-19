import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DataColumn } from './grids/data-column.model';
import { GenericGridComponent } from './grids/generic-grid/generic-grid.component';

interface DummyItem {
  id: number;
  title: string;
  description?: string;
}

const data: DummyItem[] = [
  {
    id: 1,
    title: 'one',
    description: 'uno'
  },
  {
    id: 2,
    title: 'two',
    description: 'dos dos'
  },
  {
    id: 3,
    title: 'three',
    description: 'tres tres tres'
  }
];

const columns: DataColumn<DummyItem>[] = [
  {
    name: 'ID',
    dataField: 'id',
    dataType: 'number'
  },
  {
    name: 'Title',
    dataField: 'title',
    dataType: 'string'
  },
  {
    name: 'Descr.',
    dataField: 'description',
    dataType: 'string'
  },
  {
    name: 'Descrp.',
    dataField: 'description',
    dataType: 'string'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'generic-grids';
  data = data;
  columns = columns;

  showVictory = false;

  // gridElem?: GenericGridComponent<DummyItem>;

  // @ViewChild('elem', { static: true })
  // public gridElement!: ElementRef;

  ngOnInit() {
    // this.gridElement.nativeElement.addEventListener('row-clicked', (eventInfo: any) => {
    //   // this.gridElement.keyExpr = 'id';
    //   // this.gridElement.columns = columns;
    //   // this.gridElement.items = data;
    //   console.log(eventInfo);
    // });
  }

  // onElemReady(event: CustomEvent<GenericGridComponent<DummyItem>>) {
  //   if (event) {
  //     console.log(event);
  //     this.gridElem = event.detail;
  //     this.gridElem.keyExpr = 'id';
  //     this.gridElem.columns = columns;
  //     this.gridElem.items = data;
  //   }
  // }
}
