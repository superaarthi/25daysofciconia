knights = [ 
{    
  name: "Mitake Miyao",    
  country: "AOU Japan",    
  team: "Warcat",
  desc: "Miyao has worked hard to hold up the Walls of Peace and has faith in all of the Gauntlet Knights to do their part as well!",
  picture: "Miyao.png"
},
{    
  name: "Andry",    
  country: "COU Madagascar",    
  team: "Suparna",
  desc: "Peace? No sweat! Let's get that treaty signed already!",
  picture: "Andry.png"
},
{    
  name: "Fatma",    
  country: "ABN Turkey",    
  team: "Yeladot Shavit", 
  desc: "I'm ringing in the peace with style and grace!",
  picture: "Fatma.png"
},
{    
  name: "Abdou",    
  country: "ACR Senegal",    
  team: "Squad 601", 
  desc: "Ready to party it up once these kings cool their heads! And what a celebration it will be!",
  picture: "Abdou.png"
},
{    
  name: "Chloe",    
  country: "AOU Canada",    
  team: "Grave Mole",
  desc: "Yeah! Yeah, I'm going to lead my team to victory, of course we won't settle for less than that!",
  picture: "Chloe.png"
},
{    
  name: "Mariana",    
  country: "ACR Angola",    
  team: "Cairo Memorial Squad", 
  desc: "Why yes, peace... that would be nice, I would say.",
  picture: "Mariana.png"
},
{    
  name: "Sujatha",    
  country: "COU India",    
  team: "Suparna",
  desc: "I trust that if we all just keep working together, we will acheive the future we dream of.",
  picture: "Sujatha.png"
},
{    
  name: "Stanislaw",    
  country: "ABN Poland",    
  team: "Thalathat Suyuf", 
  desc: "I'm not letting myself get too crazy but, yeah, I'm pretty excited for peace!",
  picture: "Stanislaw.png"
},
{    
  name: "Ishak",    
  country: "ACR Algeria",    
  team: "Squad 601", 
  desc: "Ishak is stylin' his way into this peaceful holiday!",
  picture: "Ishak.png"
},
{    
  name: "Jayden",    
  country: "AOU America",    
  team: "Warcat",
  desc: "Supergenius Jayden gives today a 10 out of 10! But it'll be even better when the fighting only happens in games!",
  picture: "Jayden.png"
},
{    
  name: "Aysha",    
  country: "COU Indonesia",    
  team: "Baibao",
  desc: "It hasn't been easy, but peace will be worth it.",
  picture: "Aysha.png"
},
{    
  name: "Gunhild",    
  country: "AOU Sweden",    
  team: "Warcat",
  desc: "It's been a long journey but seeing everyone safe and sound will be well worth it.",
  picture: "Gunhild.png"
},
{    
  name: "Naomi",    
  country: "ABN France",    
  team: "Thalathat Suyuf", 
  desc: "I'm focused on our mission, but I'll definitely smile when we have peace again.",
  picture: "Naomi.png"
},
{    
  name: "Rukhshana",    
  country: "COU Saudi Arabia",    
  team: "Suparna",
  desc: "That's right, you can do it Rukhi! Just keep fighting to protect the peace!!",
  picture: "Rukhshana.png"
},
{    
  name: "Leah",    
  country: "ABN Israel",    
  team: "Yeladot Shavit", 
  desc: "Hey everyone! Let's hear it for your favorite superstars as they bring you the peace you've been waiting for!",
  picture: "Leah.png"
},
{    
  name: "Momotake",    
  country: "COU Japan",    
  team: "Baibao",
  desc: "Momotake has been working his hardest on a cool move to ring in the peace with!",
  picture: "Momotake.png"
},
{    
  name: "Gannet",    
  country: "ACR Ethiopia",    
  team: "Cairo Memorial Squad", 
  desc: "Gannet is as excited as a puppy for the upcoming peace treaty!",
  picture: "Gannet.png"
},
{    
  name: "Koshka",    
  country: "AOU Russia",    
  team: "Grave Mole",
  desc: "If we stop fighting, I'll get to relax and play WanyaDora! I'm going to get those rare slimes!",
  picture: "Koshka.png"
},
{    
  name: "Stephania",    
  country: "ABN Romania",    
  team: "Yeladot Shavit", 
  desc: "It's important to be your best when fighting for your people! Stephania says to fight on!!",
  picture: "Stephania.png"
},
{    
  name: "Rethabile",    
  country: "ACR South Africa",    
  team: "Squad 601", 
  desc: "This princess is ready for peace, like, yesterday. And she'll face down any who oppose it.",
  picture: "Rethabile.png"
},
{    
  name: "Noor",    
  country: "ACR Egypt",    
  team: "Cairo Memorial Squad", 
  desc: "Get ready for peace, fool!",
  picture: "Noor.png"
},
{    
  name: "Lilja",    
  country: "AOU Finland",    
  team: "Grave Mole",
  desc: "I'm ready for peace nyow, not like anyone could compete with me myaaa!",
  picture: "Lilja.png"
},
{    
  name: "Naima",    
  country: "ABN Iraq",    
  team: "Thalathat Suyuf", 
  desc: "Wowowow! Naima is so excited for peace because she can just be with all her friends!",
  picture: "Naima.png"
},
{    
  name: "Lingji Liu",    
  country: "COU China",    
  team: "Baibao",
  desc: "It makes Lingji happy to imagine a future where no one has to fight.",
  picture: "Lingji.png"
},
{    
  name: "Meow",    
  country: "AOU Japan",    
  team: "Warcat",
  desc: "Meow would like to wish you a very merry Christmas and invite you to her Christmas party! Everyone is invited! Let's be with our friends as we celebrate and hold up the Walls of Peace until the treaty is signed!",
  picture: "Meow.png"
} 
] 

var date = new Date().getDate(); 
if (date < 26) {
	var todaysKnight = knights[date-1];
} else {
	window.location.href = "http://www.25daysofciconia.com/postchristmas.html";
}