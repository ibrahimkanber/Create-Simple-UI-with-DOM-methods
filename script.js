const addUser=document.getElementById("addUser");
const doubleMoneyBtn=document.getElementById("doubleMoney");
const showMillionaires=document.getElementById("showMillionaires");
const showRichest=document.getElementById("showRichest");
const sortbyRichest=document.getElementById("sortbyRichest");
const calculator=document.getElementById("calculate");
const main=document.getElementById("main");

///Event-Listeners
addUser.addEventListener("click",getUser);
doubleMoneyBtn.addEventListener("click",doubleMoney);
showMillionaires.addEventListener("click",MillionairesUsers);
showRichest.addEventListener("click",showRichestUser);
sortbyRichest.addEventListener("click",sortByRichest)
calculator.addEventListener("click",calculate)

//Array to store random User Info and random money amount
let data=[];

//
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

///Double Money

function doubleMoney(){
    data=data.map((user)=>{
        return{...user, money:user.money*2}; 
    });
   
    updateHTML(data);
}

///Sort Millionaires

function MillionairesUsers(){
  data=data.filter(isMillionaire);
  console.log(data);
  updateHTML(data);
}

function isMillionaire(item){
    return item.money>1000000
}

//Show Richest
function showRichestUser(){
  let richest= data.reduce((item1,item2)=>item1.money>item2.money? item1:item2);
    data=[].concat(richest);
    updateHTML(data);
}

///Sort by Richest
function sortByRichest(){
    data=data.sort((item1,item2)=>parseFloat(item2.money)-parseFloat(item1.money))
    updateHTML(data);
}

///Calculate Entire Wealth
function calculate(){
    if (main.lastElementChild.className!=="total"){
        let sum=0;
        data.forEach(item=>{
            sum+=item.money
        })
        const total=document.createElement("div")
        total.className="total";
        total.innerHTML=`<strong>Entire</strong> ${formatMoney(sum)} `;
        main.appendChild(total);
    } 
}


///Add data to array
function addData(obj){
    data.push(obj);
    updateHTML(data);
}

let updateHTML=(providedDataArray)=>{
    main.innerHTML="<h2><strong>Person </strong>Wealth</h2>";
 
    providedDataArray.forEach(item=>{
        const element=document.createElement("div");
        element.classList.add("person");
        element.innerHTML=`<strong>${item.name}</strong> ${formatMoney(item.money)} `
        main.appendChild(element);
    })
}   


///Formatting number as money

function formatMoney(number){
    return "$"+(number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}




