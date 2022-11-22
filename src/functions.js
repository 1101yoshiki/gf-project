// const knex = require("./src/db/index")

function getBySection(num) {
    const result =  fetch(`/user/${num}`, 
    // {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body:num
    // }
    )
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        return res
    })
       
return result;

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

export {getBySection};

// getBySection(0);