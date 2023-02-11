const prompt= require('prompt-sync')();

var fname=prompt("Enter your first name : ");
var lname=prompt("Enter your last name : ");
console.log("Your Full Name is ",fname,lname);

/*After doing 
==========
npm install prompt -sync  in Terminal  from the video https://www.youtube.com/watch?v=x_2sYpk75Ic
I ran node index11.js 
==================
I was facing the  module not found issue:
=================================
I did 2 things  to resolve it:
======================
1)In terminal I ran npm i "prompt-sync"@latest  (I found this module was not installed so i used this command)
2)The prompt-sync folder  had a file named index.js so I changed my file name to index11.js
3) I ran node index11.js and it worked

Also go to file->preference->settings->type run in terminal in search  bar-> scroll down and tick the box under Code runner:run in terminal
i.e (Whether to run code in integrated terminal)

It worked for me! Hope it works for you too! Have a nice day!*/