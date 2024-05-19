const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'tr', name: 'Turkish' },
    { code: 'de', name: 'German' }
];

languages.forEach(lang => {
    const option1 = document.createElement("option");
    option1.value = lang.code;
    option1.textContent = lang.name;

    const option2 = document.createElement("option");
    option2.value = lang.code;
    option2.textContent = lang.name;

    sourceLanguage.appendChild(option1);
    targetLanguage.appendChild(option2);
})
