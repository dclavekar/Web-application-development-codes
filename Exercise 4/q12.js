var mem;

function f1()
{    
    mem=1;
}
(function()
{
    document.getElementById("display").innerHTML=mem;
})();
