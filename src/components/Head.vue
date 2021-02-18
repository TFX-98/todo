<template>
  <h1>{{ head }}</h1>
</template>


<script>
module.exports = {
  data: function() {
    return {
      head: "test"
    };
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
