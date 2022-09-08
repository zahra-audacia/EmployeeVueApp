<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // props: {
  //   msg: { type: String, required: true },
  // },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      DOB: "",
      eyeColour: "",
      address1: "",
      address2: "",
      city: "",
      county: "",
      postcode: "",
      phone: "",
    };
  },
});
</script>

<template>
  <head>
    <title>About You</title>
  </head>
  <form>
    <div class="split left">
      <p><label>First Name</label> <input type="text" v-model="firstName" /></p>
      <p><label>Last Name</label> <input type="text" v-model="lastName" /></p>

      <p><label>Username</label> <input type="text" v-model="username" /></p>
      <P><label>Email</label> <input type="email" v-model="email" /></P>

      <p><label>Date of Birth</label> <input type="date" v-model="DOB" /></p>
      <P
        ><label>Eye colour</label>
        <select v-model="eyeColour">
          <option>Blue</option>
          <option>Black</option>
          <option>Brown</option>
          <option>Green</option>
          <option>Grey</option>
          <option>Hazel</option>
        </select>
      </P>

      <p>
        <label>Address line 1</label> <input type="text" v-model="address1" />
        <label>Address line 2</label> <input type="text" v-model="address2" />
      </p>

      <p>
        <label>City/Town</label> <input type="text" v-model="city" />
        <label>County</label> <input type="text" v-model="county" />
      </p>

      <p><label>Postcode</label> <input type="text" v-model="postcode" /></p>
      <P
        ><label>Phone number</label> <input type="number" v-model="phone" />
      </P>

      <p><button type="submit">Submit</button></p>
    </div>
  </form>
  <div class="split right">
    <h1>Output:</h1>
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <p>Username: {{ username }}</p>
    <p>Email: {{ email }}</p>
    <p>Date of Birth: {{ DOB }}</p>
    <p>Eye Colour: {{ eyeColour }}</p>
    <p>
      Address: {{ address1 }} {{ address2 }} {{ city }} {{ county }} {{ postcode }}
    </p>
    <p>Phone Number: {{ phone }}</p>
  </div>
</template>

<style>
.text-field {
  color: black;
  text-decoration: underline;
  border-style: groove;
  display: flex;
}

* {
  background-color: rgb(233, 218, 13);
}
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
  left: 0;
}

/* Control the right side */
.right {
  right: 0;
}

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

p {
  padding: 5px;
}

input {
  display: flex;
  align-items: center;
}
</style>
