

let allianColor3 : string = '';

allianColor3 = prompt ('Choose any color from green, yellow, red')?.toLowerCase() || '';


if(allianColor3 === "green"){
    alert('The player earned 5 points!');
}
else if(allianColor3 === "yellow"){
    alert('The player earned 10 points!');
}
else if(allianColor3 === "red"){
    alert('The player earned 15 points!');
}
else alert ("Please select right color");





