
//function init
const availableLang = ['en', 'ja'];
const defaultLang = 'en';
const masterDivName = 'master';
const masterDiv = document.getElementById(masterDivName);

const master = {
	en: {
		bio: ['Highly motivated, detail-oriented, capable software engineer based in Toronto. I enjoy working on technically challenging projects and am a fast learner. My career interests fall under data sciences, full stack development, and more recently machine learning and computer vision. I believe that everyone can benefit from being data driven.', 
			  'Feel free to reach out on any of the links below. 😊',],
		header: 'Hello, Albert here!',
	},
	ja: { 
		bio: ['はじめまして皆様、ぼくのページへようこそ。覚えが早いとやる気があり、２０１６トロント大学卒。フルスタックとデータサイエンスと機械学習に興味があります。ソフトウェアの就職の機会がいればいつでもどこでも歓迎です。', 
			  'お問い合わせリンクスはどうぞ。😊',],
		header: 'アルバート',
	},
};


function createHeader(headerText) {
	const header = document.createElement('header');
	const strong = document.createElement('strong');
	const center = document.createElement('center');

	center.textNode = headerText;
	strong.appendChild(center);
	header.appendChild(strong);

	return header;
}

function createParagraphs(paragraphs) {
	const ps = [];
	let p = null;
	paragraphs.forEach(paragraph =>
		p = document.createElement('p');
		p.textNode = paragraph;
		ps.push(p);
	);
}

function createLanguageSwitches(languages) {
	;
}

masterDiv.appendChild(createHeader());
