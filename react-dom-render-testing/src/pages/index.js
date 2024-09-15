import {Component, useState} from 'react';
import Row from "@/components/Row";
import Menu from "@/components/Menu";

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            numberOfRows: 0,
            data: [],
        };

    }

    buildRows = (amount,currentLength) =>{
        let returnArray= [];
        for(let i = 0; i<amount; i++){
            returnArray.push({id: i+currentLength, label:'label '+(i+currentLength)});
        }
        return returnArray;
    }

    createRows = (amount) =>{
        this.setState({
            numberOfRows: amount,
            data: this.state.data.concat(this.buildRows(amount,0))
        })
    }

    addRows = (amount) =>{
        this.setState({
            numberOfRows: this.state.numberOfRows+amount,
            data: this.state.data.concat(this.buildRows(amount,this.state.data.length))
        })
    }

    updateRows = ()=>{
		this.setState(prevState=> {
			return {
				...prevState,
				data: prevState.data.map(item=> {return {id:item.id,label:item.label+"updated"}}),
			};
		});
    }

    removeRows = ()=>{
        this.setState({
            numberOfRows: 0,
            data: [],
        })
    }

    render() {
        return(
        <div>
            <Menu
                create={this.createRows}
                add={this.addRows}
                remove={this.removeRows}
                update={this.updateRows}
                count={this.state.numberOfRows}
                key={this.state.numberOfRows}
            />
            <table id="table">
                <tbody>
                    {this.state.data.map((item)=>(
                        <Row
                            key={item.label}
                            id={item.id}
                            label={item.label}
                        />
                    ))}
                </tbody>
            </table>
        </div>
        );
    }
}

