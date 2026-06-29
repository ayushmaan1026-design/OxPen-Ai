function createDesign(){

let room =
document.getElementById("room").value;

let style =
document.getElementById("style").value;


let result =
document.getElementById("result");


result.innerHTML =
"🤖 DreamHome AI is creating...";


setTimeout(function(){


result.innerHTML = `

<h2>✨ ${style} ${room}</h2>

<br>

<b>Your AI Design:</b>

<br><br>

🏡 ${room} with a ${style} theme.

<br><br>

💡 Smart lighting<br>
🛋️ Premium furniture<br>
🎨 Elegant colour palette<br>
🌿 Modern comfortable atmosphere

<br><br>

🚀 Design created successfully!

`;

},1200);


}
