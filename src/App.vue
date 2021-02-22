<template>
  <div id="todo">
    <HeadModule />
    <InputModule :items="items" :allCompleted="allCompleted" />
    <ListModule :items="items" />
    <FooterModule :items="items" @removeItems="updateItems" />
    <!--Tabs-->
    <!--Fix bag ifAllCompl-->
    <!--Styles-->
  </div>
</template>

<script>
import HeadModule from "./components/Head.vue";
import InputModule from "./components/Input.vue";
import ListModule from "./components/List.vue";
import FooterModule from "./components/Footer.vue";

export default {
  components: {
    HeadModule,
    InputModule,
    ListModule,
    FooterModule
  },
  data() {
    return {
      items: [],
      allCompleted: false
    };
  },
  methods: {
    updateItems(result) {
      this.items = result;
    }
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
