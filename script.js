const task = document.getElementById("task")
const desc = document.getElementById("desc")
const tab = document.getElementById("tab")

const stt = document.getElementById("stt")
const stp = document.getElementById("stp")

const pp = document.getElementById("p1")
const sq = document.getElementById('sq')
const  sc = document.getElementById('seconds')
const hr = document.getElementById('hours')
const mn = document.getElementById('minutes')

var s= 0
var m = 0
var h = 0
let track;

function addTask()
{
    tab.innerHTML+= "<tr><td>"+task.value+"</td><td>"+desc.value+"</td></tr>"
    task.value = ""
    desc.value = ""
}
timer.addEventListener("click", addTask)

function startTimer()
{
    pp.innerHTML = `${i}`
    i = i+1
}

function dyn(){
if(stt.textContent==='Start'){
    stt.style.setProperty('background-color',' rgb(255, 96, 96)')
    stt.style.setProperty('border-color','rgb(201, 0, 0)')
    stt.textContent='Stop'
    track=setInterval(function(){
        if(s>=60)
            {
                s=0
                m++
                mn.textContent=(m).toString().padStart(2,'0')
            }
        else if(m>=60)
        {
            h++;
            m=0;
            hr.textContent=(m).toString().padStart(2,'0')
        }
        sc.textContent=(s++).toString().padStart(2,'0')
    
    },1000)

}
else if(stt.textContent==='Stop')
{
    stt.style.setProperty('background-color','rgb(0, 255, 0)')
    stt.style.setProperty('border-color',' rgb(0, 183, 6)')
    stt.textContent='Start'
    tab.innerHTML+='<tr><td>'+task.value+'</td><td>'+desc.value+'</td><td>'+h+':'+s+'</td></tr>'
    task.value=""
    desc.value=""
    clearInterval(track)
    sc.textContent='00'
    hr.textContent='00'
    mn.textContent='00'
    s=0
    m=0
    h=0
}
}




stt.addEventListener("click", dyn);


// const sttA = stt.addEventListener("click",function(){
//     stid = setInterval(startTimer,1000)
// })

// stp.addEventListener("click", function () {
//     clearInterval(stid);
//   });