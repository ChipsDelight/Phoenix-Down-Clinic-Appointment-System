import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  clinicName: string = 'TEST NAME';
  constructor() { }

  ngOnInit(): void {
  }

}
