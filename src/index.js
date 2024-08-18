import fs from 'fs';

const filePath = './src/cards.json';

const pullCard = (cardData) => {
	const rand = Math.floor(Math.random() * 10) + 1;

	const cardPulled = cardData[`${rand}`];

	console.log('Name: ', cardPulled.name);
	console.log('Description: ', cardPulled.description);
};

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading the file:', err);
		return;
	}
	try {
		pullCard(JSON.parse(data));
	} catch (parseErr) {
		console.error('Error parsing JSON:', parseErr);
	}
});
