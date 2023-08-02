import {Component} from 'react';

export default class Row extends Component{
    id = this.props.id;
    label = this.props.label;

    render() {
        return (
            <tr>
                <td> {this.id} </td>
                <td className="col-md-4"> {this.label} </td>
            </tr>
        );
    }
}

