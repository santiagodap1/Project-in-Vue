<template>
  <button @click="modalLogIn = true" class="button-87" role="button">Log in</button>
  <Teleport to="body">
    <div v-if="modalSignIn" class="sign">
      <h1>Email</h1>
      <input type="text" placeholder="Email" v-model="email">
      <h1>Password</h1>
      <input type="password" placeholder="Password" v-model="password">
      <h1>Confirm Password</h1>
          <input type="password" placeholder="Password" v-model="confirmPassword">
        <h4 v-if="confirmPassword != password" style="color: blue;">the passwords are diferent</h4>
      <button @click="register">sign in</button>
      <h5>dont have an account?</h5>
      <button @click="modalLogIn = true; modalSignIn = false">log in</button>
      <button @click="modalSignIn = false">close</button>
    </div>

    <div v-if="modalLogIn" class="log">
      <div>
        <div>
          <p v-if="errMsg">{{ errMsg }}</p>
          <h1>Email</h1>
          <input type="text" placeholder="Email" v-model="emailSign">
        </div>

        <div>
          <h1>Password</h1>
          <input type="password" placeholder="Password" v-model="passwordSign">
        </div>
      </div>
      <button @click="registerSign">log in</button>
      <h5>already have an account?</h5>
      <button @click="modalSignIn = true; modalLogIn = false">sign in</button>
      <button @click="modalLogIn = false">close</button>

    </div>

  </Teleport>
</template>

<script setup>
import { Teleport } from 'vue';
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';
const router = useRouter()

var emailSign = ref('')
var passwordSign = ref('')
var errMsg = ref()
var user = ref('')

const registerSign = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, emailSign.value, passwordSign.value)
    .then((data) => {
      console.log('Succesfully signed in')
      user.value = auth.currentUser
      console.log(auth.currentUser)
      emptyForm()
      modalLogIn.value =false
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = 'Invalid email'
          break
        case "auth/user-not-found":
          errMsg.value = 'there is not an account with that email'
          break
        case "auth/wrong-password":
          errMsg.value = 'incorrect password'
          break
        default :
          errMsg.value = 'email or password incorrect'
          break
      }
    })
}



const LogIn = {
  name: 'Log-In',
};

const modalLogIn = ref(false);
const modalSignIn = ref(false);
var id = ref("");
var email = ref('')
var password = ref('')
var confirmPassword = ref('')

const emptyForm = () => {
  email.value = ''
  password.value = ''
  emailSign.value = ''
  passwordSign.value = ''
  errMsg.value =''
}

const register = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match');
    return;
  }

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Successfully registered!');
      user.value = auth.currentUser;
      emptyForm();
      modalSignIn.value = false;
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};


</script>


<style scoped>
.log {
  background: rgb(158, 158, 158);
  border: #F09819 4px solid;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 37%;
  height: 50%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sign {
  background: rgb(158, 158, 158);
  border: #F09819 4px solid;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 47%;
  height: 75%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



.button-87 {
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-87:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.button-87:active {
  transform: scale(0.95);
}
</style>