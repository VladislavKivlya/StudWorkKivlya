let app = new Vue({
	el: '#app',
	data: {
		items: [2, 3, 5, 22, 40],
	},
	methods: {
		square: function(index) {
      let newItems = this.items.slice();
      newItems[index] = Math.pow(newItems[index], 2);
      this.items = newItems;
		}
	}
});
