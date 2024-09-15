import {Component} from "react";

export default class Menu extends Component {
    create = this.props.create;
    add = this.props.add;
    remove = this.props.remove;
    update = this.props.update;
    count = this.props.count;

    render() {
        return (
        <div>
            <div>
                <h1>Framework: React</h1>
            </div>
            <div >
                <p>total number of rows: {this.count}</p>
            </div>
            <div >
                <button id="create-1000" onClick={()=>this.create(1000)}>
                    create 1000
                </button>
                <button id="add-1000" onClick={()=>this.add(1000)}>
                    add 1000
                </button>
                <button id="create-10000" onClick={()=>this.create(10000)}>
                    create 10000
                </button>
                <button id="add-10000" onClick={()=>this.add(10000)}>
                    add 10000
                </button>
                <button id="update" onClick={()=>this.update()}>
                    update all
                </button>
                <button id="remove" onClick={()=>this.remove()}>
                    remove all
                </button>
            </div>
        </div>
        );
    }
}
