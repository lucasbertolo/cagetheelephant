// JavaScript Document

let contador = 0;
let nMusic = 0;
let geocoder;
let map;
let position = 'Las Vegas, NV';

// video
const videoSource = new Array();
videoSource[0] = 'videos/video1.mp4';
videoSource[1] = 'videos/video2.mp4';
videoSource[2] = 'videos/video3.mp4';
const videoCount = videoSource.length;

function videoPlay() {
  if (contador == 0) {
    document.getElementById('mp4Source').setAttribute('src', videoSource[1]);
		  	contador = 1;
    document.getElementById('nome-musica').innerHTML = 'Trouble';
    document.getElementById('disco-musica').innerHTML = "Tell Me I'm Pretty";
		   	document.getElementById('video').load();
    document.getElementById('video').play();
		  	return;
	  	}
	   	if (contador == 1) {
    document.getElementById('mp4Source').setAttribute('src', videoSource[2]);
		  	contador = 2;
    document.getElementById('nome-musica').innerHTML = "Ain't No Rest For The Wicked";
    document.getElementById('disco-musica').innerHTML = 'Cage The Elephant';
		   	document.getElementById('video').load();
    document.getElementById('video').play();
		  	return;
	  	}
  if (contador == 2) {
    document.getElementById('mp4Source').setAttribute('src', videoSource[0]);
		  	contador = 0;
    document.getElementById('nome-musica').innerHTML = 'Cigarrete Daydreams';
    document.getElementById('disco-musica').innerHTML = 'Melophobia';
		   	document.getElementById('video').load();
    document.getElementById('video').play();
	  	}
}

