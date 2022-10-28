window.onload = () => {
    const nav= document.getElementById("nav");
    navURLs.forEach(item => 
        nav.appendChild(navLink(item)));


}
const navURLs = [
{name: "Home", url: "index.html"},
{name: "National Parks", url: "parks.html"},
{name: "Mountains", url: "mountains.html"},
{name: "Things To Do", url: "Thingstodo.html"},
{name: "Food & Drink", url: "food&drink.html"},
];

function navLink (item){
    let a = document.createElement("a");
    a.href = item.url;
    a.innerHTML = item.name;
    return a;


}
