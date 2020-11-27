import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import CardList from "./components/CardList";
import InputUser from "./components/InputUser";


const testData = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testData: testData
        };
    }

    addNewProfile = (profileData) => {
        this.setState(preState => ({
            testData: [...preState.testData, profileData]
        }));
    };

    render() {
        return (
            <div className="container">
                <h1 className='mx-auto my-2 w-50'>{this.props.title}</h1>
                <InputUser onSubmit={this.addNewProfile} />
                <CardList data={this.state.testData}/>
            </div>
        );
    }
}

export default App;
