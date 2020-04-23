let app = new Vue({
	el: '#app',
	data: {
    text: "Текст, который не поменяется",
	},
	methods: {
    reverse: function(){
      this.text = "А тут поменялся";
      },
	}
});
