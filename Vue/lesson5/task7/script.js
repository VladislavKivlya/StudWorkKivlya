let app = new Vue({
	el: '#app',
  data: {
		items: [1, -2, 3, 40, 5, 55, 6, -7],
	},
  methods:{
		filt: function() {
		this.items = this.items.filter(elem => elem > 0 && elem < 10);
  }
}
});
