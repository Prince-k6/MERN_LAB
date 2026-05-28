create the database (usermanaged) and collection (transactions) of exp1

open mongosh
    
- `mongosh`
- `use usermanaged`
- `show collections`


a. Find any record where Name is Somu
- `db.transactions.find({Name : "Somu"});`

b. Find any record where the total payment amount (Payment.Total) is 600
- `db.transactions.find({"Payment.Total" : 600 });`

c. Find any record where price (Transaction.Price) is between 300 to 500
- `db.transactions.find({"Transaction.Price" : {$gte : 300 ,$lte : 500}});`

d. Calculate the total transaction amount by adding up Payment.Total in all records
- `db.transactions.aggregate([{$group: {_id: null, TotalAmount : {$sum : "$Payment.Total" }}}]);`


