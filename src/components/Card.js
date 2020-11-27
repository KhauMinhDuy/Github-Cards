import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const dataReceive = this.props;
        return (
            <div className='row my-3 mx-auto w-75'>
                <div className="col-2">
                    <img className='img-fluid' src={dataReceive.avatar_url} alt="avatar"/>
                </div>
                <div className="col-3">
                    <div className="font-weight-bold">{dataReceive.name}</div>
                    <div className="company">{dataReceive.company}</div>
                </div>
            </div>
        );
    }
}

export default Card;