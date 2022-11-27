var calendarEl = $('#container');
var currentDayEl = $('#currentDay');
var dayStart = 7;
var dayEnd = 17;
// put current time variable up here so i can test the code easily.
// var currentTime = parseInt(moment().format('HH'));
var currentTime = 11;

var dateTimeCounter = setInterval(function(){
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000)

var businessHours = [7,8,9,10,11,12,13,14,15,16,17]
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
                    <li id = "${time}timeGroup" class="list-group-item list-group-item-warning timeGroup col-2 col-md-2 col-lg-1">${time}</li>
                    <li class="list-group-item list-group-item-warning timeGroup col-8 col-md-8 col-lg-10"></li>
                    <li class="list-group-item list-group-item-warning col-2 col-md-2 col-lg-1">
                    <button type="button" class="btn btn-primary"><img src="./Assets/schedule.png" alt="save button"></button>
                    </li>
                    </ul>`);
                    //got the button from https://www.flaticon.com/free-icon/schedule_3774487?related_id=3774487&origin=search#
    }
    else {
    calendarEl.append(`<ul class="list-group list-group-horizontal">
                    <li id = "${time}timeGroup" class="list-group-item list-group-item-primary timeGroup col-2 col-md-2 col-lg-1">${time}</li>
                    <li class="list-group-item list-group-item-primary timeGroup col-8 col-md-8 col-lg-10"></li>
                    <li class="list-group-item list-group-item-primary col-2 col-md-2 col-lg-1">
                    <button type="button" class="btn btn-primary"><img src="./Assets/schedule.png" alt="save button"></button>
                    </li>
                    </ul>`);
    }

});

