import {Component, OnInit, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    expanded: any = {};
    name: string;
    @ViewChild('myTable') table: any;
  jobTypes = [
    {
        name: 'Full-time',
        selected: false
    },
    {
        name: 'Part-time',
        selected: false
    },
    {
        name: 'Contract',
        selected: false
    },
    {
        name: 'Freelance',
        selected: false
    }
  ];

  jobs = [
    {
        name: 'Front',
        type: 'Full-time',
        info: 'Lorem ipsum dolor sit amet.',
        posted: 'Lorem'
    },
    {
        name:  'Free',
        type: 'Part-time',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        posted: 'Lorem ipsum'
    }
  ];

  get selectedjobTypes() {
    return this.jobTypes.reduce((types, type) => {
      if (type.selected) {
        types.push(type.name);
      }
      return types;
    }, []);
  }
  toggleExpandRow(row) {
        this.table.rowDetail.toggleExpandRow(row);
      }
}

