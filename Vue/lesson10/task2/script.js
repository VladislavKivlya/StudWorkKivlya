let app = new Vue({
	el: '#app',
	data: {
		text: '',
    mas: null,

	},
  methods: {
    createMas: function () {
      this.mas = this.text.split(' ');
    }
  }
});
