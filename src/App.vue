<template id="app">
  <header>
    <the-header></the-header>
  </header>
  <section>
    <div id="middle" @click="errorMsg">
      <img src="middle.png" alt="">
      <comp-message></comp-message>
    </div>
  </section>
  <the-middle></the-middle>


  <section>
  </section>
  <error-message v-if="errorMsgData">
    Error! middle illustration is under maintanence.
  </error-message>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMiddle from './components/TheMiddle.vue';
import ErrorMessage from './components/ErrorMessage.vue';
import CompMessage from './components/CompMessage.vue';


export default {
  components: {
    'the-header': TheHeader,
    'the-middle': TheMiddle,
    'error-message': ErrorMessage,
    'comp-message': CompMessage
  },
  data() {
    return { errorMsgData: false };
  },
  methods: {

    errorMsg() {
      this.errorMsgData = true;
      setTimeout(() => {
        this.errorMsgData = false;
      }, 2000);

    }

  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
}

body {
  width: 100%;
  padding: 0;
  margin: 0;

}


#middle {
  display: block;
  margin: auto;
  background-color: white;
  width: 100%;
  height: 500px;
}

#middle img {
  display: block;
  margin: auto;
  margin-top: 70px;
  width: 70%;
  height: 50vh;

}


/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #FFD700;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media screen and (max-width: 1000px) {
  #middle img {
    width: 100%;
    height: 300px;
    margin-bottom: 50px;
  }

}
</style>
