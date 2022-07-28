<template>
    <div class="container">
        <theHeader/>
        <heroPage/>
        <serviceGele/>
        <theFooter/>
    </div>
</template>

<script>
import theHeader from '@/components/Header.vue'
import heroPage from '@/components/heroPage.vue'
import serviceGele from '@/components/serviceGele.vue'
import theFooter from '@/components/footer.vue'


export default{
  name:'homePage',
  components:{
   theHeader,
   heroPage,
   serviceGele,
    theFooter
  }
}
</script>
<style scoped>
  .container{
    height: 100vh;
    margin: 0 auto;
    /* max-width: 70rem; */
  }
</style>