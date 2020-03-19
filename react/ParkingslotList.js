import React, { Component } from 'react'
import Parkingslots from './data/parkingslots.json'
import {useState} from 'react'


function ParkingslotList() {
    
    const [slotList, setSlotList] = useState([]);
    
    // Gets between 90% - 100% of the total parkingslots from the json-file.
    function getParkingslots() {
        document.getElementById("title").innerHTML = "Totala parkeringar";
        setSlotList(Parkingslots.sort(() => .5 - Math.random()).slice(0, Math.floor(Math.random() * (Parkingslots.length * .10)) + Parkingslots.length * .90));
    }
    // Gets all the available parkingslots between 50 - 200
    function availableParkingslots() {
        document.getElementById("title").innerHTML = "Lediga parkeringar";
        setSlotList(Parkingslots.sort(() => .5 - Math.random()).slice(0, Math.floor(Math.random() * 151) + 50));
    }
        return (
            <div className="wrapper">
                <div className="content">
                    <h1>Parkingslots</h1>
                    <button className="button" onClick={getParkingslots}>Visa Alla Parkeringar</button>
                    <button className="button" onClick={availableParkingslots}>Visa Lediga Parkeringar</button>
                    <h3 id="title"></h3>
                    <div className="counter">{slotList.length}</div>
                    <div className = "list" >
                        {slotList.map((slot) => {
                            return  <div className="slotItem" key={slot.id}>
                                        <div className="slot-id">
                                            <span><b>Parkeringsplats: </b>{slot.id}</span>
                                        </div>
                                        <div className="slot-section">
                                            <span><b>Sektion: </b>{slot.section}</span>
                                        </div>
                                        <div className="slot-type">
                                            <span><b>Typ: </b>{slot.type}</span>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        );
}

export default ParkingslotList;
