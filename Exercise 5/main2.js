let obj = new XMLHttpRequest(); //object creation using constructor
//opening the server
obj.open("get" , "input.json");
//sending request
obj.send()

obj.onload = function(){   
    
    // console.log(typeof(obj.responseText)); -->this is string
    let a= JSON.parse(obj.responseText)
    // console.log(typeof(a)); -->this is object
    // document.getElementById("display").innerHTML = a[1].name;
    

    let HTML="<table border=1px> <tr>";
    for(let i=0;i<a.length;i++)
    {
        HTML+= "<td>"+JSON.stringify(a[i].name)+"</td>";
        HTML+= "<td>"+JSON.stringify(a[i].dob)+"</td>";
        HTML+= "</tr>";
    }
    HTML+= "</tr> </table>"
    document.getElementById("display").innerHTML = HTML;
    
  
}