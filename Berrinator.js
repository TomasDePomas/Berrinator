/*

  Berrie Eggeninator

  You seem to need more Berry Eggen in your life, we can help you with that.

  By:  T&T: Snor en Muts

  ####################################################################################
 
*/
var BerryAmount;

function  BerryImage (ratio, imageUrl){
	this.ratio = ratio;
	this.imageurl = imageUrl;
}
function  BerryClass (classtag, nchild, wdomain){
	this.classtag = classtag;
	this.nchild = nchild;
	this.wdomain = wdomain;
}

var getBerryWithIt = {
	init: function(BerrinizeImage){
		this.BerrinizeImage = BerrinizeImage;
	},
	horizontal: function(){
		return this.BerrinizeImage.filter(function(BerrinizeImage){
			return BerrinizeImage.ratio === 'horizontal';
		});
	},
	vertical: function(){
		return this.BerrinizeImage.filter(function(BerrinizeImage){
			return BerrinizeImage.ratio === 'vertical';
		});
	},
	square: function(){
		return this.BerrinizeImage.filter(function(BerrinizeImage){
			return BerrinizeImage.ratio === 'square';
		});
	}

}
var BerryClasses = [
	new BerryClass('_52zl', false, 'facebook'),
	new BerryClass('fwb', false, 'facebook'),
	new BerryClass('fwb', 0, 'facebook'),
	new BerryClass('profileLink', false, 'facebook'),

	new BerryClass('actorDescription actorName', 0, 'facebook'),
	new BerryClass('titlebarText', false, 'facebook'),
	new BerryClass('UFICommentActorName', false, 'facebook'),
	new BerryClass('fbRemindersTitle', 0, 'facebook'),
	

]

var BerrinizeImage = [
	new BerryImage("vertical", chrome.extension.getURL("/Berresources/berrie1.jpg")),
	new BerryImage("square", chrome.extension.getURL("/Berresources/berrie2.jpg")),
	new BerryImage("vertical", chrome.extension.getURL("/Berresources/berrie3.jpg")),
	new BerryImage("horizontal", chrome.extension.getURL("/Berresources/berrie4.jpg")),

	new BerryImage("square", "https://lh6.googleusercontent.com/-reG-zV02lS4/AAAAAAAAAAI/AAAAAAAAAPA/WvmTADt8oP4/photo.jpg"),
	new BerryImage("vertical", "http://www.tue.nl/uploads/tx_dreep/19860175.jpg"),
	new BerryImage("horizontal", "http://web.tue.nl/cursor/bastiaan/jaargang45/cursor27/rubrieken/images/berry%20eggen%20p2.jpg"),
]

function imageRatio(image)
{
	var proportion = image.height / image.width;
	if(proportion > 1) {
		return "vertical";
	} else if(proportion === 1) {
		return "square";
	} else if(proportion < 1 ) {
		return "horizontal";
	}
	return false;
}

function Randomize (array){
	return Math.floor(Math.random() * array.length);
}

function berryTime(){
	dieroll = Math.floor(Math.random() * 100);

	if(dieroll <= BerryAmount)
	{
		return true;
	}
	return false;
}


function BerrinizeText (classtag, childn, wdomain) {
	taggs = document.getElementsByClassName(classtag);
	webbits = document.URL.split('.');
	
	if(webbits.indexOf(wdomain) === -1)
	{
		return;
	}

	for (var i = taggs.length - 1; i >= 0; i--) {
		if(berryTime() && typeof taggs[i] !== 'undefined' && taggs[i].getAttribute('Berrinated') !== 'true')
		{			

			if(childn !== false && taggs[i].childNodes.length !== 0)
			{
				taggs[i].childNodes[childn].innerHTML = "Berry Eggen";	
			}
			else
			{
				taggs[i].innerHTML = "Berry Eggen";
			}
			taggs[i].setAttribute('Berrinated', 'true');
		}
	};
}

(function(document) {
	chrome.runtime.sendMessage({method: "getBerryAmount"}, function(response) {

	  	BerryAmount = parseInt(response.status);
		getBerryWithIt.init(BerrinizeImage);
		var images = document.getElementsByTagName('img');
		length = images.length;

		for (var i = 0; i < length; i++) {

			if(berryTime() && images[i].getAttribute('Berrinated') !== 'true')
			{
				var orgHeight = images[i].height;
				var orgWidth = images[i].width;

				var ratio = imageRatio(images[i]);

				if(ratio && (orgHeight > 22 && orgWidth > 22))
				{
					var number = Randomize(getBerryWithIt[ratio]());
					var img = getBerryWithIt[ratio]()[number];

					images[i].src = img.imageurl;
					images[i].height = orgHeight;
					images[i].width = orgWidth;
					images[i].setAttribute('Berrinated', 'true');
				}
			}
		}


		for (var i = BerryClasses.length - 1; i >= 0; i--) {
			BerrinizeText(BerryClasses[i].classtag, BerryClasses[i].nchild, BerryClasses[i].wdomain);
		};




	});
})(document);