// GOOGLE MAP
function initialize() {
  const mapOptions = {
    center: new google.maps.LatLng(40.7058316, -74.2581844, 10),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
  geocoder = new google.maps.Geocoder();
}

function addAddress() {
  const address = position;
  geocoder.geocode({ address }, (results, status) => {
    	if (status == google.maps.GeocoderStatus.OK) {
    		map.setCenter(results[0].geometry.location);
        	const marker = new google.maps.Marker({
        		map,
            	position: results[0].geometry.location,
    		});
    } else {
           	alert(`Geocode was not successful for the following reason: ${status}`);
    }
  });
}

function iniAddress() {
  const address = position;
  geocoder.geocode({ address }, (results, status) => {
    	if (status == google.maps.GeocoderStatus.OK) {
    		map.setCenter(results[0].geometry.location);
        	const marker = new google.maps.Marker({
        		map,
            	position: results[0].geometry.location,
    		});
    } else {
           	alert(`Geocode was not successful for the following reason: ${status}`);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
window.addEventListener('load', (event) => {
  iniAddress();
});

// SCROLL CONTENT ABOUT
(function ($) {
  $(window).on('load', () => {
    $('.content-sobre').mCustomScrollbar({
      theme: 'dark',
    });
  });
}(jQuery));

$(document).ready(() => {
  // ROLAGEM MAIS DEVAGAR ENTRE AS PAGINAS
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      const { hash } = this;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 1200, () => {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // DESCRIÇÂO MENU LATERAL
  $('[data-toggle="tooltip"]').tooltip({ html: true, delay: { show: 500, hide: 100 } });

  // CONTROLE MUSICAS
  const v = new Array();

  v[0] = 'videos/video1.mp4';
  v[1] = 'videos/video2.mp4';
  v[2] = 'videos/video3.mp4';

  const player = document.getElementById('video');
  const mp4Vid = document.getElementById('mp4Source');

  // VIDEO

  $('#back').on('click', (event) => {
	  	if (contador == 1) {
      player.pause();
	      	mp4Vid.src = v[0];
		  	contador = 0;
      document.getElementById('nome-musica').innerHTML = 'Cigarrete Daydreams';
      document.getElementById('disco-musica').innerHTML = 'Melophobia';
		   	player.load();
      		player.play();
		  	return;
	  	}
	   	if (contador == 2) {
      player.pause();
	      	mp4Vid.src = v[1];
		 	contador = 1;
      document.getElementById('nome-musica').innerHTML = 'Trouble';
      document.getElementById('disco-musica').innerHTML = "Tell Me I'm Pretty";
      player.load();
      		player.play();
	  	}
  });

   	$('#forward').on('click', (event) => {
       	if (contador == 0) {
      player.pause();
	      	mp4Vid.src = v[1];
		  	contador = 1;
      document.getElementById('nome-musica').innerHTML = 'Trouble';
      document.getElementById('disco-musica').innerHTML = "Tell Me I'm Pretty";
		   	player.load();
      		player.play();
		  	return;
	  	}
	   	if (contador == 1) {
      player.pause();
	      	mp4Vid.src = v[2];
		 	contador = 2;
      document.getElementById('nome-musica').innerHTML = "Ain't No Rest For The Wicked";
      document.getElementById('disco-musica').innerHTML = 'Cage The Elephant';
      player.load();
      		player.play();
	  	}
  });

  // PLAY - PAUSE
  $('#play').on('click', function (event) {
    const video = document.getElementById('video');

  		if (video.paused == false) {
      video.pause();
      $(this).find($('.fa')).removeClass('fa-pause').addClass('fa-play');
    } else {
      video.play();
      $(this).find($('.fa')).removeClass('fa-play').addClass('fa-pause');
    }
  });

  // VOLUME
  $('#volume').on('click', function (event) {
    const video = document.getElementById('video');

  		if (video.muted == false) {
      video.muted = true;
      $(this).find($('.fa')).removeClass('fa-volume-up').addClass('fa-volume-off');
    } else {
      video.muted = false;
      $(this).find($('.fa')).removeClass('fa-volume-off').addClass('fa-volume-up');
    }
  });

  // SCROLLSPY MANUAL
  	$('#home').hover(() => {
    	$('#icon-home').addClass('icon-hover');
  }, () => {
    $('#icon-home').removeClass('icon-hover');
  });

  	$('#sobre').hover(() => {
    	$('#icon-sobre').addClass('icon-hover');
  }, () => {
    $('#icon-sobre').removeClass('icon-hover');
  });

  $('#membros').hover(() => {
    	$('#icon-membros').addClass('icon-hover');
  }, () => {
    $('#icon-membros').removeClass('icon-hover');
  });

  	$('#discografia').hover(() => {
    	$('#icon-disco').addClass('icon-hover');
  }, () => {
    $('#icon-disco').removeClass('icon-hover');
  });

  	$('#calendario').hover(() => {
    	$('#icon-calendar').addClass('icon-hover');
  }, () => {
    $('#icon-calendar').removeClass('icon-hover');
  });

  	$('#contato').hover(() => {
    	$('#icon-contato').addClass('icon-hover');
  }, () => {
    $('#icon-contato').removeClass('icon-hover');
  });

  	// MEMBROS

  $('.content-membros').hover(() => {
    	$('.typing').addClass('typewritter');
  }, () => {
    $('.typing').removeClass('typewritter');
  });

  // Membros Modal
  $('#member-1').on('click', (event) => {
    $('#nameMember').html('Brad Shultz');
    $('#img-member').attr('src', 'https://imageshack.com/i/plXPgNcMj');
    $('#job').html('Guitar');
    $('#bio').html('Bowling Green, Kentucky only has a population of 61,000. It seems like a big number, but'
+ 'when you really look at it, it’s only about 0.007% of the population in New York City. It’s a tiny fraction of' 				+ 'a percent. If you look up what the city is famous for, it’s hard to find an answer. So when brothers Matt '
+ 'and Brad Shultz of Cage The Elephant started writing their newest record, Tell Me I’m Pretty via RCA Records'
+ 'they went back to their hometown to spark some memories where everyone knows everyone– especially their band.<br>'

+ "<br>'At some point you have to get the fuck out,' guitarist Brad Shultz said. 'There wasn’t anything to"
+ 'do in Bowling Green; a lot of kids get into bands. As far as the younger generation and even generations'
+ "above us like Government Cheese and The Everly Brothers, Bowling Green was a little oasis.'");
  });

  $('#member-2').on('click', (event) => {
    $('#nameMember').html('Daniel Tichenor');
    $('#img-member').attr('src', 'https://imageshack.com/i/poCbtWFcj');
    $('#job').html('Bassplayer');
    $('#bio').html("'COME A LITTLE CLOSER,' THE FIRST SINGLE FROM Cage The Elephant’s third album, Melophobia,"
+ 'is steered by the powerful bass of Daniel Tichenor. His thick, muted picking on the song conveys all of the' 				+ 'grittiness that is found on the rest of the album, where Tichenor stands out with a variety of funky, galloping,'
+ 'and driving bass riffs that hone the melody as a way to move the song. It’s a surprising fact that Tichenor had' + 'never touched a bass before joining this band, and it’s even more surprising to find that a near death experience' + 'is what led him to join.<br><br>'

+ 'After moving to Louisville, Kentucky at age 23, Tichenor had set out to make a name for himself as a guitarist,' + 'when suddenly life took a vicious turn: A car crashed into him at 45 miles per hour while he was in a crosswalk' + 'to get home. With two shattered legs and a long road to recovery, Tichenor returned home to Bowling Green, where' + 'Matthew and Brad Shultz asked him to learn bass and join their band. Seven years later, Tichenor is supplying' + 'pocket lines on songs such as “Take It or Leave It” and “Halo” with the poise of a seasoned veteran and the' + 'gratitude of a man given a second chance.');
  });

  $('#member-3').on('click', (event) => {
    $('#nameMember').html('Jared Champion');
    $('#img-member').attr('src', 'https://imageshack.com/i/pnUy6H5yj');
    $('#job').html('Drummer');
    $('#bio').html('Does anyone know anything about this guy?<br><br>');
  });

  $('#member-4').on('click', (event) => {
    $('#nameMember').html('Matthan Minster');
    $('#img-member').attr('src', 'https://imageshack.com/i/pnyGMbHwj');
    $('#job').html('Keyboard, Guitar, Backing Vocal');
    $('#bio').html('Matthan Minster has recently moved to Portland, Oregon with his bandmates to pursue a career' + 'in music. In 2004 he completed a soundtrack for a University of Texas student film entitled The Gulf');
  });

  $('#member-5').on('click', (event) => {
    $('#nameMember').html('Matt Shultz');
    $('#img-member').attr('src', 'https://imageshack.com/i/pmE4vYu2j');
    $('#job').html('Vocal');
    $('#bio').html('Matt grew up in Bowling Green, Kentucky, with his brother, Brad, who is a year older and' + 'also in Cage the Elephant.'
+ " They came from a poor background and were sometimes teased for this. Brad was called 'Poor Boy' by "
+ ' kids at their school. Their dad, a musician, is also called Brad and their parents separated when the brothers ' + "were young. After the divorce, their mother dated Matt's football coach leading him to quit the team "
+ 'and play music in a state of rebellion;<br><br>'

+ 'Matt married his fiancé Juliette Buchs, French actress and model, at the beginning of 2014 in a civil ceremony' + 'in the Warren County Courthouse, Bowling Green. They celebrated the marriage in August of the same year with'
+ 'family and friends in Rennes, France- where Juliette is from and a later celebration in America in October');
  });

  // Disco Modal
  $('#disco-1').on('click', (event) => {
    $('#title-disco').html("Tell Me I'm Pretty");
    $('#musics').html(''
+ '		    <tr>'
+ '    		<td>Cry Baby</td>'
+ "    		<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '  		</tr>'
+ '  		<tr>'
+ '    		<td>Mess Around</td>'
+ "    		<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Sweetie Little Jean</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Too Late To Say Goodbye</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Cold Cold Cold</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Trouble</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>How Are You True</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ "        	<td>That's Right</td>"
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ "        	<td>Punchin' Bag</td>"
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Portuguese Knife Fight</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>');
    $('#link-album').attr('href', 'http://www.fnac.pt/Cage-The-Elephant-Tell-Me-I-m-Pretty-Vinil/a943009');
  });
  $('#disco-2').on('click', (event) => {
    $('#title-disco').html('Cage The Elephant');
    $('#musics').html(''
+ '		    <tr>'
+ '    		<td>In One Ear</td>'
+ "    		<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '  		</tr>'
+ '  		<tr>'
+ '    		<td>James Brown</td>'
+ "    		<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ "        	<td>Ain't No Rest For The Wicked</td>"
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Tiny Little Robots</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Lotus</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Back Against The Wall</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Drones In The Valley</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Judas</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ "        	<td>Back Stabbin' Betty</td>"
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Soil To The Sun</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '        	<td>Free Love</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>');

    $('#link-album').attr('href', 'http://www.fnac.pt/Cage-The-Elephant-Cage-The-Elephant-CD-Album/a251794');
  });
  $('#disco-3').on('click', (event) => {
    $('#title-disco').html('Melophobia');
    $('#musics').html(''
+ '		    <tr>'
+ '    		<td>Spiderhead</td>'
+ "    		<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '  		</tr>'
+ '  		<tr>'
+ '    		<td>Come a Little Closer</td>'
+ "    		<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Telescope</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ "        	<td>It's Just Forever</td>"
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Take It or Leave It</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Halo</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Black Widow</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Hypocrite</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Teeth</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Cigarrete Daydreams</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>');
    $('#link-album').attr('href', 'http://www.fnac.pt/Cage-The-Elephant-Melophobia-CD-Album/a776349');
  });
  $('#disco-4').on('click', (event) => {
    $('#title-disco').html('Thank You Happy Birthday');
    $('#musics').html(''
+ '		    <tr>'
+ '    		<td>Always Something</td>'
+ "    		<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '  		</tr>'
+ '  		<tr>'
+ '    		<td>Aberdeen</td>'
+ "    		<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Indy Kidz</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Shake Me Down</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>2024</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Sell Yourself</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Rubber Ball</td>'
+ "        	<td><i class=fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Right Before My Eyes</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Around My Head</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '      	<tr>'
+ '        	<td>Sabertooth Tiger</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '        	<td>Japanese Buffalo</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>'
+ '        	<td>Flow</td>'
+ "        	<td><i class='fa fa-download' aria-hidden='true'></i></td>"
+ '      	</tr>');
    $('#link-album').attr('href', 'http://www.fnac.pt/Cage-The-Elephant-Thank-You-Happy-Birthday-lp-imp-Vinil/a358348');
  });

  // CALENDARIO

  const show = new Array();

  show[0] = [
    '24 Sep',
    'Daytime Village',
    'Las Vegas, NV, US',
    'Las Vegas, NV',
  ];
  show[1] = [
    '02 Oct',
    'The Meadows Music and Arts Festival',
    'Queens, NY, US',
    'Queens, NY',
  ];
  show[2] = [
    '08 Oct',
    'Austin City Limits',
    'Austin, TX, US',
    'Austin, TX',
  ];
  show[3] = [
    '22 Oct',
    'Bridge School Benefit',
    'Mountain View, CA, US',
    'Mountain View, CA',
  ];
  show[4] = [
    '28 Oct',
    'Vodoo Festival 2016',
    'New Orleans, LA, US',
    'New Orleans, LA',
  ];

  function changeMusic(a, b) {
    $('.descr-show').css('display', 'none');
    $('#data-show').html(show[a][b]);
    $('#nome-show').html(show[a][b + 1]);
    $('#local-show').html(show[a][b + 2]);
    position = show[a][b + 3];
    addAddress();
    $('.descr-show').show(700);
  }

  $('#alt-dir').on('click', (event) => {
    nMusic++;
    if (nMusic > 4) { nMusic = 0; }
    changeMusic(nMusic, 0);
  });
  $('#alt-esq').on('click', (event) => {
    nMusic--;
    if (nMusic < 1) { nMusic = 4; }
    changeMusic(nMusic, 0);
  });
});
