

function myfunction(id) {
    const element = document.getElementById("us");
    element.remove();

    var countSpan=document.querySelector("#"+id+" > span");
    var count = countSpan.innerText
    
    count--
    countSpan.innerText = count

   // var countt=counttSpan.innerText
    //countt++;
    //counttSpan.innerText=countt
    }



 
function ChangName(){
    const element = document.getElementById("name");
    element.innerText="hadeel farash";
}