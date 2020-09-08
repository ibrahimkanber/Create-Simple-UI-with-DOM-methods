const addUser=document.getElementById("addUser");
const doubleMoney=document.getElementById("doubleMoney");
const showMillionaires=document.getElementById("showMillionaire");
const sortRichest=document.getElementById("sortRichest");
const calculator=document.getElementById("calculate");
const main=document.getElementById("main");


addUser.addEventListener("click",getUser)
doubleMoney.addEventListener("click",Double)

function Double(){
   console.log(data[0].money)
}



getUser();
getUser();
getUser()
async function getUser(){
    const res=await fetch("https://randomuser.me/api");
    const data=await res.json();
    const user=data.results[0];
    const newUser={
        name:`${user.name.first}  ${user.name.last}`,
        money:Math.floor(Math.random()*1000000)
    };
    
    addData(newUser);

}


let data=[];
function addData(obj){
    data.push(obj);
    updateHTML(data);
}

let updateHTML=(providedDataArray)=>{
    main.innerHTML="<h2><strong>Person </strong>Wealth</h2>";
 
    providedDataArray.forEach(item=>{
        const element=document.createElement("div");
        element.classList.add("person");
        element.innerHTML=`<strong>${item.name}</strong> ${item.money} `
        main.appendChild(element);
    })
}







