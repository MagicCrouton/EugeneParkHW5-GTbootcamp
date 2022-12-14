var calendarEl = $('#container');
var currentDayEl = $('#currentDay');
var dayStart = 7;
var dayEnd = 17;
var businessHours = [];

for ( i=dayStart; i<dayEnd+1; ++i) {
    businessHours[(i-dayStart)] = i
}

// put current time variable up here so i can test the code easily.
var currentTime = parseInt(moment().format('HH'));
// var currentTime = 3;

var dateTimeCounter = setInterval(function(){
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000)



businessHours.forEach(element => {
    if (element<12) {
        var time = `${element}AM`;
    }
    else if (element===12) {
        var time = `12PM`
    }
    else {
        var time = `${element - 12}PM`;
    }

    if (element < currentTime) {
    calendarEl.append(`<ul class="list-group list-group-horizontal">
                    <li id = "${time}timeGroup" class="list-group-item list-group-item-secondary timeGroup col-2 col-md-2 col-lg-1">${time}</li>
                    <li class="list-group-item list-group-item-secondary col-10 col-md-10 col-lg-11">
                    </li>
                    </ul>`);
    }
    else if (element === currentTime) {
    calendarEl.append(`<ul class="list-group list-group-horizontal">
                    <li class="list-group-item list-group-item-warning timeGroup col-2 col-md-2 col-lg-1">${time}</li>
                    <li id = "${time}TimeGroupContainer" class="list-group-item list-group-item-warning timeGroup col-8 col-md-8 col-lg-10">
                        <input id = "${time}TimeGroupList" class="form-control form-control-lg" type="text" placeholder="Input Task here" aria-label=".form-control-lg example">
                    </li>
                    <li class="list-group-item list-group-item-warning col-2 col-md-2 col-lg-1">
                        <button id = "${time}TimeGroup" type="button" class="btn btn-primary"><img src="./Assets/schedule.png" alt="save button">Save</button>
                    </li>
                    </ul>`);
                    //got the button from https://www.flaticon.com/free-icon/schedule_3774487?related_id=3774487&origin=search#
    }
    else {
    calendarEl.append(`<ul class="list-group list-group-horizontal">
                    <li class="list-group-item list-group-item-primary timeGroup col-2 col-md-2 col-lg-1">${time}</li>
                    <li id = "${time}TimeGroupContainer" class="list-group-item list-group-item-primary timeGroup col-8 col-md-8 col-lg-10">
                        <input id = "${time}TimeGroupList" class="form-control form-control-lg" type="text" placeholder="Input Task here" aria-label=".form-control-lg example">
                    </li>
                    <li class="list-group-item list-group-item-primary col-2 col-md-2 col-lg-1">
                        <button id = "${time}TimeGroup" type="button" class="btn btn-primary"><img src="./Assets/schedule.png" alt="save button">Save</button>
                    </li>
                    </ul>`);
    }

});

// see's if there is existing local data and if not it will generate an array of objects for the planner data
if (window.localStorage.getItem('plannerData') === null) {

    var plan = [];
    businessHours.forEach(hour => {
        if (hour < 12)
        plan[hour-businessHours[0]] = {
            time: `${hour}AM`,
            toDo: []
        }
        else if (hour === 12)
        plan[hour-businessHours[0]] = {
            time: `${hour}PM`,
            toDo: []
        }
        else {
        plan[hour-businessHours[0]] = {
            time: `${hour-12}PM`,
            toDo: []    
        }      
    }})

}

else {
var plan = JSON.parse(window.localStorage.getItem('plannerData'));
plan.forEach(element => {
    var tempContainer = $(`#${element.time}TimeGroupContainer`);
    for (i=0; i< element.toDo.length; ++i) {
        tempContainer.append(`
        <li class="list-group-item list-group-item-info timeGroup col-8 col-md-8 col-lg-10">${element.toDo[i]}
        </li>`)
    }
})}

// plan.forEach(element => {
//     $(`${element.time}TimeGroupContainer`).on('click',(function(){
//         console.log("i was clicked");
//     }));
// })


// save button click event listner logic
var modifyTimeWindow = document.querySelectorAll('.btn');
modifyTimeWindow.forEach(element => {
    element.addEventListener('click', function() {
        var temp = document.getElementById(`${element.id}List`).value
        console.log(temp)
        var tempContainer = $(`#${element.id}Container`);
        if (temp === '') {

        }

        else {
        tempContainer.append(`
            <li class="list-group-item list-group-item-info timeGroup col-8 col-md-8 col-lg-10">${temp}
            </li>`)
        console.log(element.id)
        // this pushes the task into the array of the plan object i used slice because i didn't want to refactor my whole code again.
        var index = plan.map(object => object.time).indexOf(`${element.id.slice(0,-9)}`);
        plan[index].toDo.push(`${temp}`);
        window.localStorage.setItem('plannerData', JSON.stringify(plan));
        document.getElementById(`${element.id}List`).value = ('');
        }
    })})
