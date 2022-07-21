<template>
  <div class="SignUp">
    <div class="logos">
      <div> 
        <img class="main_logo" alt="" src="../assets/logo.png">
      </div>
      <img class="makeupBrush" alt="" src="../assets/makeupimage.png">
    </div>
    
    <div class="main">
      <h3>Create Account</h3>
      <div class="links">
        <img class="logo" alt="" src="../assets/facebook_logo.png">
        <span class="link">Sign Up with Facebook</span>
        <img class="logo go" alt="" src="../assets/google.png">
        <span>Sign Up with Google</span>
      </div>
      <p class="or">-OR-</p>
      <form >
        <label for="FullName">Full Name</label>
        <input v-model="FullName" type="text">
         <label for="Email">Email</label>
        <input v-model="Email" type="email">
         <label for="Password">Password</label>
        <input v-model="password" type="password">
        <label for="confirmPassword">Confirm Password</label>
        <input v-model="confirmPassword" type="password">
        <label for="phoneNumber">Phone Number</label>
        <input v-model="phoneNumber" type="password">
      </form>
      <button @click="SubmitForm">Sign Up</button>
      <p class="account">Already have an account?
        <router-link to="/">Log in</router-link> 

      </p>
    </div>
  </div>
</template>
  <script>
    export default{
      name:'signUp',
      data(){
        return{
          FullName:'',
          Email:'',
          password:'',
          confirmPassword:'',
          phoneNumber:''
        }
      },
      methods:{
        SubmitForm(){
          const data = { username:'this.FullName',
          Email:'this.Email',
          Password:'this.password',
          confirmPassword:'this.confirmPassword',
          phoneNumber:'this.phoneNumber' };
          fetch('https://localhost:44309/api/User/signup', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
          // console.log(this.FullName, this.Email, this.password)
        }
      }
    }
  </script>
<style scoped>
.SignUp{
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 49em;
  margin: 5em auto;
  color: white;
  background-color: rgb(68, 17, 87);
  border-radius: 3.2em;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  position: relative;
}
.main_logo {
  height: 3.75em;
}
.makeupBrush {
  height: 18em;
  position: absolute;
  padding-top:0.5em;
  transform: rotate(25.02deg);
  left: 0.01em;
  top: 6.13em;
}
.main {
   background-color: rgba(0, 0, 0, 1);
   padding: 3.75em 3.75em 3.75em 6em ; 
   border-radius: 3.2em;

   align-content: center; 
   justify-content: center;
}
.main h3 {
  font-weight: 700;
  margin-bottom: 0.63em;
}
.links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 0.63em;
}
.link {
  margin-right: 2.2em;
  font-size: 0.95rem;
}
.logo {
  height: 1.44em;
  background-color: rgba(0, 0, 0, 1);
  margin-bottom: 0.95em;
}
.go{
 height: 0.94em;
 margin: 0.2em 0 0.2em 0;
}
.or {
  margin-bottom: 0.6em;
  margin-left: 1.56em;
}
label {
  text-align: left;
  font-size: 0.81em;
  margin-bottom: 0.2em;
}
form {
  display: flex;
  flex-direction: column;
}
input {
   margin-bottom:0.94em ;
   height: 1.5em;
   outline: none;
   border: none;
   padding-left: 1.25em;
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
  font-size:0.82rem;
}
</style>
