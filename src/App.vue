<template>
  <div id="todo">
    <head-module></head-module>

    <input type="checkbox" @change="allCompleteFunc" v-model="allComplete" />
    <div id="input-wrapper">
      <input type="text" v-model="newItem" @keyup.enter="addItem" />
      <button @click="addItem">Add to List</button>
    </div>
  </div>
</template>

<script>
import HeadModule from "./components/Head.vue";

export default {
  name: "todo",
  components: {
    HeadModule
  }
};
</script>

<style>
.input-wrapper {
  text-align: center;
}

.input-wrapper input {
  max-width: 200px;
  width: 100%;
}
</style>
