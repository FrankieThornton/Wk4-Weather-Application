document.querySelector('#calculate').addEventListener('click',calculateTemp);
var value = document.querySelector('#numOne').value;

function calculateTemp(numOne) {
	return value - 32 * 5/9;
}

var farTemp = calculateTemp;

console.log(farTemp);

if(numOne => 60) {
		document.querySelector('body').style.backgroundcolor = 'red';
	}
 else if (numOne < 60 && numOne > 30) {
		document.querySelector('body').style.backgroundcolor = 'grey';
	}
 else if (numOne =< 30) {
		document.querySelector('body').style.backgroundcolor = 'blue';
	}
