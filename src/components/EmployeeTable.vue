<script lang="ts">
import type { Employee } from "@/models/employee.model";
import { defineComponent, type PropType } from "vue";
import PagingFooter from "@/components/PagingFooter.vue";

export default defineComponent({
  components: {
    PagingFooter,
  },
  props: {
    //employees is an array (of the type Employee class), the props means that it can be referred to later in other files ??
    employeeTableData: {
      type: [] as PropType<Array<Employee>>,
      required: true,
    },
  },
  // emit: {
  //   updatePage(): {type: Function, required: true},
  //   employees: { type: [] as PropType<Array<Employee>>, required: true }
  // },
  data() {
    return {
      //data: the visibleEmployees is an array of the Employees that we can see on the page at one time, this is restricted by the PageSize = 5. the currentPage is at index 0
      visibleEmployees: [] as Employee[],
      pageSize: 5,
      currentPage: 0,
    };
  },
  methods: {
    updatePage(pageNumber: number): void {
      this.currentPage = pageNumber;
      console.log(this.currentPage)
      this.updateVisibleEmployees();
    },
    updateVisibleEmployees(): void {
      this.visibleEmployees = this.employeeTableData.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );

      // if (this.visibleEmployees.length === 0 && this.currentPage > 0) {
      //   this.updatePage(this.currentPage - 1);
      // }
    },
  },
  created() {
    //lifecycle hook that
    this.updateVisibleEmployees();
  },
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Date of Birth</th>
        <th>Start Date</th>
        <th>Role</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>
      <!-- for loop, for each employee in the visibleEmployees array, the data is displayed in the rows-->
      <tr v-for="(employee, index) in visibleEmployees" :key="index">
        <td>{{ employee.firstName }}</td>
        <td>{{ employee.lastName }}</td>
        <td>{{ employee.dateOfBirth.toLocaleDateString() }}</td>
        <td>{{ employee.startDate.toLocaleDateString() }}</td>
        <td>{{ employee.role }}</td>
        <td>{{ employee.salary }}</td>
      </tr>
    </tbody>
  </table>
  <footer>
    <!-- most confused about bit? so the PagingFooter  -->
    <PagingFooter
      :employeeTableData="employeeTableData"
      @page:update="updatePage"
      :currentPage="currentPage"
      :pageSize="pageSize"
    >
    </PagingFooter>
  </footer>
</template>

<style>
table,
th,
td {
  border: 1px solid;
}
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  /* overflow-x: hidden; */
  /* padding-top: 20px; */
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
