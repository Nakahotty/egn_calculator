// ----------------- ЕГН ГЕНЕРАТОР -------------------

/*
	1. Generate the year (00)
	2. Generate the month (51)
	3. Generate the day (10)
	4. 9та цифра четна ако момче, нечетна ако е момиче
	5. Другите рандом
 */

// this is the function which activates when we click the button

function generateEGN() {
	let name, day, birthMonth, egnMonth, year, yearString, lastTwo, lastOne, ninth, ninthRange, egn;
	name = document.getElementById('firstName').value;
	day = document.getElementById('dayOfBirth').value;
	birthMonth = document.getElementById('monthOfBirth').value;
	year = document.getElementById('yearOfBirth').value;
	
	// fixing the egn months
	if (year <= 1999) {
		egnMonth = document.getElementById('monthOfBirth').value;
	} else if (year >= 2000) {
		egnMonth = +document.getElementById('monthOfBirth').value + +40;
	};

	// what happens depending on the gender
	gender = document.getElementById('gender').value;
	ninthRange = 10;
	if (gender === 'мъж') {
		ninth = Math.floor(Math.random() * ninthRange / 2) * 2;
	} else if (gender === 'жена') {
		ninth = Math.floor(Math.random() * ninthRange / 2) * 2 + 1;
	}

	// calculating the years
	yearString = year.toString();
	lastTwo = yearString.charAt(yearString.length - 2);
	lastOne = yearString.charAt(yearString.length - 1);
	lastDigits = lastTwo + lastOne;

	// the final EGN
	egn = lastDigits + egnMonth + day + 10 + ninth + (Math.floor(Math.random() * 10));

	// DOM manipulation EGN
	document.getElementById('egn').textContent = egn;

	console.log(`Здравейте ${name}, Bие сте роден/а на ${day}.${birthMonth}.${year}, ${gender} сте и вашето ЕГН е - ${egn}.`);
}

console.log(Math.floor(Math.random() * 10 / 2) * 2 	); // random even number

