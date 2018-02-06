var p = new Promise(function(resolve, reject) {
    // 1초 후에 호출
    setTimeout(function() {
        var num = Math.round(Math.random()*20);
        var isValid = num % 2;
        if (isValid) { resolve(num); }
        else { reject(num); }
    }, 1000);
});

p.then(function(num) {
    console.log("SUCCESS : " + num);
}).catch(function(num) {
    console.log("FAIL : " + num);
});

console.log("Hello!!");