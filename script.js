const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"]

const renderCalender = () => {
    let firstDayOfMonth = new Date(currYear, currMonth + 1).getDate(),
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDate(),
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i  =1 ; i <= lastDateOfMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear == new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}">${i}</li>`;
    }
    
    for (let i = lastDayOfMonth; i < 6; i++){
        liTag += `<li class="inactive"> ${i - lastDayOfMonth + 1}</li>`;
    }


    currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalender();

prevNextIcon.forEach(icons => {
    icons.addEventListener("click", () => {
        currMonth = icons.id === "prev" ? currMonth - 1 :currMonth + 1;

        if (currMonth < 0 || currMonth> 11) {
            date = new Date(currYear, currMonth,);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }else{
            date = new Date();
        }
        renderCalender();
    })
})