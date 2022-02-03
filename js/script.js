
/*
Create a simple web based survey
the page app will implement a simple survey
each page of the survey will have
a multiple choise question
a next question button
il will be possible to move to the next question only if an answer (correct or wrong) has been selected
final page will display the result with the correct and wrong answer
list of questions, possible answers and correct one could be modeled using a json, csv, or other file data structure (no db needed)

 */


var quiz = 0; // numero quiz
let out='';
const questions = 4;
const xmlhttp = new XMLHttpRequest(); 

xmlhttp.open("GET", "http://localhost/test/api.php?val=0");//apro API
xmlhttp.send(); // invio 


var element = document.getElementById("survey"); // Elemento principale


var btn = document.createElement("button"); // creo il bottone 

btn.hidden = true; // lo nascondo 
btn.id = "btn"; 
btn.innerHTML = 'next';
btn.setAttribute("onClick", "btnA(quiz)"); // evento al click chiamo la funzione btnA()
element.appendChild(btn); // l'attacco all'elemento principale



/******************************
 *            Funzioni        *
 ******************************/

xmlhttp.onload = function() {

    value = JSON.parse(this.responseText);  
    render(value); 
    
};

function activateBtn(){
    document.getElementById("btn").hidden = false;
}

function btnA(){
    
    console.log(window,"pressed");
    let result=document.getElementsByTagName("input");
    

    for (var elem of result)
        out+=(elem.checked ? 1 : 0);
    
    console.log(out);

    const xmlhttp = new XMLHttpRequest(); 
    
    xmlhttp.open("GET", "http://localhost/test/api.php?val="+out);//apro API
    xmlhttp.send(); // invio 

        xmlhttp.onload = function() {

            value = JSON.parse(this.responseText);  
            console.log("value",value); 
            render(value); 
            
        };

    }

function render(value) {

    let text = "";
    console.log("val dentro render",value);
    if ((typeof value)==='string'){
        console.log(out, value);
        if (out == value){
            document.getElementById("survey").innerHTML="You wrote all the correct answers!!!";
        }
            
        else {
            let valueArray = value.split('');
            let outArray = out.split('');
            let right = 0;
            

            

            for(let elem in valueArray){
                
                console.log(valueArray[elem],outArray[elem]);
                if ((valueArray[elem]===outArray[elem])&&(valueArray[elem]==1))
                    right++;
                    
                document.getElementById("survey").innerHTML="I'm sorry you only wrote "+right+" correct answer"+(right>1?'s':'')+" and "+(valueArray.length/questions-right)+" wrong" ;
            }
            

        }  
            
        
    }
    else{

        let div = document.createElement("div");
        div.setAttribute("id","questions");
        document.getElementById("btn").setAttribute("hidden","true");
        document.getElementById("survey").appendChild(div);

        
        text += value.titolo;
        
        for (let val in value.risp) {
            text+="<div>"
            text += "<label for='"+val+"'> ";  
            text += value.risp[val];      
            text += "</label>";            
            text += "<input id='"+val+"'  type=radio name='select' onchange='activateBtn(this)' >";
            text += "</div>"

        }
        document.getElementById("questions").innerHTML = text;
    }
    
    console.log(document.getElementById("survey"));
    
}

