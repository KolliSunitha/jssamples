import { Component } from '@angular/core';



const posts = [
  {id: 1, upVotes: 2},
  {id: 2, upVotes: 89},
  {id: 3, upVotes: 1}
];
const totalUpvotes = posts.reduce((totalUpvotes, currentPost) =>     
  totalUpvotes + currentPost.upVotes, // reducer function
  0 // initial accumulator value
);
console.log(totalUpvotes);

var animals = ["cat","dog","fish"];
var lengths = [];
var item;
var count;
var loops = animals.length;
for (count = 0; count < loops; count++){
  item = animals[count];
  lengths.push(item.length);
}
console.log(lengths); //[3, 3, 4]
//Using map function
var animals = ["cat","dog","fish"];
var lengths1 = animals.map(function(animal) {
  return animal.length;
});
console.log(lengths1); //[3, 3, 4]

var animals = ["cat","dog","fish"];
function getLength(word) {
  return word.length;
}
console.log(animals.map(getLength)); //[3, 3, 4]

var total = 0;
for (count = 0, loops = animals.length; count < loops; count++){
  item = animals[count];
 total += item.length;
}

//Using reduce 
var animals = ["cat","dog","fish"];
var total = animals.reduce(function(sum, word) {
  return sum + word.length;
}, 0);
console.log(total);
console.log(total); //10


// Reduce using fnction call
var animals = ["cat","dog","fish","Goat"];
var addLength = function(sum, word) {
  return sum + word.length;
};
var total1 = animals.reduce(addLength, 0);
console.log(total1);


// String comaprisions
var a = 'a';
var b = 'b';
if (a < b) { // true
  console.log(a + ' is less than ' + b);
} else if (a > b) {
  console.log(a + ' is greater than ' + b);
} else {
  console.log(a + ' and ' + b + ' are equal.');
}

//String primitives and String objects  using eval()
var s1 = '2 + 2';            
//'var s2 = new String ('2 + 2'); 
console.log(eval(s1));        
//console.log(eval(s2)); 
var s4 =' afdjsdasdf';  
var s3=s4.slice(2,5);
console.log(s4);
var s5 = s4.trim();  
console.log(s5);

// using Big
var worldString = 'Hello, world';

console.log(worldString.small());     
console.log(worldString.big());       
console.log(worldString.fontsize(7));

//using blink
console.log(worldString.blink()); 
console.log(worldString.bold());  
console.log(worldString.italics());
console.log(worldString.strike());

//embeds a string in a <tt> tag
console.log(worldString.fixed());
// Font color to the string
console.log(worldString.fontcolor('red') +  ' is red in this line');
// other way to apply font color
console.log(worldString.fontcolor('FF00') + ' is red in hexadecimal in this line');

// using link()
var hotText = 'google';
var URL = 'https://google.co.in/';

console.log('Click to return to ' + hotText.link(URL));

var superText = 'superscript';
var subText = 'subscript';

console.log('This is what a ' + superText.sup() + ' looks like.');
console.log('This is what a ' + subText.sub() + ' looks like.');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
 
 
}
