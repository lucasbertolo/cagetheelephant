/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/sources.js":
/*!*******************************!*\
  !*** ./src/assets/sources.js ***!
  \*******************************/
/*! exports provided: members, videos, disco, concerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"members\", function() { return members; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videos\", function() { return videos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disco\", function() { return disco; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concerts\", function() { return concerts; });\nconst members = [\r\n  {\r\n    bio: `Bowling Green, Kentucky only has a population of 61,000. \r\n    It seems like a big number, but when you really look at it, it’s only \r\n    about 0.007% of the population in New York City. \r\n    It’s a tiny fraction of a percent. If you look up what the city is famous for, \r\n    it’s hard to find an answer. So when brothers Matt and Brad Shultz of Cage The Elephant \r\n    started writing their newest record, Tell Me I’m Pretty via RCA Records\r\n    they went back to their hometown to spark some memories where everyone \r\n    knows everyone– especially their band.  <br>'At some point you have \r\n    to get the fuck out,' guitarist Brad Shultz said. 'There wasn’t anything to\r\n    do in Bowling Green; a lot of kids get into bands. As far as the younger \r\n    generation and even generations above us like Government \r\n    Cheese and The Everly Brothers, Bowling Green was a little oasis.`,\r\n    name: 'Brad Shultz',\r\n    instrument: 'Guitarist',\r\n  },\r\n\r\n  {\r\n    bio: `'COME A LITTLE CLOSER,' THE FIRST SINGLE FROM Cage The Elephant’s \r\n    third album, Melophobia, is steered by the powerful bass of Daniel Tichenor.\r\n    His thick, muted picking on the song conveys all of the grittiness that is found \r\n    on the rest of the album, where Tichenor stands out with a variety of funky, \r\n    galloping, and driving bass riffs that hone the melody as a way to \r\n    move the song. It’s a surprising fact that Tichenor had never touched \r\n    a bass before joining this band, and it’s even more surprising to find \r\n    that a near death experience is what led him to join.<br><br>After moving to \r\n    Louisville, Kentucky at age 23, Tichenor had set out to make a name for \r\n    himself as a guitarist, when suddenly life took a vicious turn: A car \r\n    crashed into him at 45 miles per hour while he was in a crosswalk\r\n    'to get home. With two shattered legs and a long road to recovery, \r\n    Tichenor returned home to Bowling Green, where Matthew and Brad Shultz asked \r\n    him to learn bass and join their band. Seven years later, Tichenor is supplying\r\n    pocket lines on songs such as “Take It or Leave It” and “Halo” with the poise \r\n    of a seasoned veteran and the gratitude of a man given a second chance.`,\r\n    name: 'Daniel Tichenor',\r\n    instrument: 'Guitarist',\r\n  },\r\n\r\n  {\r\n    bio: 'Does anyone know anything about this guy?<br><br>',\r\n    name: 'Jared Champion',\r\n    instrument: 'Drummer',\r\n  },\r\n  {\r\n    bio: `Matthan Minster has recently moved to Portland\r\nOregon with his bandmates to pursue a career in music. In 2004 he completed a\r\nsoundtrack for a University of Texas student film entitled The Gulf`,\r\n    name: 'Matthan Minster',\r\n    instrument: 'Backing Vocal',\r\n  },\r\n  {\r\n    bio: `'Matt grew up2 in Bowling Green, Kentucky, with his brother, Brad, who is \r\na year older and also in Cage the Elephant. They came from a poor background and \r\nwere sometimes teased for this. Brad was called 'Poor Boy' by kids at their school. \r\nTheir dad, a musician, is also called Brad and their parents separated when the \r\nbrothers ' + \"were young. After the divorce, their mother dated Matt's football \r\ncoach leading him to quit the team and play music in a state of rebellion;<br><br>  \r\nMatt married his fiancé Juliette Buchs, French actress and model, at the beginning \r\nof 2014 in a civil ceremony in the Warren County Courthouse, Bowling Green. \r\nThey celebrated the marriage in August of the same year with family and friends in \r\nRennes, France- where Juliette is from and a later celebration in America in October'`,\r\n    name: 'Matt Shultz',\r\n    instrument: 'Lead Vocalist',\r\n  },\r\n];\r\n\r\nconst videos = [\r\n  {\r\n    src: 'video1.mp4',\r\n    name: 'Cigarrete Daydreams',\r\n    disco: 'Melophobia',\r\n  },\r\n  {\r\n    src: 'video2.mp4',\r\n    name: 'Trouble',\r\n    disco: \"Tell Me I'm Pretty\",\r\n  },\r\n  {\r\n    src: 'video3.mp4',\r\n    name: \"Ain't no rest for the wicked\",\r\n    disco: \"Tell Me I'm Pretty\",\r\n  },\r\n];\r\n\r\nconst disco = [\r\n  {\r\n    title: \"Tell Me I'm Pretty\",\r\n    data: `\r\n    <tr>\r\n        <td>Cry Baby</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Mess Around</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Sweetie Little Jean</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Too Late To Say Goodbye</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Cold Cold Cold</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Trouble</td>\r\n    </tr>\r\n    <tr>\r\n        <td>How Are You True</td>\r\n    </tr>\r\n    <tr>\r\n        <td>That's Right</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Punchin' Bag</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Portuguese Knife Fight</td>\r\n    </tr>\r\n    `,\r\n\r\n    link:\r\n      'https://www.fnac.pt/Cage-The-Elephant-Tell-Me-I-m-Pretty-Vinil/a943009',\r\n  },\r\n  {\r\n    title: 'Cage The Elephant',\r\n    data: `\r\n    <tr>\r\n        <td>In One Ear</td>\r\n    </tr>\r\n    <tr>\r\n        <td>James Brown</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Ain't No Rest For The Wicked</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Tiny Little Robots</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Lotus</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Back Against The Wall</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Drones In The Valley</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Judas</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Back Stabbin' Betty</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Soil To The Sun</td>\r\n    </tr>\r\n        <td>Free Love</td>\r\n    </tr>\r\n    `,\r\n\r\n    link:\r\n      'https://www.fnac.pt/Cage-The-Elephant-Tell-Me-I-m-Pretty-Vinil/a943009',\r\n  },\r\n  {\r\n    title: 'Melophobia',\r\n    data: `\r\n    <tr>\r\n        <td>Spiderhead</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Come a Little Closer</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Telescope</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Its Just Forever</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Take It or Leave It</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Halo</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Black Widow</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Hypocrite</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Teeth</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Cigarrete Daydreams</td>\r\n    </tr>\r\n    `,\r\n\r\n    link: 'https://www.fnac.pt/Cage-The-Elephant-Melophobia-CD-Album/a776349',\r\n  },\r\n  {\r\n    title: 'Thank You Happy Birthday',\r\n    data: `\r\n    <tr>\r\n        <td>Always Something</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Aberdeen</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Indy Kidz</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Shake Me Down</td>\r\n    </tr>\r\n    <tr>\r\n        <td>2024</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Sell Yourself</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Rubber Ball</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Right Before My Eyes</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Around My Head</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Sabertooth Tiger</td>\r\n    </tr>\r\n        <td>Japanese Buffalo</td>\r\n    </tr>\r\n        <td>Flow</td>\r\n    </tr>\r\n    `,\r\n\r\n    link:\r\n      'https://www.fnac.pt/Cage-The-Elephant-Thank-You-Happy-Birthday-lp-imp-Vinil/a358348',\r\n  },\r\n];\r\n\r\nconst concerts = [\r\n  {\r\n    date: new Date('2020-10-17T03:24:00'),\r\n    place: 'Daytime Village',\r\n    address: 'Las Vegas, NV, US',\r\n    coords: { lat: 36.1699, lng: -115.1398 },\r\n  },\r\n  {\r\n    date: new Date('2020-11-13T03:24:00'),\r\n    place: 'Austin City Limits',\r\n    address: 'Austin, TX, US',\r\n    coords: { lat: 30.2672, lng: -97.7431 },\r\n  },\r\n  {\r\n    date: new Date('2020-12-11T03:24:00'),\r\n    place: 'Bridge School Benefit',\r\n    address: 'Mountain View, CA, US',\r\n    coords: { lat: 37.3861, lng: -122.0839 },\r\n  },\r\n  {\r\n    date: new Date('2020-12-18T03:24:00'),\r\n    place: 'Vodoo Festival 2016',\r\n    address: 'New Orleans, LA, US',\r\n    coords: { lat: 29.9511, lng: -90.0715 },\r\n  },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/assets/sources.js?");

/***/ }),

