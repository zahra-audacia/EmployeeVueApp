<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<template>
  <head>
    <title>About Me</title>
    <link rel="stylesheet" href="mywebsitestylesheet.css" />
  </head>
  <body style="margin: 0" class="font">
    <div id="background-div">
      <h1 class="center">Welcome to ZazzyTimes</h1>

      <div class="area-1">
        <h3 class="underline">!!Fun Facts about me!!</h3>
        <img src="../images/bartsimpsonfun.gif" width="50%" height="50%" />
        <ul>
          <li>
            I have been fencing for 7 years and have competed in international
            competitions
          </li>
          <li>I have an extra tooth that baffled my dentist</li>
          <li>I have a cat called Midnight and she likes to bite :(</li>
        </ul>
      </div>
      <div class="sidebar">
        <button
          onclick="getElementById('background-div').classList=['backgroundcolor']"
        >
          Birthstone
        </button>
      </div>
      <div class="dont-click">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          >DO NOT CLICK THIS LINK</a
        >
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-image: url("C:\Git\EmployeeVueApp\images\confetti.gif");
  color: white
}


</style>
