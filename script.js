
// ------------------------------------PROGRAM/SCRIPT----------------------------
const tr = document.querySelectorAll('tr');
const btn = document.querySelector('button');



function rndm() { 
    var result           = '';
    let characters = "";
    var easy       = 'CIJLZ0123456789';
    var medium      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var hard      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    characters += easy;
    
    var charactersLength = characters.length;

      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   
    return result;
 }

tr.forEach(tRow => {
    for (let i = 1; i <= 40; i++) {
        tRow.innerHTML += `<td>${rndm()}</td>`;
    }
});

// ----------------------------------DOM-----------------------------------
const tableData = document.querySelectorAll('td');


tableData.forEach(e => {
    if (e.innerHTML == "2" || e.innerHTML == "7") {
        e.classList.add('correct');
    }

    e.addEventListener('click', function(a){
        if (e.classList.contains('yellow') || e.classList.contains('green')) {
            return false;
        }else if (a.target.classList.contains('correct')) {
            a.target.style.backgroundColor = '#9af152';
            a.target.classList.remove('correct');
            a.target.classList.add('green');
        }else{
            a.target.style.backgroundColor = 'red';
        }
    });

    btn.addEventListener('click', function() {
        if (e.classList.contains('correct')) {
            e.style.backgroundColor = 'yellow';
            e.classList.add('yellow');
        }


    })

    

    let fiveMinutes = 60 * 2,
    display = document.querySelector('.time');
    startTimer(fiveMinutes, display, e);



  
    
});

function startTimer(duration, display, e) {
    var timer = duration, minutes, seconds;
    var x =  setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            display.innerHTML = 'EXPIRED';
            if (e.classList.contains('correct')) {
                e.style.backgroundColor = 'yellow';
                e.classList.add('yellow');
            }
            clearInterval(x);
        }
    }, 1000);
}







