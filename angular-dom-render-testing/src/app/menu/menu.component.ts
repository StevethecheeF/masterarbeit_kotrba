import {Component, input, Input} from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
	@Input() numberOfRows!: number;
	@Input() addRows!: Function;
	@Input() createRows!: Function;
	@Input() removeRows!: Function;
}
