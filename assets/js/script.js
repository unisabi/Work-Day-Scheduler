//local storage. - event listener, is listening for the saving button, to storage the values of the text dexcription and time.
addEventListener = "#save"
localStorage.setItem("save", "my-value-01");

var myValue = localStorage.getItem('save);

console.log(myValue)

var arrayData = [
    {
        "save": "value01"
    },
    {
        "key02": "value02"
    }
]

localStorage.setItem("myArray", JSON.stringify(arrayData));

var myObj = localStorage.getItem('myArray');

console.log(myObj);
var parsedData = JSON.parse(myObj);
console.log(parsedData)
// trying to making the past,current, and future hours show the colors.
for (let i = 0; i < timeBlocks.length; i++){
    var timeBlocks = timeBlocks[i].children[0].innerHTML;
    
}