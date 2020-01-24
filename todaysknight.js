knights = [
{
    name: "Mitake Miyao",
    country: "AOU Japan",
    team: "Warcat"
},
{
    name: "Naima",
    country: "ABN Iraq",
    team: "Thalathat Suyuf"
},
{
    name: "Lingji Liu",
    country: "COU China",
    team: "Baibao"
}
]

var date = new Date().getDate();
var todaysKnight = knights[date-1];

document.getElementById("todaysname").innerHTML = todaysKnight.name;
document.getElementById("todayscountry").innerHTML = todaysKnight.country;
document.getElementById("todaysteam").innerHTML = todaysKnight.team;

