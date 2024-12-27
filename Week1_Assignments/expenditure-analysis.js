/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

let transactions = [
  {
    itemName: "bottle",
    category: 1,
    price: 22,
    timestamp: "10:00",
  },
  {
    itemName: "notebook",
    category: 2,
    price: 50,
    timestamp: "12:00",
  },
  { itemName: "pen", category: 1, price: 10, timestamp: "12:30" },
  { itemName: "bag", category: 3, price: 500, timestamp: "14:00" },
];

function calculateTotalSpentByCategory(transactions) {
    let categoryTotals ={};
    let n = transactions.length;
    for(let i=0;i<n;i++){
        let transaction = transactions[i];

        if(!categoryTotals[transaction.category]){
            categoryTotals[transaction.category]=0;
        }
        categoryTotals[transaction.category]+=transaction.price;
    }

    let result=[];
    for(let j in categoryTotals){
        result.push({[j]: categoryTotals[j]})
    }
    return result
}

module.exports = calculateTotalSpentByCategory;
