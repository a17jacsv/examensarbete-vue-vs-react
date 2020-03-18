import React, { Component } from 'react'
import Parkingslots from './data/parkingslots.json'

class ParkingslotList extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <h1>Parkingslots</h1>
                    <button className="button" onClick={getParkingslots}>Visa Alla Parkeringar</button>
                    <button className="button" onClick={availableParkingslots}>Visa Lediga Parkeringar</button>
                    <div className = "list" >
                        {slotList.map((slot) => {
                            return  <div className="slotItem" key={slot.id}>
                                        <div className="slot-id">
                                            <span>Parkeringsplats: {slot.id}</span>
                                        </div>
                                        <div className="slot-section">
                                            <span>Sektion: {slot.section}</span>
                                        </div>
                                        <div className="slot-type">
                                            <span>Typ: {slot.type}</span>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

var slotList = [];

// Gets between 90% - 100% of the total parkingslots from the json-file.
function getParkingslots() {
    this.slotList = parkingslots.sort(() => .5 - Math.random()).slice(0, Math.floor(Math.random() * (parkingslots.length * .10)) + parkingslots.length * .90);
    console.log(slotList.length);
    console.log(slotList);
}
// Gets all the available parkingslots between 50 - 200
function availableParkingslots() {
    slotList = Parkingslots.sort(() => .5 - Math.random()).slice(0, Math.floor(Math.random() * 151) + 50);
    console.log(slotList.length);
    console.log(slotList);
}

export default ParkingslotList;
