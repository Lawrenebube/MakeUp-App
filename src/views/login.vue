<template>
  <div class="login">
      <div class="logos">
        <div> 
          <img class="main_logo" alt="" src="../assets/logo.png">
        </div>
        <img class="makeupBrush" alt="" src="../assets/makeupimage.png">
    </div>
    
    <div class="main">
      <h3 >WELCOME BACK</h3>
      <p class="welcome">Welcome back! Please enter your details</p>

      <form >
        <label for="Email">Email</label>
        <input type="email">
        <label for="Password">Password</label>
        <input type="password">
      </form>
      <div class="checkbox">
        <div class="check">
          <input type="checkbox">
          <label for="checkbox"> Remember me</label>
        </div>
        <p>
          <router-link to="/forgotPassword">Forgot Password</router-link>
        </p>
        
      </div>
      <button>Login</button>
      <p class="account">Don't have an account?
        <router-link to="/Signup">Sign Up for free</router-link> 
        <!-- <router-link to= "/homePage">HOMEPAGE</router-link> -->
      </p>
    </div>
  </div>
</template>


<style scoped>
.login{
  display: flex;
  justify-content: space-between;
  max-width: 46em;
  color: white;
  background-color: rgba(154, 13, 204, 1);
  border-radius: 3.2em;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  position: relative;
  margin: 6em auto;
}
.main_logo {
  height: 3.75em;
}
.makeupBrush {
  height: 17em;
  position: absolute;
  padding-top:0.5em;
  transform: rotate(27.02deg);
  left: 1.95em;
  top: 4.63em;
}
.main {
   background-color: rgba(0, 0, 0, 1);
   padding: 3.75em 3.75em 3.75em 6em ; 
   border-radius: 3.2em;
   width: 32.25em;
   align-content: center; 
   justify-content: center;
}
.main h3 {
 font-weight: 400;
 font-size: 1.25rem;
 margin-bottom: 0.63em;
 letter-spacing: 0.1em;
}
.welcome {
  margin-bottom: 1.25em;
  font-size: 0.63rem;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  text-align: left;
  font-size: 0.81em;
  margin-bottom: 0.2em;
}
input {
   margin-bottom:0.9em ;
   height: 1.6em;
   outline: none;
   border: none;
   padding-left: 1.25em;
}
.checkbox {
  display: flex;
  flex-direction: row;
  font-size: 0.75rem;
  justify-content: space-between;
  margin: 0.63em 0.32em;
  text-align: center;
}
.check {
  display: inline-flex;
  text-align: center;  
}
.check input {
  margin-right: 3px;
  /* color: rgba(154, 13, 204, 1); */
}
button {
  background-color: rgba(154, 13, 204, 1);
  display: inline-block;
  border-radius: 3.32em;
  width: 7.5em;
  height: 2.3em;
  color: white;
  margin-bottom: 0.63em;
  font-weight: 700;
}
.account {
  font-size: 0.82em;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'logIn'
  
}
</script>
