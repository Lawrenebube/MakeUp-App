<template>
    <header class="header">
    
        <img class="logo" src="../assets/logo.png" alt="" >
        <nav>
            <div>
                <router-link to=""  class="navigation">Home</router-link>
                <router-link to=""  class="navigation">About Us</router-link> 
                <router-link to=""  class="navigation">Services</router-link>
            </div>
            <div class="signing">
                <router-link to="/Signup" class="link">Signup</router-link> 
                <router-link to="/loginPage" class="link">Login</router-link>
            </div>
        </nav>
    </header>
</template>
<script>
export default{
    name:'theHeader'
}
</script>
<style scoped>
    header {
        display: grid;
        grid-template-columns: 1fr 3fr;
        height: 4em;
        background-color:  rgba(0, 0, 0, 1);
        /* color:rgba(63, 25, 7, 0.753); */
        padding: 0.3em 3em;
        font-family: 'Work Sans', sans-serif;
        font-weight: 400;
        font-size: 0.95em;
    }
    .logo {
    height: 3.5em;
    }
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .navigation{
        margin-right: 3em;
        color: white;
    }
    .link{
        margin-right: 1.7em;
        color: white;
    }
</style>