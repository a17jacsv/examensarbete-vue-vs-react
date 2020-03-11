<template>
  <div class="wrapper">
    <div class="content">
      <h1>Parkingslots</h1>
      <button class="button" v-on:click="getParkingslots">Visa Parkeringar</button>
      <div class="list">
        <div v-for="parkingslot in slotList" :key="parkingslot.id" class="slotItem">
          <div class="slot-id">
            <div>
              <span>Parkeringsplats: {{parkingslot.id}}</span>
            </div>
            <div>
              <span class="slot-section">Sektion: {{parkingslot.section}}</span>
            </div>
          </div>
          <div class="slot-type">
            <span>Typ: {{parkingslot.type}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parkingslots",
  data() {
    return {
      slotList: []
    };
  },
  methods: {
    getParkingslots() {
      fetch("parkingslots.json")
        .then(response => response.json())
        .then(data => (this.slotList = data));
    }
  }
};
</script>

<style>
  html {
    background-color: #787878;
    font-family: source-sans-pro, sans-serif;
  }
  .wrapper {
    background-color: white;
    margin: 0 auto;
    width: 60%;
    margin-top: 5rem;
    padding: 5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.14),
        0 2px 5px rgba(0, 0, 0, 0.20);
    text-align: center;
}
.content {
    display: inline-block;
}
.button {
    border-radius: 0.5rem;
    padding: 0.5rem;
}
.button:hover {
    opacity: 0.5;
    cursor: pointer;
}
.list {
    margin-top: 1rem;
    overflow: hidden;
    overflow-y: scroll;
    height: 30rem;
}
.slotItem {
    margin-top: 1rem;
    border-bottom: 2px solid #ccc;
    padding: 0.5rem;
}
</style>