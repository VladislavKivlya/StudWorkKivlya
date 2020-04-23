let app = new Vue({
	el: '#app',
	data: {
    rawHtml: "",
	},
  methods: {
    getRawHtml: function () {
      if(this.rawHtml == "") {
        this.rawHtml = "<div style = 'border: 3px green solid'><p style = 'color: red; font-size: 20px' >Привет, Мир!!</p></div>"
      }
      else {
        this.rawHtml = "";
      }
    }
  }
});
