let employees = require('./employees'); //과거 버전의 import
var str = "";
str += "<h2>직원정보</h2><hr />"
for (var i=0; i < employees.length; i++) {
    str += '<div>' + employees[i].name + ' : ' + employees[i].email +
              ', ' + employees[i].mobile + '</div>';
}
document.getElementById('app').innerHTML = str;
