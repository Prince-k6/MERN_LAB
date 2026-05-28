

## Experiment 1a (import)
* open the terminal of current working directory
* create a transactions.json file using
    - `touch transactions.json`
* add transactions content to it.
* check if mongoimport and mongosh are installed using
    - `which mongoimport`
    - `which mongosh`
* Bulk import 
    - `mongoimport --db usermanaged --collection transactions --file transactions.json --jsonArray --drop`

## Experiment 1b (upsert)
* create a transactions_upsert.json file 
    - `touch tranactions_upsert.json`
* add contents to it
* upsert (update + insert) collection named transaction
    - `mongoimport --db usermanaged --collection transactions --file transactions_upsert.json --jsonArray --mode upsert`
* to check whether it is done successfully use
    - `mongosh`
    - `use usermanaged`
    - `db.transactions.find().pretty()`
* to exit from the mongosh use 
    - `exit`

