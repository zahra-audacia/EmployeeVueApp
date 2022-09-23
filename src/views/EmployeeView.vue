<script lang="ts">
import { defineComponent } from "vue";
import EmployeeTable from "@/components/EmployeeTable.vue";
import EmployeeForm from "../components/EmployeeForm.vue";
import { Employee } from "../models/employee.model";

export default defineComponent({
  components: {
    EmployeeTable,
    EmployeeForm,
  },
  data() {
    return {
      showEmployeeTable: true,
      showEmployeeForm: false,
      showMessage: "Hide Table",
      employeeTableData: [] as Employee[],
      visibleEmployees: [] as Employee[],
      pageSize: 5,
      currentPage: 0,
    };
  },
  methods: {
    toggleTable() {
      this.showEmployeeTable = !this.showEmployeeTable;
      this.toggleMessage();
    },
    toggleMessage(): void {
      if (this.showEmployeeTable === true) {
        this.showMessage = "Hide Table";
      } else {
        this.showMessage = "Show Table";
      }
    },
    addUserToTable(newEmployee: Employee): void {
      this.employeeTableData.push(newEmployee);
      this.showEmployeeForm = false;
      console.log(newEmployee);
    },
  },

  created() {
    this.employeeTableData.push(
      new Employee(
        "Zahra",
        "Khan",
        new Date(2000, 12, 18),
        new Date(2022, 8, 5),
        "Developer",
        1200000
      ),
      new Employee(
        "Jack",
        "Hammock",
        new Date(2001, 5, 29),
        new Date(2022, 9, 6),
        "Assistant to Zahra",
        100
      ),
      new Employee(
        "Elizabeth",
        "Windsor",
        new Date(1926, 4, 21),
        new Date(1953, 6, 2),
        "Queen",
        500000000
      ),
      new Employee(
        "Bill",
        "Gates",
        new Date(1955, 10, 28),
        new Date(1975, 4, 4),
        "Founder of Microsoft",
        1200000000
      ),
      new Employee(
        "Harry",
        "Styles",
        new Date(1994, 2, 1),
        new Date(2010, 8, 9),
        "Singer",
        90000000
      ),
      new Employee(
        "Julie",
        "Andrews",
        new Date(1935, 10, 1),
        new Date(1949, 2, 5),
        "Actress",
        2500000
      )
    );
  },
});
</script>

<template>
  <div class="blob">
    <!-- Button for showing the table -->
    <button type="button" @click="toggleTable">{{ showMessage }}</button>
    <EmployeeTable
      v-if="showEmployeeTable"
      :employeeTableData="employeeTableData"
    />
    <EmployeeForm v-if="showEmployeeForm" @click="addUserToTable" />
    <!-- Button add a new user (user form) -->
    <button type="button" @click="showEmployeeForm = true">
      Add New Employee
    </button>
    
  </div>
</template>

<style scoped>

</style>
