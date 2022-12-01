//alert("can you see this?");
/* 

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page. 
    The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include 
    the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content

    image (of coffee)
    alt tag (identifies type of coffee)
    description (od this type of coffee)
    weekday
    color (supporting image)

    The unique color could affect the background HTML, or an element on the page for each day of the week.
    All of the above must occur within one page.

*/

function coffeeTemplate(coffee){
    
return  `<p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}
     </p>`;
    
}



let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
//let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){
    myDay = urlParams.get("day");

}else{
    myDay = today;

}
//change a string into an integer
myDay = parseInt(myDay);

switch(myDay){
    case 1:
         today = "Monday";
         coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `I like me some Bubble Tea`
         };
    break;
    case 2:
         today = "Tuesday";
         coffee = {
            color: "brown",
            name: "Caramel latte",
            pic: "caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Tuesday",
            desc: `It is cold, so a carame latte sounds good!`
         };
    break;

    case 3:
         today = "Wednesday";
         coffee = {
            color: "black",
            name: "Cold Brew",
            pic: "cold-brew.jpg",
            alt: "A picture of a cold brew",
            day: "Wednesday",
            desc: `Cold brew for when we're serious!`
         };
    break;
    case 4:
        today = "Thursday";
        coffee = {
           color: "red",
           name: "frappacino",
           pic: "frappaccino.jpg",
           alt: "A picture of a frappacino",
           day: "Thursday",
           desc: `We can't say no for frappacino !`
        };
   break;
   case 5:
    today = "Friday";
    coffee = {
       color: "blue",
       name: "mocha",
       pic: "mocha.jpg",
       alt: "A picture of a mocha",
       day: "Friday",
       desc: `start your day with moche!`
    };
break;
case 6:
    today = "Saturday";
    coffee = {
       color: "orange",
       name: "drip",
       pic: "drip.jpg",
       alt: "A picture of a drip",
       day: "Saturday",
       desc: `drip coffee always the way you like!`
    };
break;
    case 0:
    today = "Sunday";
    coffee = {
       color: "yellow",
       name: "pumpkin-spice-latte",
       pic: "pumpkin-spice-latte.jpg",
       alt: "A picture of a pumpkin-spice-latte",
       day: "Sunday",
       desc: `pumpkin spice latte on duty!`
    };
break; 
    default:
   
//alert("something went wrong!")

}

console.log(coffee);
document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);
// change the background color of the html element
 document.querySelector("html").style.backgroundColor = coffee.color;