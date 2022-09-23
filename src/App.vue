<template>
  <nav>
    <RouterLink to="/">Home  </RouterLink>
    <RouterLink to="/EmployeeTable">  Employee Table  </RouterLink>
    <RouterLink to="/CAT"> Cat Page</RouterLink>
  </nav>

  <RouterView />
</template>

<style>
body {
  background-image: url("C:\Git\EmployeeVueApp\images\night.jpg");
  color: white
}
</style>
