let box_for_days = document.getElementById('down')
let month_num = document.getElementById('month_num')

Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

let days_week = [
  'Mon', // Понедельник
  'Tue', // Вторник
  'Wed', // Среда
  'Thu', // Четверг
  'Fri', // Пятница
  'Sat', // Суббота
  'Sun'  // Воскресенье
]

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function CreateTrueDate(){
    let isDone = false
    let year = new Date().getFullYear() //можно поставить любой год
    let month = new Date().getMonth() //можно поставить любой месяц
    let date = new Date(year, month, 0);
    console.log(date.getDay())

    for(let i = 0; i < date.getDay(); i++){
        console.log('asasd')

        let block = document.createElement('div')

        block.innerHTML = '<div class="WBlock"></div>'

        box_for_days.appendChild(block)
    }
}

CreateTrueDate()

function ShowKalendar(){
    let color
    let month_name = new Date().getMonth()
    let this_day = new Date().getDate()

    console.log(this_day)

    let month = 
    {
        name: months[month_name], days: new Date().daysInMonth()
    }

    month_num.innerHTML = month.name

    for(let i = 1; i <= month.days; i++){

        if(i == this_day){
            color = 'red'
        }
        else{
            color = 'white'
        }

        let day = document.createElement('div')
        day.className = 'day_create'
        day.innerHTML = '<div class="day" style="background-color: ' + color + '; "> <p class="day_num">' + i +'</p> </div>'

        box_for_days.appendChild(day)
    }
}


ShowKalendar()