const input = document.getElementById('input');
let evenNumbers,oddNumbers,sum;

input.onchange = function(event){
    evenNumbers = []
    oddNumbers = []
    sum = 0

    const inputNum = Number(event.target.value)
     if(inputNum > 0){

        for(let i = 1; i <= inputNum; i++){
            sum += i
            if(i % 2 === 0){
                evenNumbers.push(i)
            }else{
              oddNumbers.push(i)
                }
            }
        }
        document.getElementById('sum').innerText = sum;
         document.getElementById("odd").innerText = oddNumbers;
          document.getElementById("even").innerText = evenNumbers;
          console.log(evenNumbers,oddNumbers,sum)
     }
