<template>
  <div class="hero">
    <p>
      With or without makeup , you are beautiful, we just give the extra pop.
    </p>
    
        <router-link to="/loginPage">
        <button>   Book Now </button>
        </router-link> 
    
    <div class="overlay"></div>
  </div>
</template>
<script>
export default {
  name: "heroPage",
};
</script>
<style scoped>
.hero {
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  padding-top: 2em;
  padding-left: 3em;
  color: white;
  margin: 0 auto;
  max-width: 62.5em;
  text-align: left;
  height: 90vh;
  position: relative;
}
.hero ::before {
  content: "";
  height: 100%;
  width: 100vw;
  background-image: url("../assets/birthdaymakeup.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: auto;
  position: absolute;
  opacity: 0.7;
  top: 0;
  right: 0;
  width: 100vw;
  height: 90vh;
  z-index: 1;
}
.overlay {
  background-image: linear-gradient(to right,rgba(154, 13, 204, 1) , yellow);
  background-color: rgba(154, 13, 204, 1);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}
.hero p {
  font-family: 'Tangerine', cursive;
  padding-top: 0.3em;
  width: 8em;
  line-height: 1.4em;
  font-size: 2em;
  padding-bottom: 0.6em;
  z-index: 100;
  opacity: 1;
}
.hero button {
  display: inline-block;
  height: 2.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 0.7em;
  color: white;
  padding: 0.3em 1em ;
  color: rgba(154, 13, 204, 1);
  border: none;
  outline: none;
  border-radius: 2em;
  max-width: 10em;
}
</style>
