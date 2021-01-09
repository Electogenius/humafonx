//system()
var system = {
    version: 'a 2',
    pass: '',
    passwordCheck: function(a){return a===system.pass},
    appCode: {
        test:
`@NAME-test;
elm-test-'t'-'hello';
var-hmm-'bruh';
elm-vartest-'t'-hmm;
add-sys-test;
add-sys-vartest;
/*-what on earth is this mess*/;`
    }
}

//datetime
setInterval(() => {
    let today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let dete = today.toDateString();
    mm = mm + '';
    mm = mm.length >= 2 ? mm : new Array(2 - mm.length + 1).join('0') + mm;
    hh = hh + '';
    hh = hh.length >= 2 ? hh : new Array(2 - hh.length + 1).join('0') + hh;
    document.querySelectorAll('.show-time').forEach(x => x.innerHTML = `${hh}:${mm}`)
    document.querySelectorAll('.show-date-full').forEach(x=>x.innerHTML = `${dete}`)
}, 1000);

function unlock(attempt){
    if (system.passwordCheck(attempt)){
        $('#lockscreen').addClass('hidden');
        $('#yeq').removeClass('hidden')
    }
}

function openApp(code) {
    var scriptt = document.getElementById('appscripts')
    var res = document.createTextNode(elm(code, 'document.getElementById("homescreen")'))
    var el = document.createElement('script')
    el.appendChild(res)
    scriptt.appendChild(el);
}