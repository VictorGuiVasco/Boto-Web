import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resumes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './resumes.component.html',
  styleUrl: './resumes.component.css',
})
export class ResumesComponent {
  timeFilter = [
    {
      option: '0 a 1 ano',
    },
    {
      option: '1 a 3 ano',
    },
    {
      option: '3 a 5 ano',
    },
    {
      option: 'A partir de 5 anos',
    },
  ];
  educationFilter = [
    {
      option: 'Ensino médio',
    },
    {
      option: 'Ensino superior',
    },
    {
      option: 'Pós graduação',
    },
    {
      option: 'Mestrado',
    },
    {
      option: 'Doutorado',
    },
  ];
}
