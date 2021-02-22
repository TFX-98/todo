let vm = new Vue({
  el: "#todos",
  data: {
    h1: "todos",
    items: [],
    newItem: "",
    list: "all",
    allComplete: false
  },
  methods: {
    addItem() {
      let result;
      if (this.newItem.trim().length > 0) {
        result = this.items.push({
          name: `${this.newItem}`,
          complete: false,
        });
      }
      this.newItem = "";
      return result;
    },
    removeItem(index) {
      return this.items.splice(index, 1);
    },

    allCompleteFunc() {
        return this.items ? [...this.items.map((item) => {item.complete = this.allComplete})] : [];
    }
  },
  computed: {
    listLength() {
      return this.items.filter((item) => item.complete == false).length;
    },
  },
});
