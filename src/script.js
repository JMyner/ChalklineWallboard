var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

var clock2 = new Vue({
    el: '#clock2',
    data: {
        time: '',
        date: ''
    }
});

var clock3 = new Vue({
    el: '#clock3',
    data: {
        time: '',
        date: ''
    }
});

var clock4 = new Vue({
    el: '#clock4',
    data: {
        time: '',
        date: ''
    }
});

var clock5 = new Vue({
    el: '#clock5',
    data: {
        time: '',
        date: ''
    }
});

var clock6 = new Vue({
    el: '#clock6',
    data: {
        time: '',
        date: ''
    }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    var me = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    me = new Date(me);
    var shk = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"});
    shk = new Date(shk);
    var dub = new Date().toLocaleString("en-US", {timeZone: "Asia/Dubai"});
    dub = new Date(dub);
    var la = new Date().toLocaleString("en-US", {timeZone: "America/los_Angeles"})
    la = new Date(la);
    var id = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})
    id = new Date(id);    
    
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
    
    clock2.time = zeroPadding(me.getHours(), 2) + ':' + zeroPadding(me.getMinutes(), 2) + ':' + zeroPadding(me.getSeconds(), 2);
    clock2.date = zeroPadding(me.getFullYear(), 4) + '-' + zeroPadding(me.getMonth()+1, 2) + '-' + zeroPadding(me.getDate(), 2) + ' ' + week[me.getDay()];
    
    clock3.time = zeroPadding(shk.getHours(), 2) + ':' + zeroPadding(shk.getMinutes(), 2) + ':' + zeroPadding(shk.getSeconds(), 2);
    clock3.date = zeroPadding(shk.getFullYear(), 4) + '-' + zeroPadding(shk.getMonth()+1, 2) + '-' + zeroPadding(shk.getDate(), 2) + ' ' + week[shk.getDay()];
    
    clock4.time = zeroPadding(dub.getHours(), 2) + ':' + zeroPadding(dub.getMinutes(), 2) + ':' + zeroPadding(dub.getSeconds(), 2);
    clock4.date = zeroPadding(dub.getFullYear(), 4) + '-' + zeroPadding(dub.getMonth()+1, 2) + '-' + zeroPadding(dub.getDate(), 2) + ' ' + week[dub.getDay()];
    
    clock5.time = zeroPadding(la.getHours(), 2) + ':' + zeroPadding(la.getMinutes(), 2) + ':' + zeroPadding(la.getSeconds(), 2);
    clock5.date = zeroPadding(la.getFullYear(), 4) + '-' + zeroPadding(la.getMonth()+1, 2) + '-' + zeroPadding(la.getDate(), 2) + ' ' + week[la.getDay()];
    
    clock6.time = zeroPadding(id.getHours(), 2) + ':' + zeroPadding(id.getMinutes(), 2) + ':' + zeroPadding(id.getSeconds(), 2);
    clock6.date = zeroPadding(id.getFullYear(), 4) + '-' + zeroPadding(id.getMonth()+1, 2) + '-' + zeroPadding(id.getDate(), 2) + ' ' + week[id.getDay()];
};



function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}