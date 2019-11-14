const db = require('../data/dbConfig.js')

module.exports = {
     insert,
     update,
     remove,
     getAll,
     findById
}

function insert(breed){
    return(
        db("breeds")
        .insert(breed, "id")
        .then(ids =>{
            const id = ids[0]

            return db("breeds")
            .where({id})
            .first()
        })
    )
}

async function update(id, changes) {
    return null;
  }
  
  function remove(id) {
    return null;
  }
  
  function getAll() {
    return db("breeds");
  }
  
  function findById(id) {
    return null;
  }
  