import React, {useState} from 'react'
import Parkingslots from './data/parkingslots.json'
import RandomSeed from './data/randomSeed.json'

function ParkingslotList() {
    
    var randomArr = RandomSeed;
    const [randIdx, setRandIdx] = useState(0);
    const [slotList, setSlotList] = useState([]);

    // Gets a object from det randomArr that contains result from the for-loop that executed 100 000 math.random operations.
    function getRand(){
        setRandIdx(randIdx + 1);
        console.log(randIdx);
        return randomArr[randIdx%randomArr.length];
    }

    //for (let i = 0; i < 100000; i++) {
    //    randomArr[i] = Math.random();
    //}

    // Gets between 90% - 100% of the total parkingslots from the json-file.
    function getParkingslots() {
        document.getElementById("title").innerHTML = "Totala parkeringar";
        setSlotList(Parkingslots.sort(() => .5 - Math.random()).slice(0, Math.floor(getRand() * (Parkingslots.length * .10)) + Parkingslots.length * .90));
    }
    // Gets all the available parkingslots between 50 - 200
    function availableParkingslots() {
        document.getElementById("title").innerHTML = "Lediga parkeringar";
        setSlotList(Parkingslots.sort(() => .5 - Math.random()).slice(0, Math.floor(getRand() * 151) + 50));
    }

    return (
        <div className="wrapper">
            <div className="content">
                <h1>Parkingslots</h1>
                <button className="button" id="allaParkeringar" onClick={ () => getParkingslots() }>Visa Alla Parkeringar</button>
                <button className="button" id="ledigaParkeringar" onClick={ () =>availableParkingslots() }>Visa Lediga Parkeringar</button>
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
