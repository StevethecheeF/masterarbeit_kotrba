import {Component} from "react";

export default class Menu extends Component {
    create = this.props.create;
    add = this.props.add;
    remove = this.props.remove;
    count = this.props.count;

    render() {
        return (
        <div className="menu">
            <div className="framework">
                <h1>Framework: React</h1>
            </div>
            <div className="row-count">
                <p>total number of rows: {this.count}</p>
            </div>
            <div className="button-container">
                <button className="btn" onClick={()=>this.create(1000)}>
                    create 1000
                </button>
                <button className="btn" onClick={()=>this.add(1000)}>
                    add 1000
                </button>
                <button className="btn" onClick={()=>this.create(10000)}>
                    create 10000
                </button>
                <button className="btn" onClick={()=>this.add(10000)}>
                    add 10000
                </button>
                <button className="btn" onClick={()=>this.remove()}>
                    remove all
                </button>
            </div>
        </div>
        );
    }
}
