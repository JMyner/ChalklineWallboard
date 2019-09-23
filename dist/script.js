var DateTime = luxon.DateTime;

var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: '',
        utcOffset: ''
    }
});

var clock2 = new Vue({
    el: '#clock2',
    data: {
        time: '',
        date: '',
        utcOffset: ''
    }
});

var clock3 = new Vue({
    el: '#clock3',
    data: {
        time: '',
        date: '',
        utcOffset: ''
    }
});

var clock4 = new Vue({
    el: '#clock4',
    data: {
        time: '',
        date: '',
        utcOffset: ''
    }
});

var clock5 = new Vue({
    el: '#clock5',
    data: {
        time: '',
        date: '',
        utcOffset: ''
    }
});

var clock6 = new Vue({
    el: '#clock6',
    data: {
        time: '',
        date: '',
        utcOffset: ''
    }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new DateTime.local();
    var me = new DateTime.fromObject({zone: "America/New_York"});
    var shk = new DateTime.fromObject({zone: "Asia/Shanghai"});
    var dub = new DateTime.fromObject({zone: "Asia/Dubai"});
    var la = new DateTime.fromObject({zone: 'America/los_Angeles'});
    var id = new DateTime.fromObject({zone: "Asia/Kolkata"});
    
    clock.time = cd.toLocaleString({ hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clock.date = cd.weekdayShort + ' ' + cd.day + '-' + cd.month + '-' + cd.year;
    clock.utcOffset = 'UTC: ' + formatOffset(cd);
    
    clock2.time = me.toLocaleString({ hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clock2.date = me.weekdayShort + ' ' + me.day + '-' + me.month + '-' + me.year;
    clock2.utcOffset = 'UTC: ' + formatOffset(me);
    
    clock3.time = shk.toLocaleString({ hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clock3.date = shk.weekdayShort + ' ' + shk.day + '-' + shk.month + '-' + shk.year;
    clock3.utcOffset = 'UTC: ' + formatOffset(shk);
    
    clock4.time = dub.toLocaleString({ hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clock4.date = dub.weekdayShort + ' ' + dub.day + '-' + dub.month + '-' + dub.year;
    clock4.utcOffset = 'UTC: ' + formatOffset(dub);
    
    clock5.time = la.toLocaleString({ hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clock5.date = la.weekdayShort + ' ' + la.day + '-' + la.month + '-' + la.year;
    clock5.utcOffset = 'UTC: ' + formatOffset(la);
    
    clock6.time = id.toLocaleString({ hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clock6.date = id.weekdayShort + ' ' + id.day + '-' + id.month + '-' + id.year;
    clock6.utcOffset = 'UTC: ' + formatOffset(id);
};

function formatOffset (DateTime) {
    var timezone_offset_min = DateTime.offset,
	offset_hrs = parseInt(Math.abs(timezone_offset_min/60)),
	offset_min = Math.abs(timezone_offset_min%60),
	timezone_standard;

    if(offset_hrs < 10)
    	offset_hrs = '0' + offset_hrs;

    if(offset_min < 10)
    	offset_min = '0' + offset_min;

    // Add an opposite sign to the offset
    // If offset is 0, it means timezone is UTC
    if(timezone_offset_min >= 0)
    	timezone_standard = '+' + offset_hrs + ':' + offset_min;
    else if(timezone_offset_min < 0)
    	timezone_standard = '-' + offset_hrs + ':' + offset_min;

    // Timezone difference in hours and minutes
    return timezone_standard 
}