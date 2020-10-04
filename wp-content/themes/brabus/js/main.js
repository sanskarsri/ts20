var LANGS_DATA = {
  fr: {
    "date": "du 5 au 8 Nov. 2020",
    "location": "Namur, Wallonie, Belgique",
    "title": "Mise à jour Corona",
    "text": "Après des mois d’hésitation, de grands espoirs et de rêves détruits, nous avons finalement décidé d’organiser l’édition 9.5 du KIKK festival (au lieu des 10 ans) cette année. Le programme sera un peu plus light que d’habitude mais, bonne nouvelle! Il y aura bien des conférences (en nombre plus réduit) et un KIKK in Town très spécial car nous y ajoutons un nouveau lieu hyper grand; <strong>Le Pavillon</strong>, notre nouvel espace d’exposition en haut de la Citadelle, l’incroyable forteresse du Moyen Age. Le Pavillon ouvrira pendant 3 mois à l’occasion du festival pour une exposition Pop-up intitulée Humains / Machines. <br><br> Rendez-vous sur la page <strong>Info Coronavirus</strong> dans la section \"Pratique\" du menu pour des informations récentes à propos des mesures de sécurité et potentiels changements de programme.<br/><br/> On se réjouit de vous revoir!",
    "button": {
      "text": "See KIKK 2020",
      "url": ""
    }
  },
  en: {
    "date": "5th to 8th Nov. 2020",
    "location": "Namur, wallonia, Belgium",
    "title": "Corona update",
    "text": "After several months of hesitation, of hopes and dreams slowed down, we've decided to organize a 9.5 edition of KIKK festival this year with a lighter program (instead of the 10 years anniversary edition). The good news is, there will be conferences (with limited capacity) and a pretty special KIKK in Town exhibition as we are adding a new huge location; <strong>The Pavilion</strong>, our new exhibition space on top of the Citadel, the amazing Middle Age fortress. The Pavilion will be open for a Pop-up exhibition titled Humans / Machines which will stay open during 3 months.<br><br> Please refer to the <strong>Info Coronavirus</strong> page in the \"Practical\" section of the website for up to date information about safety measures and program modifications.<br><br> Looking forward to seeing you all in person!",
    "button": {
      "text": "See KIKK 2020",
      "url": ""
    }
  }
}

var lang = document.documentElement.lang;
var DATA = lang === 'fr' ? LANGS_DATA['fr'] : LANGS_DATA['en'];

var hidden = localStorage.getItem('upcoming-kikk-hidden');

// Basic DOM 
var kikkPopup = document.createElement('div');
kikkPopup.classList = 'upcoming-kikk__popup js-upcoming-kikk-popup';
document.body.appendChild(kikkPopup);

var kikkPopupBackdrop = document.createElement('div');
kikkPopupBackdrop.classList = 'upcoming-kikk__backdrop js-upcoming-kikk-close';
kikkPopup.appendChild(kikkPopupBackdrop);

var kikkPopupContentWrapper = document.createElement('div');
kikkPopupContentWrapper.classList = 'upcoming-kikk__content-wrapper';
kikkPopup.appendChild(kikkPopupContentWrapper);

var kikkPopupContent = document.createElement('div');
kikkPopupContent.classList = 'upcoming-kikk__content';
kikkPopupContentWrapper.appendChild(kikkPopupContent);

var kikkPopupClose = document.createElement('div');
kikkPopupClose.classList = 'upcoming-kikk__close js-upcoming-kikk-close';
kikkPopupContent.appendChild(kikkPopupClose);

// Bind close events
var kikkPopupCloseTriggers = kikkPopup.querySelectorAll('.js-upcoming-kikk-close');
for (let i = 0; i < kikkPopupCloseTriggers.length; i++) {
  kikkPopupCloseTriggers[i].addEventListener('click', function() {
    localStorage.setItem('upcoming-kikk-hidden', true);
    kikkPopup.style = "display: none;";
  });
}

// Show popup if it was never showed
if (!hidden) {
  kikkPopup.style = "display: block;";
}

if (DATA.date) {
  var date = document.createElement('P');
  date.classList.add('upcoming-kikk__date');
  date.innerHTML = DATA.date;

  kikkPopupContent.appendChild(date);
}

if (DATA.location) {
  var loc = document.createElement('P');
  loc.classList.add('upcoming-kikk__location');
  loc.innerHTML = DATA.location;

  kikkPopupContent.appendChild(loc);
}

if (DATA.title) {
  var title = document.createElement('P');
  title.classList.add('upcoming-kikk__title');
  title.innerHTML = DATA.title;

  kikkPopupContent.appendChild(title);
}

if (DATA.text) {
  var text = document.createElement('P');
  text.classList.add('upcoming-kikk__text');
  text.innerHTML = DATA.text;

  kikkPopupContent.appendChild(text);
}

if (DATA.button.url != '') {
  var button = document.createElement('a');
  button.classList.add('upcoming-kikk__button');
  button.href = DATA.button.url;
  button.target = '_blank';
  button.innerHTML = "See next KIKK";

  if (DATA.button.text) {
    button.innerHTML = DATA.button.text;
  }

  kikkPopupContent.appendChild(button);
}
