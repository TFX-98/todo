<template>
  <div class="input-wrapper">
    <span @click="allCompleteFunc">{{ allCompleted }}</span>
    <input type="text" v-model="newItem" @keyup.enter="addItem" />
    <button @click="addItem">Add to List</button>
  </div>
</template>

<script>
export default {
  props: ["items", "allCompleted"],
  data() {
    return {
      newItem: ""
    };
  },
  methods: {
    addItem() {
      let result;
      if (this.newItem.trim().length > 0) {
        result = this.items.push({
          name: `${this.newItem}`,
          complete: false
        });
      }
      this.newItem = "";
      this.allCompleted = false;
      return result;
    },

    allCompleteFunc() {
      this.allCompleted = !this.allCompleted;
      return this.items.map(item => item.complete = this.allCompleted);
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
}
</style>