/***/ "./src/scripts/calendar.js":
/*!*********************************!*\
  !*** ./src/scripts/calendar.js ***!
  \*********************************/
/*! exports provided: setConcert, handleConcerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setConcert\", function() { return setConcert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleConcerts\", function() { return handleConcerts; });\n/* harmony import */ var _assets_sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sources */ \"./src/assets/sources.js\");\n\r\n\r\nfunction changeMarker(coords) {\r\n  // eslint-disable-next-line no-undef\r\n  const map = new google.maps.Map(\r\n    document.getElementById('googleMap'), { zoom: 4, center: coords },\r\n  );\r\n  // eslint-disable-next-line no-undef\r\n  const marker = new google.maps.Marker({ position: coords, map });\r\n  return marker;\r\n}\r\n\r\nfunction animateDescription() {\r\n  document.querySelector('.descr-show').classList.add('fadeOutWidth');\r\n  setTimeout(() => {\r\n    document.querySelector('.descr-show').style.width = '15%';\r\n  }, 100);\r\n  setTimeout(() => {\r\n    document.querySelector('.descr-show').classList.remove('fadeOutWidth');\r\n    document.querySelector('.descr-show').classList.add('fadeInWidth');\r\n    document.querySelector('.descr-show').style.width = '30%';\r\n  }, 700);\r\n}\r\n\r\nfunction setConcert(index) {\r\n  const {\r\n    place, date, address, coords,\r\n  } = _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"concerts\"][index];\r\n\r\n  const day = date.getDate();\r\n  const month = date.toLocaleString('default', { month: 'short' });\r\n\r\n  animateDescription();\r\n  changeMarker(coords);\r\n  document.querySelector('#data-show').innerHTML = `${day} ${month}`;\r\n  document.querySelector('#nome-show').innerHTML = place;\r\n  document.querySelector('#local-show').innerHTML = address;\r\n}\r\n\r\nfunction increaseCounter(counter) {\r\n  if (counter === _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"concerts\"].length - 1) {\r\n    return 0;\r\n  }\r\n  return counter + 1;\r\n}\r\n\r\nfunction decreaseCounter(counter) {\r\n  if (counter === 0) {\r\n    return _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"concerts\"].length - 1;\r\n  }\r\n  return counter - 1;\r\n}\r\n\r\nconst handleConcerts = () => () => {\r\n  let counter = 0;\r\n\r\n  return (isIncreasing = true) => {\r\n    counter = isIncreasing\r\n      ? increaseCounter(counter)\r\n      : decreaseCounter(counter);\r\n    setConcert(counter);\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/scripts/calendar.js?");

