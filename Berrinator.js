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

var BerryRatios = [
	0.1,
	0.125,
	0.167,
	0.2,
	0.25,
	0.286,
	0.333,
	0.4,
	0.5,
	0.571,
	0.667,
	0.8,
	1,
	1.25,
	1.5,
	1.75,
	2,
	2.5,
	3,
	3.5,
	4,
	4.5,
	5,
	6,
	8,
	10
]

var BerrinizeImage = [
	new BerryImage(0.1, chrome.extension.getURL("/berryPics/0.100/0.100_Berry-Eggen.jpg")),

	new BerryImage(0.125, chrome.extension.getURL("/berryPics/0.125/0.125_Berry-Eggen.jpg")),

	new BerryImage(0.167, chrome.extension.getURL("/berryPics/0.167/0.167_Berry-Eggen.jpg")),

	new BerryImage(0.2, chrome.extension.getURL("/berryPics/0.200/0.200_Berry-Eggen.jpg")),

	new BerryImage(0.25, chrome.extension.getURL("/berryPics/0.250/0.250_Berry-Eggen.jpg")),

	new BerryImage(0.286, chrome.extension.getURL("/berryPics/0.286/0.286_Berry-Eggen.jpg")),

	new BerryImage(0.333, chrome.extension.getURL("/berryPics/0.333/0.333_Berry-Eggen.jpg")),
	new BerryImage(0.333, chrome.extension.getURL("/berryPics/0.333/0.333_shapeimage_3_copy.png")),

	new BerryImage(0.4, chrome.extension.getURL("/berryPics/0.400/0.400_Berry-Eggen.jpg")),
	new BerryImage(0.4, chrome.extension.getURL("/berryPics/0.400/0.400_shapeimage_3_copy.png")),

	new BerryImage(0.5, chrome.extension.getURL("/berryPics/0.500/0.500_Berry-Eggen.jpg")),
	new BerryImage(0.5, chrome.extension.getURL("/berryPics/0.500/0.500_shapeimage_3_copy.png")),
	new BerryImage(0.5, chrome.extension.getURL("/berryPics/0.500/0.500_4662436055_385433a1d4_o.jpg")),
	new BerryImage(0.5, chrome.extension.getURL("/berryPics/0.500/0.500_4663056474_4d5c267d2e_o2.jpg")),

	new BerryImage(0.571, chrome.extension.getURL("/berryPics/0.571/0.571_Berry-Eggen.jpg")),
	new BerryImage(0.571, chrome.extension.getURL("/berryPics/0.571/0.571_shapeimage_3_copy.png")),
	new BerryImage(0.571, chrome.extension.getURL("/berryPics/0.571/0.571_4662436055_385433a1d4_o.jpg")),
	new BerryImage(0.571, chrome.extension.getURL("/berryPics/0.571/0.571_4663056474_4d5c267d2e_o2.jpg")),

	new BerryImage(0.667, chrome.extension.getURL("/berryPics/0.667/0.667_Berry-Eggen.jpg")),
	new BerryImage(0.667, chrome.extension.getURL("/berryPics/0.667/0.667_shapeimage_3_copy.png")),
	new BerryImage(0.667, chrome.extension.getURL("/berryPics/0.667/0.667_4662436055_385433a1d4_o.jpg")),
	new BerryImage(0.667, chrome.extension.getURL("/berryPics/0.667/0.667_4663056474_4d5c267d2e_o2.jpg")),

	new BerryImage(0.8, chrome.extension.getURL("/berryPics/0.800/0.800_Berry-Eggen.jpg")),
	new BerryImage(0.8, chrome.extension.getURL("/berryPics/0.800/0.800_shapeimage_3_copy.png")),
	new BerryImage(0.8, chrome.extension.getURL("/berryPics/0.800/0.800_4662440051_4e30eb9b66_o.jpg")),
	new BerryImage(0.8, chrome.extension.getURL("/berryPics/0.800/0.800_4663056474_4d5c267d2e_o2.jpg")),

	new BerryImage(1, chrome.extension.getURL("/berryPics/1/1_Berry_Eggen.jpg")),
	new BerryImage(1, chrome.extension.getURL("/berryPics/1/1_Berry-Eggen.jpg")),
	new BerryImage(1, chrome.extension.getURL("/berryPics/1/1_4663056474_4d5c267d2e_o_copy.jpg")),
	new BerryImage(1, chrome.extension.getURL("/berryPics/1/1_berry_eggen_p2.jpg")),
	new BerryImage(1, chrome.extension.getURL("/berryPics/1/1_shapeimage_3_copy.png")),

	new BerryImage(1.25, chrome.extension.getURL("/berryPics/1.25/1.25_berry_eggen_p2.jpg")),
	new BerryImage(1.25, chrome.extension.getURL("/berryPics/1.25/1.25_Berry-Eggen.jpg")),
	new BerryImage(1.25, chrome.extension.getURL("/berryPics/1.25/1.25_4663056474_4d5c267d2e_o2.jpg")),

	new BerryImage(1.50, chrome.extension.getURL("/berryPics/1.50/1.50_Berry_Eggen.jpg")),
	new BerryImage(1.50, chrome.extension.getURL("/berryPics/1.50/1.50_Berry-Eggen.jpg")),
	new BerryImage(1.50, chrome.extension.getURL("/berryPics/1.50/1.50_616045_159797157495472_1472987606_o.jpg")),
	new BerryImage(1.50, chrome.extension.getURL("/berryPics/1.50/1.50_4662440051_4e30eb9b66_o.jpg")),
	new BerryImage(1.50, chrome.extension.getURL("/berryPics/1.50/1.50_4663056474_4d5c267d2e_o2.jpg")),
	new BerryImage(1.50, chrome.extension.getURL("/berryPics/1.50/1.50_berry_eggen_p2.jpg")),
	new BerryImage(1.50, chrome.extension.getURL("/berryPics/1.50/1.50_defense_05.jpg")),

	new BerryImage(1.75, chrome.extension.getURL("/berryPics/1.75/1.75_Berry_Eggen.jpg")),
	new BerryImage(1.75, chrome.extension.getURL("/berryPics/1.75/1.75_Berry-Eggen.jpg")),
	new BerryImage(1.75, chrome.extension.getURL("/berryPics/1.75/1.75_616045_159797157495472_1472987606_o.jpg")),
	new BerryImage(1.75, chrome.extension.getURL("/berryPics/1.75/1.75_4662440051_4e30eb9b66_o.jpg")),
	new BerryImage(1.75, chrome.extension.getURL("/berryPics/1.75/1.75_4663056474_4d5c267d2e_o2.jpg")),
	new BerryImage(1.75, chrome.extension.getURL("/berryPics/1.75/1.75_defense_05.jpg")),

	new BerryImage(2, chrome.extension.getURL("/berryPics/2/2_4662440051_4e30eb9b66_o.jpg")),
	new BerryImage(2, chrome.extension.getURL("/berryPics/2/2_Berry_Eggen.jpg")),
	new BerryImage(2, chrome.extension.getURL("/berryPics/2/2_Berry-Eggen.jpg")),
	new BerryImage(2, chrome.extension.getURL("/berryPics/2/2_defense_05.jpg")),

	new BerryImage(2.5, chrome.extension.getURL("/berryPics/2.5/2.5_4662440051_4e30eb9b66_o.jpg")),
	new BerryImage(2.5, chrome.extension.getURL("/berryPics/2.5/2.5_Berry_Eggen.jpg")),
	new BerryImage(2.5, chrome.extension.getURL("/berryPics/2.5/2.5_defense_05.jpg")),

	new BerryImage(3, chrome.extension.getURL("/berryPics/3/3_Berry_Eggen.jpg")),
	new BerryImage(3, chrome.extension.getURL("/berryPics/3/3_defense_05.jpg")),
	new BerryImage(3, chrome.extension.getURL("/berryPics/3/3_616045_159797157495472_1472987606_o.jpg")),

	new BerryImage(3.5, chrome.extension.getURL("/berryPics/3.5/3.5_Berry_Eggen.jpg")),
	new BerryImage(3.5, chrome.extension.getURL("/berryPics/3.5/3.5_defense_05.jpg")),

	new BerryImage(4, chrome.extension.getURL("/berryPics/4/4_Berry_Eggen.jpg")),
	new BerryImage(4, chrome.extension.getURL("/berryPics/4/4_Berry-Eggen.jpg")),
	new BerryImage(4, chrome.extension.getURL("/berryPics/4/4_defense_05.jpg")),

	new BerryImage(4.5, chrome.extension.getURL("/berryPics/4.5/4.5_Berry_Eggen.jpg")),
	new BerryImage(4.5, chrome.extension.getURL("/berryPics/4.5/4.5_defense_05.jpg")),

	new BerryImage(5, chrome.extension.getURL("/berryPics/5/5_Berry_Eggen.jpg")),
	new BerryImage(5, chrome.extension.getURL("/berryPics/5/5_Berry-Eggen.jpg")),
	new BerryImage(5, chrome.extension.getURL("/berryPics/5/5_defense_05.jpg")),

	new BerryImage(6, chrome.extension.getURL("/berryPics/6/6_Berry_Eggen.jpg")),
	new BerryImage(6, chrome.extension.getURL("/berryPics/6/6_Berry-Eggen.jpg")),
	new BerryImage(6, chrome.extension.getURL("/berryPics/6/6_defense_05.jpg")),

	new BerryImage(8, chrome.extension.getURL("/berryPics/8/8_Berry_Eggen.jpg")),
	new BerryImage(8, chrome.extension.getURL("/berryPics/8/8_Berry-Eggen.jpg")),

	new BerryImage(10, chrome.extension.getURL("/berryPics/10/10_Berry_Eggen.jpg")),
	new BerryImage(10, chrome.extension.getURL("/berryPics/10/10_Berry-Eggen.jpg"))
]

function pickBerry(ratio)
{
	for (var i = BerryRatios.length - 1; i >= 0; i--) {
		if(ratio >= BerryRatios[i]) {
			var sizedBerries = BerrinizeImage.filter(function(obj){
				return obj.ratio == BerryRatios[i];
			});

			var chosenBerry = sizedBerries[Randomize(sizedBerries)];
			return chosenBerry;
		}
	};
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


function UnleashTheBerry() {
	var images = document.getElementsByTagName('img');
	length = images.length;

	for (var i = 0; i < length; i++) {

		if(berryTime() && images[i].getAttribute('Berrinated') !== 'true')
		{
			var orgHeight = images[i].height;
			var orgWidth = images[i].width;

			var ratio = orgWidth / orgHeight;

			if(ratio && (orgHeight > 22 && orgWidth > 22))
			{
				var img = pickBerry(ratio);

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

}


$(document).ajaxComplete(function(){ console.log('vlam!')});

(function(document) {
	chrome.runtime.sendMessage({method: "getBerryAmount"}, function(response) {

	  	BerryAmount = parseInt(response.status);

		UnleashTheBerry();


});
})(document);

		
	


