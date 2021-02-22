<template>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ complete: item.complete }"
      >
        <input
          type="checkbox"
          :id="'checkbox-' + index"
          v-model="item.complete"
        />
        <label :for="'checkbox-' + index"> {{ item.name }} </label>
        <span class="remove-item" @click="removeItem(index)">×</span>
      </li>
    </ul>
</template>

<script>
export default {
  props:['items'],
  methods: {
    removeItem(index) {
      return this.items.splice(index, 1);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  max-width: 300px;
  max-height: 400px;
  overflow-y: scroll;
  margin: auto;
}

li {
  position: relative;
  margin: 15px auto;
  font-size: 20px;
}

.complete {
  color: green;
}

.remove-item {
  position: absolute;
  right: 15px;
  color: red;
  cursor: pointer;
}
</style>
