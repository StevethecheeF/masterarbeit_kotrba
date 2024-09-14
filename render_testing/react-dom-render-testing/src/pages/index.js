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

    removeRows = ()=>{
        this.setState({
            numberOfRows: 0,
            data: [],
        })
    }

    render() {
        return(
        <div className="app">
            <Menu
                create={this.createRows}
                add={this.addRows}
                remove={this.removeRows}
                count={this.state.numberOfRows}
                key={this.state.numberOfRows}
            />
            <table className="table">
                <tbody>
                    {this.state.data.map((item)=>(
                        <Row
                            key={item.id}
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

