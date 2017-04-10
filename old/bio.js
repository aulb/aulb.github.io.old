'use strict';

var onClicker = function () {
	//function init
	var availableLangs = ['en', 'jp'];
	var defaultLang = 'en';
	var masterDivName = 'master';
	var masterDiv = document.getElementById(masterDivName);
	var langSelectName = 'langSelect';
	var langSelectDiv = document.getElementById(langSelectName);
	var langClassName = 'links';

	var master = {
		en: {
			bio: ['Highly motivated and detail-oriented software engineer based in Toronto. I enjoy working on technically challenging projects surrounding data science, full stack development and more recently machine learning and computer vision. I believe that everyone can benefit from being data driven.', 'Feel free to reach out on any of the links below. 😊'],
			header: 'Hello, Albert here!'
		},
		jp: {
			bio: ['はじめまして皆さん、ぼくのページへようこそ。覚えが早いとやる気があり、２０１６トロント大学卒。フルスタックとデータサイエンスと機械学習に興味があります。ソフトウェアの就職の機会がいればいつでもどこでも歓迎です。', 'お問い合わせリンクスはどうぞ。😊'],
			header: 'アルバート'
		}
	};

	function onClicker(event) {
		// Check if the language is in our availableLangs
		var clickedElement = event.toElement || event.target;
		var language = clickedElement.dataset.lang;
		var idx = availableLangs.indexOf(language);
		if (idx == -1) {
			// Then don't change it
			return;
		}

		// Change highlight
		changeHighlightText(language);

		// Get header in the language
		var headerText = master[language].header;
		var header = createHeader(headerText);

		// Get paragraphs in that language
		var paragraphs = master[language].bio;
		var ps = createParagraphs(paragraphs);

		// Clean out masteDiv and then append to the masterDiv
		while (masterDiv.firstChild) {
			masterDiv.removeChild(masterDiv.firstChild);
		}

		// Append to masterDiv
		masterDiv.appendChild(header);
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = ps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var p = _step.value;

				masterDiv.appendChild(p);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	function changeHighlightText(language) {
		// Get all links
		var languageSwitches = document.getElementsByClassName(langClassName);

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = languageSwitches[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var languageSwitch = _step2.value;

				if (languageSwitch.dataset.lang == language) {
					languageSwitch.id = 'highlight';
				} else {
					languageSwitch.id = '';
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}

	function createHeader(headerText) {
		var header = document.createElement('header');
		var h1 = document.createElement('h1');
		// const center = document.createElement('center');
		h1.textContent = headerText;
		// center.textContent = headerText;
		// h1.appendChild(center);
		header.appendChild(h1);

		return header;
	}

	function createParagraphs(paragraphs) {
		var ps = [];
		var p = null;
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = paragraphs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var paragraph = _step3.value;

				p = document.createElement('p');
				p.textContent = paragraph;
				ps.push(p);
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		return ps;
	}

	return onClicker;
}();