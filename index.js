// index.js
var items = [1, "2", 3, "four", 5, null, undefined, 6];
const results = [];

items.forEach((item) => {
  if (typeof item === 'number') {
    if (item % 2 === 0) results.push(item * 2);
  } else if (item === null) {
    console.log("Found a null item");
  } else {
    const parsedItem = parseInt(item, 10);
    if (!isNaN(parsedItem)) {
      results.push(parsedItem);
    }
  }
});

console.log("Original items:", items);
console.log("Filtered and transformed items:", results);
