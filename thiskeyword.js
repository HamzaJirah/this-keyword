//initialize an empty object
var comments = {};

//add property to the object
comments.data = ["html", "css", "javascript"];

//write a function by including the "this" keyword
comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}


//write to the console the function
console.log(comments.print());