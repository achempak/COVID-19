TESTER = document.getElementById('tester');
// fetch("confirmed_num_cases.json")
//     .then(response => response.json())
    //.then(json => console.log(json))
var obj = require('./confirmed_num_cases.json');
console.log(obj['China']);
Plotly.plot( TESTER, [{
    x: [1,2,3,4,5],
    y: [1,2,4,8,16] }], {
    margin: {t: 0}}, {showSendToCloud:true} );
    
console.log(Plotly.BUILD);