/***/ }),

/***/ "./src/scripts/disco.js":
/*!******************************!*\
  !*** ./src/scripts/disco.js ***!
  \******************************/
/*! exports provided: setDisco, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDisco\", function() { return setDisco; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModal\", function() { return closeModal; });\n/* harmony import */ var _assets_sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sources */ \"./src/assets/sources.js\");\n\r\n\r\nconst setDisco = (index) => () => {\r\n  document.querySelector('#title-disco').innerHTML = _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"disco\"][index].title;\r\n  document.querySelector('#musics').innerHTML = _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"disco\"][index].data;\r\n  document.querySelector('#link-album').setAttribute('href', _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"disco\"][index].link);\r\n  document.querySelector('#modal-disco').style.display = 'block';\r\n};\r\n\r\nconst closeModal = () => {\r\n  const modal = document.querySelector('#modal-disco');\r\n  modal.style.display = 'none';\r\n};\r\n\n\n//# sourceURL=webpack:///./src/scripts/disco.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video */ \"./src/scripts/video.js\");\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ \"./src/scripts/scroll.js\");\n/* harmony import */ var _disco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disco */ \"./src/scripts/disco.js\");\n/* harmony import */ var _members__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members */ \"./src/scripts/members.js\");\n/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar */ \"./src/scripts/calendar.js\");\n/* harmony import */ var _assets_sources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sources */ \"./src/assets/sources.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* EVENTS */\r\n\r\nwindow.initMap = () => {\r\n  const { coords } = _assets_sources__WEBPACK_IMPORTED_MODULE_5__[\"concerts\"][0];\r\n  // eslint-disable-next-line no-undef\r\n  const map = new google.maps.Map(\r\n    document.getElementById('googleMap'), { zoom: 4, center: coords },\r\n  );\r\n\r\n  // eslint-disable-next-line no-undef\r\n  const marker = new google.maps.Marker({ position: coords, map });\r\n  return marker;\r\n};\r\n\r\nwindow.onload = () => {\r\n  window.initMap();\r\n};\r\n\r\n// SCROLL\r\nconst sections = ['home', 'about', 'members', 'disco', 'calendar', 'contact'];\r\n\r\nsections.forEach((section) => {\r\n  document\r\n    .querySelector(`#nav-${section}`)\r\n    .addEventListener('click', () => Object(_scroll__WEBPACK_IMPORTED_MODULE_1__[\"SmoothVerticalScrolling\"])(section, 475));\r\n});\r\n\r\nconst scroll = Object(_scroll__WEBPACK_IMPORTED_MODULE_1__[\"onScroll\"])();\r\nwindow.onscroll = () => scroll();\r\n\r\n// MODALS\r\ndocument\r\n  .querySelector('#modal-members')\r\n  .addEventListener('click', _members__WEBPACK_IMPORTED_MODULE_3__[\"closeModal\"]);\r\n\r\ndocument\r\n  .querySelector('#modal-disco')\r\n  .addEventListener('click', _disco__WEBPACK_IMPORTED_MODULE_2__[\"closeModal\"]);\r\n\r\n// VIDEO\r\nconst playVideo = Object(_video__WEBPACK_IMPORTED_MODULE_0__[\"changeVideo\"])();\r\n\r\ndocument\r\n  .querySelector('#video')\r\n  .addEventListener('ended', playVideo);\r\ndocument\r\n  .querySelector('#back')\r\n  .addEventListener('click', () => playVideo(false));\r\ndocument\r\n  .querySelector('#forward')\r\n  .addEventListener('click', playVideo);\r\ndocument\r\n  .querySelector('#play')\r\n  .addEventListener('click', _video__WEBPACK_IMPORTED_MODULE_0__[\"videoPlayer\"]);\r\ndocument\r\n  .querySelector('#volume')\r\n  .addEventListener('click', _video__WEBPACK_IMPORTED_MODULE_0__[\"handleVolume\"]);\r\n\r\n// MEMBERS\r\nconst names = ['brad', 'daniel', 'jared', 'matthan', 'matt'];\r\n\r\nfor (let i = 1; i <= names.length; i++) {\r\n  document\r\n    .querySelector(`#member-${i}`)\r\n    .addEventListener('click', _members__WEBPACK_IMPORTED_MODULE_3__[\"setMember\"](names[i - 1]));\r\n}\r\n\r\n// DISCO\r\nfor (let i = 0; i < 4; i++) {\r\n  document\r\n    .querySelector(`#disco-${i + 1}`)\r\n    .addEventListener('click', _disco__WEBPACK_IMPORTED_MODULE_2__[\"setDisco\"](i));\r\n}\r\n\r\n// CALENDAR\r\nconst displayConcerts = Object(_calendar__WEBPACK_IMPORTED_MODULE_4__[\"handleConcerts\"])();\r\n\r\ndocument\r\n  .querySelector('#increase-concert')\r\n  .addEventListener('click', displayConcerts(false));\r\ndocument\r\n  .querySelector('#decrease-concert')\r\n  .addEventListener('click', displayConcerts(true));\r\n\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/members.js":
/*!********************************!*\
  !*** ./src/scripts/members.js ***!
  \********************************/
