<template>
  <footer>
    <div class="active-wrapper">
      <span class="active-count">{{ activeLength }}</span>
    </div>

    <div class="clear-completed" v-show="completedLength">
      <button @click="clearCompleted">Clear completed</button>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["items"],
  methods: {
    clearCompleted() {
      this.allCompleted = false;
      this.$emit(
        "removeItems",
        this.items.filter(item => item.complete == false)
      );
    }
  },
  computed: {
    activeLength() {
      return this.items.filter(item => item.complete == false).length;
    },
    completedLength() {
      return this.items.filter(item => item.complete == true).length > 0;
    }
  }
};
</script>

<style scoped>
.active-wrapper {
  text-align: center;
  font-size: 30px;
  color: royalblue;
}
</style>
