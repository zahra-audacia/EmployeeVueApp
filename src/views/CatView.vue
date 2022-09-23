<template>
  <body>
    <h1>Midnight</h1>
    <div class="container">
      <div class="card card0">
        <div class="border">
          <h2>C</h2>
        </div>
      </div>
      <div class="card card1">
        <div class="border">
          <h2>A</h2>
        </div>
      </div>
      <div class="card card2">
        <div class="border">
          <h2>T</h2>
        </div>
      </div>
    </div>
    <!-- center this gif -->
    <img src="../images/awww.gif" class="center" />
  </body>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  max-height: 800px;
  max-width: 1280px;
  min-height: 600px;
  min-width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}
.border {
  height: 369px;
  width: 290px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
}
.border:hover {
  border: 1px solid #fff;
}
.card {
  height: 379px;
  width: 300px;
  background: #808080;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: #000;
  box-shadow: 0 70px 63px -60px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 20px;
}
.card0 {
  background: url("../images/Midnight.jpg") center center no-repeat;
  background-size: 300px;
}
.card0:hover {
  background: url("../images/Midnight.jpg") right center no-repeat;
  background-size: 600px;
}
.card0:hover h2 {
  opacity: 1;
}
.card0:hover .fa {
  opacity: 1;
}
.card1 {
  background: url("../images/Midnight2.jpg") center center no-repeat;
  background-size: 300px;
}
.card1:hover {
  background: url("../images/Midnight2.jpg") left center no-repeat;
  background-size: 600px;
}
.card1:hover h2 {
  opacity: 1;
}
.card1:hover .fa {
  opacity: 1;
}
.card2 {
  background: url("../images/midnight3.jpg") center center no-repeat;
  background-size: 300px;
}
.card2:hover {
  background: url("../images/midnight3.jpg") right center no-repeat;
  background-size: 600px;
}
.card2:hover h2 {
  opacity: 1;
}
.card2:hover .fa {
  opacity: 1;
}
h2 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #fff;
  margin: 20px;
  opacity: 0;
  transition: opacity 1s;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  text-align: center;
  text-decoration: underline;
  color: aqua;
}
body {
  background-image: url("images/midnight-background.jpg");
}
</style>
