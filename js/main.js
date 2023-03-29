//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//Get a dog photo from the dog.ceo api and place the photo in the DOM
document.querySelector('button').addEventListener('click', shot)
let i = 0
let ingredient1
let ingredient2
let ingredient3
let ingredient4
let ingredient5
let ingredient6
let ingredient7
let ingredient8
let ingredient9

function shot(){
let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${document.querySelector("input").value}`
// let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito'
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

        if(i> data.drinks.length-1){
            i = 0
////////////////1
if(data.drinks[i].strIngredient1 == null){
    ingredient1=('')
}else ingredient1 = `${data.drinks[i].strIngredient1}`
////////////////2
if(data.drinks[i].strIngredient2 == null){
    ingredient2=('')
}else ingredient2 = `, ${data.drinks[i].strIngredient2}`
////////////////3
if(data.drinks[i].strIngredient3 == null){
    ingredient3=('')
}else ingredient3 = `, ${data.drinks[i].strIngredient3}`
////////////////4
if(data.drinks[i].strIngredient4 == null){
    ingredient4=('')
}else ingredient4 = `, ${data.drinks[i].strIngredient4}`
////////////////5
if(data.drinks[i].strIngredient5 == null){
    ingredient5=('')
}else ingredient5 = `, ${data.drinks[i].strIngredient5}`
////////////////6
if(data.drinks[i].strIngredient6 == null){
    ingredient6=('')
}else ingredient6 = `, ${data.drinks[i].strIngredient6}`
////////////////7
if(data.drinks[i].strIngredient7 == null){
    ingredient7=('')
}else ingredient7 = `, ${data.drinks[i].strIngredient7}`
////////////////8
if(data.drinks[i].strIngredient8 == null){
    ingredient8=('')
}else ingredient8 = `, ${data.drinks[i].strIngredient8}`
////////////////9
if(data.drinks[i].strIngredient9 == null){
    ingredient9=('')
}else ingredient9 = `, ${data.drinks[i].strIngredient9}`
////////////////            
            console.log(data)
        document.querySelector("h2").innerHTML=data.drinks[i].strDrink;
        document.querySelector('img').src=data.drinks[i].strDrinkThumb;
        document.querySelector('h3').innerHTML= `Instructions 
        ${data.drinks[i].strInstructions}`;
        document.querySelector('h4').innerText=`Ingredients...
        ${ingredient1}${ingredient2}${ingredient3}${ingredient4}${ingredient5}${ingredient6}${ingredient7}${ingredient8}${ingredient9}`;
        }else{
////////////////1
if(data.drinks[i].strIngredient1 == null){
    ingredient1=('')
}else ingredient1 = `${data.drinks[i].strIngredient1}`
////////////////2
if(data.drinks[i].strIngredient2 == null){
    ingredient2=('')
}else ingredient2 = `, ${data.drinks[i].strIngredient2}`
////////////////3
if(data.drinks[i].strIngredient3 == null){
    ingredient3=('')
}else ingredient3 = `, ${data.drinks[i].strIngredient3}`
////////////////4
if(data.drinks[i].strIngredient4 == null){
    ingredient4=('')
}else ingredient4 = `, ${data.drinks[i].strIngredient4}`
////////////////5
if(data.drinks[i].strIngredient5 == null){
    ingredient5=('')
}else ingredient5 = `, ${data.drinks[i].strIngredient5}`
////////////////6
if(data.drinks[i].strIngredient6 == null){
    ingredient6=('')
}else ingredient6 = `, ${data.drinks[i].strIngredient6}`
////////////////7
if(data.drinks[i].strIngredient7 == null){
    ingredient7=('')
}else ingredient7 = `, ${data.drinks[i].strIngredient7}`
////////////////8
if(data.drinks[i].strIngredient8 == null){
    ingredient8=('')
}else ingredient8 = `, ${data.drinks[i].strIngredient8}`
////////////////9
if(data.drinks[i].strIngredient9 == null){
    ingredient9=('')
}else ingredient9 = `, ${data.drinks[i].strIngredient9}`
////////////////            
        console.log(data)
        document.querySelector("h2").innerHTML=data.drinks[i].strDrink;
        document.querySelector('img').src=data.drinks[i].strDrinkThumb;
        document.querySelector('h3').innerText=`Instructions 
        ${data.drinks[i].strInstructions}`;
        document.querySelector('h4').innerText=`Ingredients...
        ${ingredient1}${ingredient2}${ingredient3}${ingredient4}${ingredient5}${ingredient6}${ingredient7}${ingredient8}${ingredient9}`;
       
    //   document.querySelector("h2").innerText=(data)

        }
        i+=1
        document.querySelector('h2').classList=('')
        document.querySelector('h3').classList=('')
        document.querySelector('h4').classList=('')
})
    .catch(err => {
        console.log(`error ${err}`)
    });

 
};


// () =>{if(data.drinks[i].strIngredient1 === null){
//     ingredient9 = ('')
// }else ingredient9 = (`${data.drinks[i].strIngredient1}`)
// };
// console.log(ingredient9)