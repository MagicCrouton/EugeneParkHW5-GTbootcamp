var calendarEl = $('#container');
var test = `did I work?`;

var dayStart = 7;
var dayEnd = 17;

var businessHours = [7,8,9,10,11,12,13,14,15,16,17]
businessHours.forEach(element => {
    if (element<13) {
        var time = `${element}AM`;
    }
    else {
        var time = `${element - 12}PM`;
    }

    calendarEl.append(`<li>${time}<li>`);
});
