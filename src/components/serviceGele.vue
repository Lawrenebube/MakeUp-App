<template>
    <div class="gele">
        <h3>Our Services</h3>
        <div class="service">
            <!-- <img src="../assets/autogele1.png" alt="" >
            <p>we offer   </p>
            <img class="gele1" src="../assets/gele1.png" alt="">
            <img src="../assets/makeup1.png" alt="" > -->
        </div>
        
    </div>
</template>
<script>
export default{
    name:'serviceGele'
}
</script>
<style scoped>
.gele{
    
  background-color: black;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  padding: 1em 2em;
  color: white;
  margin: 0 auto;
  max-width: 62.5em;
  text-align: left;
  /* height: 80vh; */
  position: relative;
}
.service{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
}
.service img{
    height: 12em;
}
.gele h3{
    text-align: left;
    font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 0.7em;
    padding-bottom: 1em;
}

</style>