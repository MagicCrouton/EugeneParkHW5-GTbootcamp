var calendarEl = $('#container');
var test = `did I work?`;

var dayStart = 7;
var dayEnd = 17;

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

    calendarEl.append(`<ul class="list-group list-group-horizontal">
                    <li class="list-group-item ${time}timeGroup col-2 col-md-2 col-lg-1">${time}</li>
                    <li class="list-group-item col-10 col-md-10 col-lg-11">
                    <button type="button" class="btn btn-primary">Click Here to schedule your hour</button>
                    </li>
                    </ul>`);
});
