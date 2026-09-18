import { thumbs } from '$lib';

const rndAvatar = () => Math.floor(Math.random() * 6) + 1;
const rndScore = (min: number, max: number) => Math.floor(Math.random() * (min + max + 1)) + min;
const rndDate = () => {
	const start = new Date('2025-01-01').getTime();
	const end = Date.now();
	return new Date(start + Math.random() * (end - start));
};

type ResultType = {
	id: number;
	score: string;
	emoji: string;
}[];
const reactions: ResultType = [
	{ id: 2, score: '19', emoji: '😁' },
	{ id: 1, score: '20', emoji: '😂' },
	{ id: 3, score: '18', emoji: '🐢' },
	{ id: 4, score: '17', emoji: '🗿' },
	{ id: 5, score: '16', emoji: '🦫' },
	{ id: 6, score: '15', emoji: '🕋' },
	{ id: 7, score: '14', emoji: '☪️' },
	{ id: 8, score: '13', emoji: '🤯' },
	{ id: 9, score: '12', emoji: '🙈' },
	{ id: 10, score: '11', emoji: '🔥' },
	{ id: 11, score: '10', emoji: '😢' },
	{ id: 12, score: '9', emoji: '🤔' },
	{ id: 13, score: '8', emoji: '👍' },
	{ id: 14, score: '7', emoji: '👀' },
	{ id: 15, score: '6', emoji: '💀' },
	{ id: 16, score: '5', emoji: '🥶' },
	{ id: 17, score: '4', emoji: '😴' },
	{ id: 18, score: '3', emoji: '🙌' },
	{ id: 19, score: '2', emoji: '🤝' },
	{ id: 20, score: '1', emoji: '🌟' }
];

type TagsType = {
	id: number;
	score: number;
	text: string;
}[];
const tags: TagsType = [
	{
		id: 31365464,
		score: 12,
		text: 'funny'
	},
	{
		id: 31365464,
		score: 11,
		text: 'kvykt'
	},
	{
		id: 31365464,
		score: 10,
		text: 'smiling'
	},
	{
		id: 31365464,
		score: 9,
		text: 'happy'
	},
	{
		id: 31365464,
		score: 8,
		text: 'lol'
	},
	{
		id: 31365464,
		score: 7,
		text: 'katukas'
	},
	{
		id: 31365464,
		score: 6,
		text: '☪️Hncer'
	}
];

const userStatusIcons = ['bot', 'coins', 'donator', 'rich', 'starLine', 'starSolid', 'verified'];

const rndArray = (result: any[]) => {
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}

	return result;
};

const randomUsername = () => {
	const maxLength = 25;
	const adjectives = [
		'happy',
		'sleepy',
		'tiny',
		'wild',
		'lazy',
		'silly',
		'cosmic',
		'fuzzy',
		'spicy',
		'lucky',
		'lonely',
		'angry',
		'quiet',
		'crazy',
		'clever',
		'golden',
		'hidden',
		'rapid',
		'ancient',
		'electric'
	];

	const nouns = [
		'turtle',
		'fox',
		'bear',
		'potato',
		'monkey',
		'ghost',
		'banana',
		'wizard',
		'penguin',
		'pickle',
		'dragon',
		'rabbit',
		'wolf',
		'coffee',
		'rocket',
		'mushroom',
		'pirate',
		'robot',
		'cookie',
		'meteor'
	];

	const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

	let adjective = random(adjectives);
	let noun = random(nouns);

	// Randomly capitalize first letter
	if (Math.random() < 0.5) {
		adjective = adjective[0].toUpperCase() + adjective.slice(1);
	}

	if (Math.random() < 0.5) {
		noun = noun[0].toUpperCase() + noun.slice(1);
	}

	// Randomly add a space
	const separator = Math.random() < 0.5 ? ' ' : '';

	// Randomly add numbers
	const numbers = Math.random() < 0.5 ? Math.floor(Math.random() * 1000).toString() : '';

	let username = adjective + separator + noun + numbers;

	// If too long, remove the space first, then numbers
	if (username.length > maxLength) {
		username = adjective + noun + numbers;
	}

	if (username.length > maxLength) {
		username = adjective + noun;
	}

	// Last resort: truncate
	return username.slice(0, maxLength);
};

const randomLithuanianText = (maxWords = 30) => {
	const words = `
    tačiau todėl labai šiandien žmogus gyvenimas pasaulis
    mažas didelis gražus keistas laikas vieta dalykas
    galima reikia turėtų būti buvo yra tampa atrodo
    kartu kartais visada niekada gana tikrai tiesiog
    greitai lėtai aplink viduje viršuje apačioje
    miestas gatvė namas langas medis vanduo dangus
    rytas vakaras diena naktis saulė oras kelias
    žmonės draugai istorija mintis žodis klausimas atsakymas
    naujas senas pirmas paskutinis geras blogas tikras
    paprastas įdomus juokingas svarbus keistas
  `
		.trim()
		.split(/\s+/);

	const sentenceCount = Math.floor(Math.random() * 3) + 1;
	const sentences = [];

	for (let i = 0; i < sentenceCount; i++) {
		const wordCount = Math.floor(Math.random() * (maxWords / sentenceCount)) + 3;

		let sentence = Array.from(
			{ length: wordCount },
			() => words[Math.floor(Math.random() * words.length)]
		).join(' ');

		// Capitalize first letter
		sentence = sentence[0].toUpperCase() + sentence.slice(1);

		// Random punctuation
		const punctuation = ['.', '.', '.', '!', '?'];
		sentence += punctuation[Math.floor(Math.random() * punctuation.length)];

		sentences.push(sentence);
	}

	return sentences.join(' ');
};

