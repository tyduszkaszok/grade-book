import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiSchools } from '../services/external/schools-api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-school-info',
  imports: [NgFor],
  templateUrl: './school-info.html',
  styleUrl: './school-info.scss',
})
export class SchoolInfo implements OnInit {
  constructor(public apiSchools: ApiSchools) { }

  schools: any[] = [];
  tableSchools: number[] = [];

  ngOnInit(): void {
    this.apiSchools.getSchools().subscribe({
      next: (data) => {
        this.schools = data;
        this.tableSchools = this.schools
          .map((school, index) => ({ school, index }))       
          .filter(item =>
            item.school.attributes.col4.val !== 'Szamotuły' ||
            item.school.attributes.col5.val !== 'obszar wiejski'
          )
          .map(item => item.index);
        console.log('Pobrano dane:', this.tableSchools);
      }
    })

  }

getValueFromCol(id: number, col: string): string {
  if (!this.schools[id]) return '—';  
  return this.schools[id].attributes[`col${col}`].val || '—';
}
}
