const knn = (profile, data, k=5) => {
	let adaptedData = [];
	let distCourage;
	let distAmbition;
	let distIntelligence;
	let distGood;
	let distOverall;
	for (let i = 0; i < data.length; i++) {
		distCourage = profile['Courage'] - data['Courage'];
		distAmbition = profile['Ambition'] - data['Ambition'];
		distIntelligence = profile['Intelligence'] - data['Intelligence'];
		distGood = profile['Good'] - data['Good'];
		distOverall = (distCourage**2 + distAmbition**2 + distIntelligence**2 + distGood**2) ** 0.5;
		adaptedData.push({
			name: data[i]['Name'],
			house: data[i]['House'],
			courage: distCourage,
			ambition: distAmbition,
			intelligence: distIntelligence,
			good: distGood,
			distance: distOverall
		});
	};
	adaptedData.sort(function(a, b) {return a.distance - b.distance});
	houses = {'Gryffindor': 0, 'Slytherin': 0, 'Hufflepuff': 0, 'Ravenclaw': 0};
	for (let j = 0; j < k; j++) {
		houses[adaptedData[i].house]++
	};
	let housesList = [
		['Gryffindor', houses['Gryffindor']],
		['Slytherin', houses['Slytherin']],
		['Ravenclaw', houses['Ravenclaw']],
		['Hufflepuff', houses['Hufflepuff']]
	];
	housesList.sort(function(a, b) {return a[1] - b[1]});
	return housesList[3];
};