/*! exports provided: setMember, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMember\", function() { return setMember; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModal\", function() { return closeModal; });\n/* harmony import */ var _assets_sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sources */ \"./src/assets/sources.js\");\n// MEMBROS\r\n\r\n\r\nconst setMember = (name) => () => {\r\n  const infoMember = _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"members\"].find((s) => s.name.toLowerCase().split(' ')[0] === name);\r\n\r\n  document.querySelector('#modal-members').style.display = 'block';\r\n  document.querySelector('#name-member').innerHTML = infoMember.name;\r\n  document.querySelector('#job').innerHTML = infoMember.instrument;\r\n  document.querySelector('#bio').innerHTML = infoMember.bio;\r\n};\r\n\r\nconst closeModal = () => {\r\n  const modal = document.querySelector('#modal-members');\r\n  modal.style.display = 'none';\r\n};\r\n\n\n//# sourceURL=webpack:///./src/scripts/members.js?");

/***/ }),

/***/ "./src/scripts/scroll.js":
/*!*******************************!*\
  !*** ./src/scripts/scroll.js ***!
  \*******************************/
/*! exports provided: onScroll, SmoothVerticalScrolling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onScroll\", function() { return onScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SmoothVerticalScrolling\", function() { return SmoothVerticalScrolling; });\nfunction getOffsetTop() {\r\n  const members = document.querySelector('#members').offsetTop;\r\n  const about = document.querySelector('#about').offsetTop;\r\n  const home = document.querySelector('#home').offsetTop;\r\n  const contact = document.querySelector('#contact').offsetTop;\r\n  const calendar = document.querySelector('#calendar').offsetTop;\r\n  const disco = document.querySelector('#disco').offsetTop;\r\n\r\n  return {\r\n    members,\r\n    about,\r\n    home,\r\n    contact,\r\n    calendar,\r\n    disco,\r\n  };\r\n}\r\n\r\nfunction getDistance(items) {\r\n  return { ...items, distance: window.scrollY };\r\n}\r\n\r\nfunction checkRegion(items) {\r\n  const { offsets, distance } = items;\r\n  if (distance < offsets.home) {\r\n    return { ...items, section: 'home' };\r\n  }\r\n  if (distance < offsets.about) {\r\n    return { items, section: 'about' };\r\n  }\r\n  if (distance < offsets.members) {\r\n    return { items, section: 'members' };\r\n  }\r\n  if (distance < offsets.disco) {\r\n    return { items, section: 'disco' };\r\n  }\r\n  if (distance < offsets.calendar) {\r\n    return { items, section: 'calendar' };\r\n  }\r\n  return { items, section: 'contact' };\r\n}\r\n\r\nconst setScrollspy = (items) => {\r\n  const sectionsOrd = [\r\n    'home',\r\n    'about',\r\n    'members',\r\n    'disco',\r\n    'calendar',\r\n    'contact',\r\n  ];\r\n  const getIdx = sectionsOrd.findIndex((s) => s === items.section);\r\n\r\n  document.querySelector(`#icon-${items.section}`)\r\n    .classList.add('icon-scrollspy');\r\n\r\n  if (getIdx > 0) {\r\n    document.querySelector(`#icon-${sectionsOrd[getIdx - 1]}`)\r\n      .classList.remove('icon-scrollspy');\r\n  }\r\n  if (getIdx < sectionsOrd.length - 1) {\r\n    document.querySelector(`#icon-${sectionsOrd[getIdx + 1]}`)\r\n      .classList.remove('icon-scrollspy');\r\n  }\r\n};\r\n\r\nconst compose = (f, g) => (...args) => f(g(...args));\r\n\r\nfunction handleSrollspy(...fns) {\r\n  return fns.reduce(compose);\r\n}\r\n\r\nfunction onScroll() {\r\n  const checkOffset = getOffsetTop();\r\n\r\n  return () => handleSrollspy(\r\n    setScrollspy,\r\n    checkRegion,\r\n    getDistance,\r\n  )({ offsets: checkOffset });\r\n}\r\n\r\nfunction scrollTo(offset) {\r\n  window.scroll({\r\n    top: offset - 50,\r\n    left: 0,\r\n    behavior: 'smooth',\r\n  });\r\n}\r\n\r\nfunction SmoothVerticalScrolling(e, time) {\r\n  const offsets = getOffsetTop();\r\n  const sectionOffset = offsets[e];\r\n  let curTime = 0;\r\n  while (curTime <= time) {\r\n    window.setTimeout(scrollTo, curTime, sectionOffset);\r\n    curTime += time / 100;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/scroll.js?");

/***/ }),

