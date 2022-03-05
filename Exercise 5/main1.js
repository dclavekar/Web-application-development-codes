let obj = new XMLHttpRequest(); //object creation using constructor
//opening the server
obj.open("get" , "input.txt");
//sending request
obj.send()

obj.onload = function()
{
    // let varr= JSON.parse(obj.responseText)
    console.log(obj.responseText);
}