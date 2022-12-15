// Get all the countries from the Asia continent /region using the Filter function

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
var countryData=JSON.parse(this.response);
console.log(countryData);
var res=countryData.filter((ele)=>ele.region==="Asia"); 
console.log(res);
}



// Get all the countries with a population of less than 2 lakhs using Filter function

var request1=new XMLHttpRequest();
request1.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request1.send();
request1.onload=function(){
var countryData=JSON.parse(this.response);
console.log(countryData);
for(i=0;i<countryData.length;i++){
var res1=countryData.filter((ele)=>ele.population < 200000); 
}
console.log(res1);
}


// Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
countryData.forEach((element)=>{
console.log(element.name);
console.log(element.capital);
console.log(element.flag);
})}


// Print the total population of countries using reduce function


var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
const population=countryData.reduce((acc,element)=>{
return acc+element.population;
},0)
console.log(population);}


// Print the country which uses US Dollars as currency.


var request = new XMLHttpRequest();
request.open('Get', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
request.send();
request.onload = function () {
var data = JSON.parse(this.response);
for(i=0;i<data.length;i++){
if(data[i].currencies[0].code==="USD")
{
console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
}
}
}