const comments = () => {
	let comment1 = {
		user: {
			id: 321321,
			name: randomUsername(),
			avatar: `/userAvatars/${rndAvatar()}.jpg`,
			icon: rndArray(userStatusIcons)[0]
		},
		// comment: randomLithuanianText(30),
		comment: 'M̴̢͕͓̣̏̐̉̌̽͒̌͘ͅi̷͎̠͍͔̬̦̿̀̓̎̍́́̍s̴̼̈́̾͋t̸͕͎̻̳̮̰̦́ę̴̹͔̌̓͛͑r̷̨̤̱̰̖͛̃͘ ̴̨̨̰̹̠̩̳̳͌͊A̴̲̗͖̚ͅn̶̢̬̩͓͎̑d̷̠̈́̈̋̇̓̚̚͠e̷̤̪͋̑̈̿̚r̸̛̞̱̮͓͈̣̀̀͜͠s̵̨̡͎̩̣̘͕̤̏o̶̻͖̥͔̘̝̔͗̋̊́̚͜͝͝ń̸͙̭̀̈́̚ 😈',
		time: rndDate().toString(),
		score: rndScore(-200, 1000),
		vote: null
	};
	let comment2 = {
		user: {
			id: 321321,
			name: randomUsername(),
			avatar: `/userAvatars/${rndAvatar()}.jpg`,
			icon: rndArray(userStatusIcons)[0]
		},
		comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
		time: new Date(Date.now() - 120 * 1000).toString(),
		score: rndScore(-200, 1000),
		vote: null
	};
	let comment3 = {
		user: {
			id: 321321,
			name: randomUsername(),
			avatar: `/userAvatars/${rndAvatar()}.jpg`,
			icon: rndArray(userStatusIcons)[0]
		},
		comment: 'GLORIOUS ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
		time: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
		score: rndScore(-200, 1000),
		vote: null
	};
	let comment4 = {
		user: {
			id: 321321,
			name: randomUsername(),
			avatar: `/userAvatars/${rndAvatar()}.jpg`,
			icon: rndArray(userStatusIcons)[0]
		},
		comment:
			"Lorem Ipsum is simply dummy text of the printing and typedsfgsetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. \n It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
		time: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
		score: rndScore(-200, 1000),
		vote: null
	};
	let comment5 = {
		user: {
			id: 321321,
			name: randomUsername(),
			avatar: `/userAvatars/${rndAvatar()}.jpg`,
			icon: rndArray(userStatusIcons)[0]
		},
		comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
		time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
		score: rndScore(-200, 1000),
		vote: null
	};
	let comment6 = {
		user: {
			id: 321321,
			name: randomUsername(),
			avatar: `/userAvatars/${rndAvatar()}.jpg`,
			icon: rndArray(userStatusIcons)[0]
		},
		comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
		time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
		score: rndScore(-200, 1000),
		vote: null
	};
	let comment7 = {
		user: {
			id: 321321,
			name: randomUsername(),
			avatar: `/userAvatars/${rndAvatar()}.jpg`,
			icon: rndArray(userStatusIcons)[0]
		},
		comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
		time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
		score: rndScore(-200, 1000),
		vote: null
	};
	let comment8 = {
		user: {
			id: 321321,
			name: randomUsername(),
			avatar: `/userAvatars/${rndAvatar()}.jpg`,
			icon: rndArray(userStatusIcons)[0]
		},
		comment: 'Rorem ipsum, dolor sit amet. Gaudeamus igitur, nortradamus to chaltur.',
		time: '2025-01-11T23:00:00.000Z',
		score: rndScore(-200, 1000),
		vote: null
	};
	let comments = [
		[comment1, comment2, comment3],
		[comment4, comment5, comment6, comment7, comment8]
	];
	return comments;
};

const generateComment = () => ({
	user: {
		id: 321321,
		name: randomUsername(),
		avatar: `/userAvatars/${rndAvatar()}.jpg`,
		icon: rndArray(userStatusIcons)[0]
	},
	comment: randomLithuanianText(50),
	time: rndDate().toString(),
	score: rndScore(-200, 1000),
	vote: null
});

function randomComments(maxGroups = 5, maxPerGroup = 8) {
	const groups = Math.floor(Math.random() * maxGroups) + 1;

	return [...Array.from({ length: groups }, () => {
		const count = Math.floor(Math.random() * maxPerGroup) + 1;

		return Array.from({ length: count }, () => generateComment());
	}), ...comments()];
}

export async function load({ params }) {
	const post = {
		media: thumbs.items.find((item) => item.id === Number(params.item)),
		user: {
			// name: randomUsername(),
			name: 'Beprisikiškeliaudamasis',
			avatar: `/userAvatars/${rndAvatar()}.jpg`,
			id: 'asdf6a8sd47f36as5d7f357',
			icon: rndArray(userStatusIcons)[0],
			time: rndDate().toString(),
			score: rndScore(-200, 1000),
			views: rndScore(1, 10000)
		},
		reactions: rndArray(reactions),
		tags: rndArray(tags),
		comments: randomComments()
	};
	return post;
}
