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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
 
 
}
