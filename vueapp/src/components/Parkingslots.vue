<template>
  <div class="wrapper">
    <div class="content">
      <h1>Parkingslots</h1>
      <button class="button" v-on:click="getParkingslots">Visa Alla Parkeringar</button>
      <button class="button" v-on:click="availableParkingslots">Visa Lediga Parkeringar</button>
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
export default {
  name: "Parkingslots",
  data() {
    return {
      slotList: []
    };
  },
  methods: {
    // Shuffle and gets between 90% - 100% of the total parkingslots from the json-file.
    getParkingslots() {
      document.getElementById("title").innerHTML = "Totala parkeringar";
      this.slotList = parkingslots.sort(() => .5 - Math.random()).slice(0, Math.floor(Math.random() * (parkingslots.length * .10)) + parkingslots.length * .90);
    },
    // Shuffle and gets all the available parkingslots between 50 - 200
    availableParkingslots() {
      document.getElementById("title").innerHTML = "Lediga parkeringar";
      this.slotList = parkingslots.sort(() => .5 - Math.random()).slice(0, Math.floor(Math.random() * 151) + 50);
    }
  }
};
</script>