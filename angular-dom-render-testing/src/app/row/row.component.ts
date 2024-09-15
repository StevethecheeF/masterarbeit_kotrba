import {Component, Input} from '@angular/core';

@Component({
  selector: '[app-row]',
  standalone: true,
  templateUrl: './row.component.html',
  styleUrl: './row.component.css'
})
export class RowComponent {
	@Input() key!: number;
	@Input() label!:string;
}
