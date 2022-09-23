<script lang="ts">
import { defineComponent } from "vue";
import { Employee } from "@/models/employee.model";

export default defineComponent({
  // props: {
  //   showEmployeeTable
  // },
  data() {
    return {
      //Data initializers for employee table/form
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      role: "",
      salary: 0,
    }; //do i have to define it here as a type of the Employee class? tried it but it didnt work
  },
  methods: {
    onSubmit(): void {
      //function for when the submit button is clicked, will created a new instance of the Employee class, called "newEmployee"
      //these consts are because the "date" type in HTML return  a string, so these convert the returned string into a number and then a date type
      const dateOfBirthArray: number[] = this.dateOfBirth
        .split("-")
        .map((datePart) => +datePart);
      const dateOfBirth: Date = new Date(
        dateOfBirthArray[0],
        dateOfBirthArray[1],
        dateOfBirthArray[2]
      );
      const startDateArray: number[] = this.startDate
        .split("-")
        .map((datePart) => +datePart);
      const startDate: Date = new Date(
        startDateArray[0],
        startDateArray[1],
        startDateArray[2]
      );
      let newEmployee = new Employee(
        this.firstName,
        this.lastName,
        dateOfBirth,
        startDate,
        this.role,
        this.salary
      );
      console.log("onSubmit");
      this.$emit("click", newEmployee);
    },
  },
  // cancelAdding(): void {
  //   showEmployeeForm = false
  // }
});
</script>

<template>
  <head>
    <title>New Employee</title>
  </head>
  <!-- this is the new employee form, to add the new data to the table-->
  <form>
    <div class="split left">
      <p>
        <label>First Name: </label> <input type="text" v-model="firstName" />
      </p>
      <p><label>Last Name: </label> <input type="text" v-model="lastName" /></p>

      <p>
        <label>Date of Birth:</label>
        <input type="date" v-model="dateOfBirth" />
      </p>
      <P><label>startDate</label> <input type="date" v-model="startDate" /></P>

      <p><label>Role</label> <input type="text" v-model="role" /></p>

      <p><label>Salary</label> <input type="number" v-model="salary" /></p>
      <!-- when the submit button is clicked, the onSubmit function is called-->
      <p><button type="button" @click="onSubmit">Submit</button></p>
    </div>
  </form>
</template>

<style scoped>
.text-field {
  color: black;
  text-decoration: underline;
  border-style: groove;
  display: flex;
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
