let area = document.querySelector(".buttons_area")
let question = document.querySelector(".question")
let answer = document.querySelector(".answer")
answer.style.fontSize = "40px"
let display = ''
let enter = true
let cpressed = false
function print(data){
    question.style.fontSize = "45px";
        display = display + data
        question.innerText = display
    }
const functions={
    CE(){
        display = ''
        print("");
        answer.innerHTML = "";
    },
    C(){
        console.log("PRESSED")
        display = display.slice(0, -1);
        question.innerText = display
    },
    DEL(){
        let count=0;
        let n = display.length
        for(let i=n-1;i>=0;i--){
            if(display[i] == "+" || display[i] == "-" || display[i] == "*" || display[i] == "/"){
            display = display.slice(0, i);
            question.innerText = display;
            break
            }else{
                count++;
            }
         }
    },
    evaluate(){
            let result = eval(display.replace('^2', '**2'));
            answer.innerText = `= ${result}`;
            display = result.toString();
    }
}
let create = (data) =>{
    let button = document.createElement("button")
    button.style.backgroundColor = "pink"
    button.style.margin = "2px"
    button.style.borderRadius = "11px"
    button.setAttribute("class","button");
    button.style.boxShadow = "5px 5px 10px gray";
    let change = () =>{
        button.style.backgroundColor = "rgba(255, 192, 203, 100%)"
    }
    button.textContent = "center"
    button.innerText = data
    button.style.fontSize ="25px"
    area.append(button)
    button.addEventListener("click",()=>{
        if(data=="CE"){functions.CE()}
        else if(data=="C"){functions.C()}
        else if(data=="DEL"){functions.DEL()}
        else if(data=="/"){print("/")}
        else if(data=="7"){print("7")}
        else if(data=="8"){print("8")}
        else if(data=="9"){print("9")}
        else if(data=="*"){print("*")}
        else if(data=="4"){print("4")}
        else if(data=="5"){print("5")}
        else if(data=="6"){print("6")}
        else if(data=="-"){print("-")}
        else if(data=="1"){print("1")}
        else if(data=="2"){print("2")}
        else if(data=="3"){print("3")}
        else if(data=="+"){print("+")}
        else if(data=="^2"){print("^2")}
        else if(data=="0"){print("0")}
        else if(data=="."){print(".")}
        else if(data=="="){functions.evaluate()}
        button.style.backgroundColor = "rgba(255, 192, 203, 10%)"
       setTimeout(change,500) 
    })
}
for(let i=1;i<=20;i++){
    let data;
    if(i==1){data = "CE"}
    else if(i==2){data = "C"}
    else if(i==3){data = "DEL"}
    else if(i==4){data = "/"}
    else if(i==5){data = "7"}
    else if(i==6){data = "8"}
    else if(i==7){data = "9"}
    else if(i==8){data = "*"}
    else if(i==9){data = "4"}
    else if(i==10){data = "5"}
    else if(i==11){data = "6"}
    else if(i==12){data = "-"}
    else if(i==13){data = "1"}
    else if(i==14){data = "2"}
    else if(i==15){data = "3"}
    else if(i==16){data = "+"}
    else if(i==17){data = "^2"}
    else if(i==18){data = "0"}
    else if(i==19){data = "."}
    else if(i==20){data = "="}
create(data);}