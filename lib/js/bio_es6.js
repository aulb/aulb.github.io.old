const onClicker = (function() {
//function init
const availableLangs = ['en', 'jp'];
const defaultLang = 'en';
const masterDivName = 'master';
const masterDiv = document.getElementById(masterDivName);
const langSelectName = 'langSelect';
const langSelectDiv = document.getElementById(langSelectName);
const langClassName = 'links';

const master = {
	en: {
		bio: ['Highly motivated and detail-oriented software engineer based in Toronto. I enjoy working on technically challenging projects surrounding data science, full stack development and more recently machine learning and computer vision. I believe that everyone can benefit from being data driven.', 
			  'Feel free to reach out on any of the links below. 😊',],
		header: 'Hello, Albert here!',
	},
	jp: { 
		bio: ['はじめまして皆さん、ぼくのページへようこそ。覚えが早いとやる気があり、２０１６トロント大学卒。フルスタックとデータサイエンスと機械学習に興味があります。ソフトウェアの就職の機会がいればいつでもどこでも歓迎です。', 
			  'お問い合わせリンクスはどうぞ。😊',],
		header: 'アルバート',
	},
};



function onClicker(event) {
	// Check if the language is in our availableLangs
	const clickedElement = event.toElement || event.target;
	const language = clickedElement.dataset.lang;
	const idx = availableLangs.indexOf(language);
	if (idx == -1) {
		// Then don't change it
		return;	
	} 

	// Change highlight
	changeHighlightText(language);

	// Get header in the language
	const headerText = master[language].header;
	const header = createHeader(headerText);	

	// Get paragraphs in that language
	const paragraphs = master[language].bio;
	const ps = createParagraphs(paragraphs);

	// Clean out masteDiv and then append to the masterDiv
	while (masterDiv.firstChild) {
	    masterDiv.removeChild(masterDiv.firstChild);
	}

	// Append to masterDiv
	masterDiv.appendChild(header);
	for (let p of ps) {
		masterDiv.appendChild(p);
	}
}

function changeHighlightText(language) {
	// Get all links
	const languageSwitches = document.getElementsByClassName(langClassName);

	for (let languageSwitch of languageSwitches) {
		if (languageSwitch.dataset.lang == language) {
			languageSwitch.id = 'highlight';
		} else {
			languageSwitch.id = '';
		}
	}
}

function createHeader(headerText) {
	const header = document.createElement('header');
	const h1 = document.createElement('h1');
	const center = document.createElement('center');

	center.textContent = headerText;
	h1.appendChild(center);
	header.appendChild(h1);

	return header;
}

function createParagraphs(paragraphs) {
	let ps = [];
	let p = null;
	for (let paragraph of paragraphs) {
		p = document.createElement('p');
		p.textContent = paragraph;
		ps.push(p);
	}
	return ps;
}

return onClicker;
})();