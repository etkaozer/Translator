
const sourceLanguage = document.getElementById("sourceLanguage");
const inputText = document.getElementById("inputText");
const switchBtn = document.getElementById("switchBtn");
const targetLanguage = document.getElementById("targetLanguage");
const outputText = document.getElementById("outputText");
const translateBtn = document.getElementById("translateBtn");



//Translate Process
translateBtn.addEventListener("click", translate);

async function translate() {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '6cd5696b4cmsh09ccdb3f98350b6p1d6916jsnd6a64675efc7',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: inputText.value,
		target: targetLanguage.value,
		source: sourceLanguage.value
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	outputText.textContent = (result.data.translations[0].translatedText);
} catch (error) {
    outputText.textContent = "An error occured during translation...";
	console.error(error);
}
}

//Switch Process
switchBtn.addEventListener("click", switchFunc);

function switchFunc() {
    const tempLanguage = sourceLanguage.value;
    sourceLanguage.value = targetLanguage.value;
    targetLanguage.value = tempLanguage;

    const tempText = inputText.value;
    inputText.value = outputText.textContent;
    outputText.textContent = tempText;

    updateImages();

}

//Flag Switching Process
document.getElementById('sourceLanguage').addEventListener('change', updateImages);
document.getElementById('targetLanguage').addEventListener('change', updateImages);


function updateImages() {
    var sourceImg = document.getElementById("sourceFlag");
    var targetImg = document.getElementById("targetFlag");


    var sourceLangCode = document.getElementById("sourceLanguage").value;
    var targetLangCode = document.getElementById("targetLanguage").value;


    var sourceLang = languages.find(lang => lang.code === sourceLangCode);
    var targetLang = languages.find(lang => lang.code === targetLangCode);


    sourceImg.src = "images/" + sourceLang.name.toLowerCase() + ".png";


    targetImg.src = "images/" + targetLang.name.toLowerCase() + ".png";

}





