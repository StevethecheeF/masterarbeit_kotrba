import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MenuComponent} from "./menu/menu.component";
import {RowComponent} from "./row/row.component";
import {CommonModule} from "@angular/common";

@Component({
	selector: 'app-root',
	standalone: true,
	imports : [MenuComponent,RowComponent,CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
	data:{id:number,label:string}[] = [];
	numberOfRows:number = 0;

	buildRows(amount:number, currentLength:number) {
		console.log("build")
		let returnArray = [];
		for (let i = 0; i < amount; i++) {
			returnArray.push({id: i + currentLength, label: 'label ' + (i + currentLength)});
		}
		return returnArray;
	}

	createRows(amount:number){
		this.numberOfRows = amount;
		this.data = this.buildRows(amount, 0);
	}

	addRows(amount:number){
		this.numberOfRows +=amount;
		let newRows = this.buildRows(amount,this.numberOfRows)
		this.data = this.data.concat(newRows)
	}

	updateRows(){
		this.data.forEach(item => item.label += "changed")
	}

	removeRows(){
		this.data = [];
		this.numberOfRows = 0;
	}


	trackByFn(index: any,item:{id:number,label:string}) {
		return [item.id,item.label];
	}
}
