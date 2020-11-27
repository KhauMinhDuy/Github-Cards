import React, {Component} from 'react';
import Card from "./Card";


class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const dataReceive = this.props.data;
        return (
            <div>
                {dataReceive.map(e => <Card key={e.avatar_url} {...e}/>)}
            </div>
        );
    }
}

export default CardList;