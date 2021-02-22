<template>
  <footer>
    <div class="active-wrapper">
      <span class="active-count">{{ activeLength }} item left</span>
    </div>

    <div class="clear-completed" v-show="completedLength">
      <span @click="clearCompleted">Clear completed</span>
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

footer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: 50px;
}

footer > * {
  box-sizing: border-box;
  color: #777;
  padding: 0 10px;
}

footer .clear-completed{
  padding: 0;
  position: relative;
  cursor: pointer;
}

footer .clear-completed::after{
  content: '';
  display: block;
  height: 1px;
  width: 0;
  background: #777;
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width .25s;
}

footer .clear-completed:hover:after{
  width: 100%;
}

</style>
