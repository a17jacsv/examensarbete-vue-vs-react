<template>
  <div class="wrapper">
    <div class="content">
      <h1>Parkingslots</h1>
      <button class="button" id="allaParkeringar" v-on:click="getParkingslots">Visa Alla Parkeringar</button>
      <button class="button" id="ledigaParkeringar" v-on:click="availableParkingslots">Visa Lediga Parkeringar</button>
      <h3 id="title"></h3>
      <div class="counter">{{slotList.length}}</div>
      <div class="list">
        <div v-for="slot in slotList" :key="slot.id" class="slotItem">
          <div class="slot-id">
            <div>
              <span><b>Parkeringsplats: </b>{{slot.id}}</span>
            </div>
            <div>
              <span class="slot-section"><b>Sektion: </b>{{slot.section}}</span>
            </div>
          </div>
          <div class="slot-type">
            <span><b>Typ: </b>{{slot.type}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import parkingslots from '../../public/parkingslots.json'
import randomSeed from '../../public/randomSeed.json'
export default {
  name: "Parkingslots",
  data() {
    return {
      slotList: [],
      randomArr: randomSeed,
      randIdx: -1,
      scrapedData: [],
      start: "",
      end: "",
      result: ""
    };
  },
  methods: {
    // Gets a object from det randomArr that contains result from the for-loop that executed 100 000 math.random operations.
    getRand: function () {
      this.randIdx++;
      console.log(this.randIdx);
      return this.randomArr[this.randIdx%this.randomArr.length];
    },
    // Shuffle and gets between 90% - 100% of the total parkingslots from the json-file.
    getParkingslots: function () {
      //Start the timer
      this.start = performance.now();
      document.getElementById("title").innerHTML = "Totala parkeringar";
      this.slotList = parkingslots.sort(() => .5 - Math.random()).slice(0, Math.floor(this.getRand() * (parkingslots.length * .10)) + parkingslots.length * .90);
      this.updated();
    },
    // Shuffle and gets all the available parkingslots between 50 - 200
    availableParkingslots: function () {
      document.getElementById("title").innerHTML = "Lediga parkeringar";
      this.slotList = parkingslots.sort(() => .5 - Math.random()).slice(0, Math.floor(this.getRand() * 151) + 50);
    },
  
    updated: function () {
      this.$nextTick(function () {
        // End the timer 
        this.end = performance.now();
        // Calculate the result.
        this.result = (this.end - this.start) + '\n';
        console.log(this.result);
        this.scrapedData.push(this.result);
        //this.scrapedData.join('');
        console.log(this.scrapedData);
      })
    }
  }
};
</script>