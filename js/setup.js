'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizzarNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizzarSernames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

function getRandomItem(list) {
  return list[Math.floor(Math.random() * (list.length))];
}

var wizards = [{
  name: getRandomItem(wizzarNames) + ' ' + getRandomItem(wizzarSernames),
  coatColor: getRandomItem(coatColor),
  eyesColor: getRandomItem(eyesColor),
},
{
  name: getRandomItem(wizzarNames) + ' ' + getRandomItem(wizzarSernames),
  coatColor: getRandomItem(coatColor),
  eyesColor: getRandomItem(eyesColor),
},
{
  name: getRandomItem(wizzarNames) + ' ' + getRandomItem(wizzarSernames),
  coatColor: getRandomItem(coatColor),
  eyesColor: getRandomItem(eyesColor),
},
{
  name: getRandomItem(wizzarNames) + ' ' + getRandomItem(wizzarSernames),
  coatColor: getRandomItem(coatColor),
  eyesColor: getRandomItem(eyesColor),
}
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};
var appendElemets = function (elem) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < elem.length; i++) {
    fragment.appendChild(renderWizard(elem[i]));
  }
  similarListElement.appendChild(fragment);
};
appendElemets(wizards);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
