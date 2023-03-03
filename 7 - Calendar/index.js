const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"]

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(); //getting first day of month
    console.log(firstDayOfMonth);
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of month, 년도하고 달을 넣고 getDate를 하면 그 달의 마지막 날을 리턴 받을 수 있다.
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(); // getting last date of month
    let liTag = ""; //이 부분도 중요
    
    for (let i = firstDayOfMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateOfLastMonth - i}</li>`
    }

    for (let i = 1; i <= lastDateOfMonth; i++) { // creating li of all days of current month
        //adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active": "";
        liTag += `<li class="${isToday}">${i}</li>`
    }
    

    for (let i = lastDayOfMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
    }
    

    currentDate.innerHTML = `${months[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag;
} //currMonth를 인덱스로 사용함으로써 month를 얻을 수 있다.
renderCalendar()


prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        //if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1; //이 부분이 중요하다

        if(currMonth <0 || currMonth > 11) { // if current month is less than - or grater than 1
            //creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); //updating current year with new date year
            currMonth = date.getMonth(); //updating current month with new date month
        } else {
            date = new Date();
        }
        renderCalendar();
    })
})