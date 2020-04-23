let date = new Date();
let app = new Vue({
	el: '#app',
	data: {
		data: `${date.getFullYear()}\.${date.getMonth() + 1}\.${date.getDate()}`,
	},
	filters: {
		formatTitle: function(value) {
			return (value.split(".").reverse().join("."));
		}
	}
});
