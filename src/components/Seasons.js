import React from "react";
import {SeasonDisplay} from "./seasons/SeasonDisplay";
import {Spinner} from "./seasons/Spinner";
import "./sass/border.scss";


export class Seasons extends React.Component {
    state ={ lat: null, errorMessage: ""};

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({lat:position.coords.latitude}) },
            (error) => this.setState({errorMessage:error.message})
        );
    }

    renderContent(){
        const {lat, errorMessage} = this.state;
        if(!lat && errorMessage) return <div>error {errorMessage}</div>;
        if(lat && !errorMessage) return <SeasonDisplay lat={lat} />;
        return <Spinner message="Please accept your Location" />
    }

    render(){
        return(
            <div className="border">{this.renderContent()}</div>
        )
    }
}
