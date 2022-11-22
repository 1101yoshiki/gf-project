const knex = require("./src/db/index")

function getBySection(num) {
    return fetch("/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:num
    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })
       


    // const key = num.toString()
    
    // return knex
    // .select("userName")
    // .from("userTable")
    // .where({
    //    [key]: true
    // })
    // .then(res => res.map(e => e.userName))
    // .then(res=>{
    //     console.log(res)
    // })
}

getBySection(0);