/***/ "./src/scripts/video.js":
/*!******************************!*\
  !*** ./src/scripts/video.js ***!
  \******************************/
/*! exports provided: changeVideo, videoPlayer, handleVolume */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeVideo\", function() { return changeVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"videoPlayer\", function() { return videoPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleVolume\", function() { return handleVolume; });\n/* harmony import */ var _assets_sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sources */ \"./src/assets/sources.js\");\n\r\n\r\nfunction setVideo(num) {\r\n  const video = document.querySelector('#video');\r\n  const play = document.querySelector('#play');\r\n\r\n  const basePage =  false ? undefined : '';\r\n\r\n  document.querySelector('#mp4Source').setAttribute('src', `/${basePage}src/assets/videos/${_assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"videos\"][num].src}`);\r\n  document.querySelector('#music-name').textContent = _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"videos\"][num].name;\r\n  document.querySelector('#disco-name').textContent = _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"videos\"][num].disco;\r\n\r\n  play.querySelector('.fa').classList.remove('fa-play');\r\n  play.querySelector('.fa').classList.add('fa-pause');\r\n\r\n  video.load();\r\n  video.play();\r\n}\r\nfunction increaseCounter(counter) {\r\n  if (counter === _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"videos\"].length - 1) {\r\n    return 0;\r\n  }\r\n  return counter + 1;\r\n}\r\n\r\nfunction decreaseCounter(counter) {\r\n  if (counter === 0) {\r\n    return _assets_sources__WEBPACK_IMPORTED_MODULE_0__[\"videos\"].length - 1;\r\n  }\r\n  return counter - 1;\r\n}\r\n\r\nfunction changeVideo() {\r\n  let counter = 0;\r\n\r\n  return (isIncreasing = true) => {\r\n    counter = isIncreasing\r\n      ? increaseCounter(counter)\r\n      : decreaseCounter(counter);\r\n    setVideo(counter);\r\n  };\r\n}\r\n\r\nfunction videoPlayer() {\r\n  const video = document.querySelector('#video');\r\n  const play = document.querySelector('#play');\r\n\r\n  if (video.paused) {\r\n    video.play();\r\n    play.querySelector('.fa').classList.remove('fa-play');\r\n    play.querySelector('.fa').classList.add('fa-pause');\r\n  } else {\r\n    video.pause();\r\n    play.querySelector('.fa').classList.remove('fa-pause');\r\n    play.querySelector('.fa').classList.add('fa-play');\r\n  }\r\n}\r\n\r\nfunction handleVolume() {\r\n  const video = document.querySelector('#video');\r\n  const volume = document.querySelector('#volume');\r\n\r\n  if (!video.muted) {\r\n    video.muted = true;\r\n    volume.querySelector('.fa').classList.remove('fa-volume-up');\r\n    volume.querySelector('.fa').classList.add('fa-volume-off');\r\n  } else {\r\n    video.muted = false;\r\n    volume.querySelector('.fa').classList.remove('fa-volume-off');\r\n    volume.querySelector('.fa').classList.add('fa-volume-up');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/video.js?");

/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"main.css\");\n\n//# sourceURL=webpack:///./src/stylesheets/main.scss?");

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./src/scripts/main.js ./src/stylesheets/main.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/stylesheets/main.scss */\"./src/stylesheets/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/stylesheets/main.scss?");

/***/ })

/******/ });