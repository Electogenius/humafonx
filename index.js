//system()
var system = {
    version: 'a 2',
    pass: '',
    passwordCheck: function(a){return a===system.pass},
    appCode: {
        test:
`@NAME-test;
elm-test-'p'-'hello';
var-hmm-'oo';
elm-vartest-'t'-hmm;
add-sys-test;
add-sys-vartest`
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
        anime({
        	targets: '#lockscreen',
        	easing: "easeInSine",
        	scale: 0,
        	marginLeft: "-50vw",
        	marginTop: "-50vh",
        	duration: 500,
        })
    }
}

function openApp(code) {
    var scriptt = document.getElementById('appscripts')
    var res = document.createTextNode(hyfon_string(code, 'document.getElementById("homescreen")'))
    var el = document.createElement('script')
    el.appendChild(res)
    scriptt.appendChild(el);
}