let heading= document.getElementById("heading");
console.dir(heading);

let headings = document.getElementsByClassName("MyClass");
console.dir(headings);
console.log(headings);

let para= document.getElementsByTagName("p");
console.dir(para);

let elements=document.querySelector("p");   //when we need first element
console.dir(elements);

let allEle=document.querySelectorAll("p");  //when we need all elements
console.dir(allEle);

//DOM Attributes
//getAttribute(attr)
let id=document.querySelector("div");
console.log(id.getAttribute("id"));         //1

let name=document.querySelector("div");
console.log(id.getAttribute("name"));       //MyDiv

//setAttribute(attr, val)
let name2=document.querySelector("div");
console.log(id.getAttribute("name", "Div"));       //<div id="1" name="Div"></div>

//style
//node.style (used to chnage the style of nodes in JS)
let div= document.querySelector("id");
div.style.backgroundColor = "green";
div.style.fontSize = "26px";

//Events in JS... The change is the state of an object is known as event
/* i.e Mouse event: click, double click etc
       Keyboard event: keypress, keyupp, keydown 
       form event: submit
       print event and ,many more */

/*syntax:
      Node.event = () =>{
         //handle here
      } */

let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>{
   console.log("Button was clicked");
   let a=25;
   a++;
   console.log(a);                          //26
}

let div= document.querySelector("div");
div.onmouseover = () =>{
   console.log("You are in div now");
}

//Event obj
btn1.onclick = (evt) =>{
   console.log(evt);         //...mouseEvent  ...provides name of event
   console.log(evt.type);    //...onclick
   console.log(evt.target);  //<button id="btn1">btn1<\button>
   console.log(evt.clientX, evt.clientY);       //36, 54    ...position
   }

//Event listeners
/* syntax:
       node.addEventListener(event, callback);
       node.removeEventListener(event, callback);
   Here, callback is nothing but the function which works as parameter who handles the event,
   also known as event handler */
