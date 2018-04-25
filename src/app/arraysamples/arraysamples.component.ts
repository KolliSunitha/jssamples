import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraysamples',
  templateUrl: './arraysamples.component.html',
  styleUrls: ['./arraysamples.component.css']
})
export class ArraysamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
let arry = [1, 2];

let arrlikes = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

let arr = ["I", "go", "home"];
delete arr[1];
alert( arr[1] );
alert( arr.length ); // length of the array when deleted the element
// Slice 
let arr1 = ["I", "study", "JavaScript"];
arr1.slice (1,1);
console.log( arr1 );

let str = "test";
let arr2 = ["t", "e", "s", "t"];

alert( str.slice(1, 3) ); // es
alert( arr2.slice(1, 3) ); // e,s

alert( str.slice(-2) ); // st
alert( arr2.slice(-2) ); // s,t
alert( arr.indexOf(null) ); 

//Concat
let arr3 = [1, 2];
alert( arr3.concat([3, 4]));
alert( arr3.concat([3, 4], [5, 6]));
alert( arr3.concat([3, 4], 5, 6));

// using find
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
alert(user.name); 
// filters
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length);

// using Map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
alert(lengths);
// using sort
let arr12 = [ 1, 2, 15 ];
arr12.sort();
console.log( arr12 ); 

arr12.sort(function(a, b) { return a - b; });
console.log( arr12 ); 

// reverse

let arr34 = [1, 2, 3, 4, 5];
arr34.reverse();
//split and join
let names = 'Bilbo, Gandalf, Nazgul';

let asplit = names.split(', ');

for (let name of asplit) {
  console.log( `A message to ${name}.` );
}

let strnames = lengths.join(';');
console.log(strnames);

// arary using forEach
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

//Filter Unique
function unique(arr23) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings) );