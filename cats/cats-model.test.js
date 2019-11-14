const db = require('../data/dbConfig.js')
const {insert} = require('./cats-model.js')

describe("cats model", function(){
    describe("insert()", function(){
        beforeEach(async ()=>{
            await db('breeds').truncate();
        })

        it("should insert a breed", async function() {     
            await insert({ name: "Nyan Cat" });
            const breeds = await db("breeds");
            expect(breeds).toHaveLength(1); 
          });

          it("should insert the provided breed", async function() {
            await insert({ name: "Nyan Cat" });
            await insert({ name: "Maine Coon" });
      
            const hobbits = await db("breeds"); 
      
            expect(hobbits).toHaveLength(2); 
            expect(hobbits[0].name).toBe("Nyan Cat"); 
            expect(hobbits[1].name).toBe("Maine Coon"); 
          });

    })
})