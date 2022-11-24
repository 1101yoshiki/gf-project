// const knex = require("./src/db/index")

function getBySection(num) {
    const result =  fetch(`/user/${num}`)
    .then(res=>res.json())
    .then(res=>res)
return result;   
};

function getUserAndPass(userName,pass) {
    const result = fetch(`/login/${userName}/${pass}`)
    .then(res=>res.json())
    .then(res=>{
        console.log("functions res",res)
        return res
    })
    return result;
};

function getUser(userName) {
    const result = fetch(`/login/${userName}`)
    .then(res=>res.json())
    .then(res=>{
        console.log("functions res",res)
        return res
    })
    return result;
};

function getUsersAllData(userName) {
    const result = fetch(`/alldata/${userName}`)
    .then(res=>res.json())
    .then(res=>{
        console.log("functions res",res)
        return res
    })
    return result;
};

function addUser(userName, pass, ele0, ele1, ele2, ele3, ele4, ele5, ele6, ele7, ele8) {
    const body =  JSON.stringify({
        userName:userName,
        pass:pass,
        "0":ele0,
        "1":ele1,
        "2":ele2,
        "3":ele3,
        "4":ele4,
        "5":ele5,
        "6":ele6,
        "7":ele7,
        "8":ele8
    });
    fetch("/singup",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:body
    });
};

function putUsersData(userName, ele0, ele1, ele2, ele3, ele4, ele5, ele6, ele7, ele8) {
    const body =  JSON.stringify({
        userName:userName,
        "0":ele0,
        "1":ele1,
        "2":ele2,
        "3":ele3,
        "4":ele4,
        "5":ele5,
        "6":ele6,
        "7":ele7,
        "8":ele8
    });
    fetch("/update",{
        method:"PUT",
        headers:{
            'Content-Type': 'application/json'
        },
        body:body
    });
}



export {
    getBySection,
    getUserAndPass,
    addUser,
    getUser,
    getUsersAllData
};

// getBySection(0);