<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  //
  name: "PagingFooter",
  //do i need it as a prop here????? i have employeeTable Data as a prop in another file
  props: ["employeeTableData", "currentPage", "pageSize"],
  methods: {
    updatePage(pageNumber: number): void {
      console.log(pageNumber)
      this.$emit("page:update", pageNumber);
    },
    totalPages(): number {
      return Math.ceil(this.employeeTableData.length / this.pageSize);
    },
    showPreviousLink(): boolean {
      //dont let the user click previous page if we are on currentPage index of 0 (ie. we are on the first page, we shouldnt be able to go back)
      if (this.currentPage === 0) {
        return false;
      } else {
        return true;
      }
    },
    showNextLink(): boolean {
      // similarly, do not let us click the next button if we are on the final page. the -1 is because current page is 0 based index and total pages is not
      if (this.currentPage == this.totalPages() - 1) {
        return false;
      } else {
        return true;
      }
    },
  },
});
</script>

<template>
  <!-- if we have data to display-->
  <div v-if="totalPages() > 0">
    <!-- if we showPrevious link is true, let us click it, and when we do click it, take us to (currentPage - 1) -->
    <span
      v-if="showPreviousLink() === true"
      class="pagination-button"
      type="button"
      @click="updatePage(currentPage - 1)"
      >Previous
    </span>
    <!-- show the current page we are on, out of the total number of pages -->
    {{ currentPage + 1 }} of {{ totalPages() }}
    <span
      type="button"
      v-if="showNextLink()"
      class="pagination-button"
      @click="updatePage(currentPage + 1)"
    >
      Next</span
    >
  </div>
</template>

<style scoped>
.pagination-button {
  cursor: pointer;
}
</style>
