import React, { Component } from 'react'
import ParkingslotList from './ParkingslotList'

class App extends Component {
    data() {
        return {
            slotList: []
        };
    }
    render() {
        return (
            <div className="App">   
                <ParkingslotList />
            </div> 
        );
    }
}

export default App;