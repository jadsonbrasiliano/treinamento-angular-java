import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.css']
})
export class LabelInputComponent implements OnInit {

  @Input()
  label: String = '';

  @Input()
  valorDeEntrada: String = '';

  @Input()
  type: String = "text" || "email" || "password";

  constructor() { }

  ngOnInit(): void {
  }

}
