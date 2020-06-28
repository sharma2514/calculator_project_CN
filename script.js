var buttons = document.getElementsByClassName("btn");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var isOperator = false;
var isDecimal = false;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        var val = this.getAttribute('value');
        if(val == 'AC'){
            display.innerText = "";
            operand1 = 0;
            operand2 = null;
            operator = null;
            isOperator = false;
            isDecimal = false;
        }else if(val == '+' || val == '-' || val == '*' || val == '/' || val == '%'){
            if(isOperator){
                operator = val;
                operand1 = operand1;
            }else if(val == '+'){
                operator = '+';
                operand1 = display.innerText;
                display.innerText = "";
                isOperator = true;
             }
            else if(val == '-'){
                operator = '-';
                operand1 = display.innerText;
                display.innerText = "";
                isOperator = true;
            }
            else if(val == '*'){
                operator = '*';
                operand1 = display.innerText;
                display.innerText = "";
                isOperator = true;
            }
            else if(val == '/'){
                operator = '/';
                operand1 = display.innerText;
                display.innerText = "";
                isOperator = true;
            }
            else if(val == '%'){
                operator = '%';
                operand1 = display.innerText;
                display.innerText = "";
                isOperator = true;
            }
            isDecimal = false;
       }else if(val == '+/-'){
            if( display.innerText != ""){
                display.innerText = eval(display.innerText+"*-1");
            }
        }else if(val == '.'){
            if(!isDecimal){
                if(display.innerText == ""){
                    display.innerText = "0."
                }else{
                    display.innerText+=val;
                }
            }
            isDecimal = true;
        }else if(val == '='){
            operand2 = display.innerText;
            display.innerText = eval(operand1+operator+operand2);
            isOperator = false;
            isDecimal = false;
        }else{
            display.innerText +=val;
        }
    });
        
}