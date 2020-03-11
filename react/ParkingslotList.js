import React, { Component } from 'react'
import Parkingslots from './data/parkingslots.json'

class ParkingslotList extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <h1>Parkingslots</h1>
                    <button className="button" >Visa Parkeringar</button>
                    <div className = "list" >
                        {Parkingslots.map((slot) => {
                            return  <div className="slotItem">
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

export default ParkingslotList;