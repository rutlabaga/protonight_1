var metaInfo = document.getElementsByClassName("rsvp-meta-info")[0];

var RSVP_TEXT = "RSVPs open: ";
var metaInfoRsvp = metaInfo.innerText;
console.log(metaInfoRsvp);

if (metaInfoRsvp.startsWith(RSVP_TEXT))
{
	var indexOfEnd = metaInfoRsvp.indexOf("AM") != -1 ? metaInfoRsvp.indexOf("AM") : metaInfoRsvp.indexOf("PM");
	var dateString = metaInfoRsvp.slice(RSVP_TEXT.length, indexOfEnd+2);

	var month = dateString.slice(0, 3);
	var day = dateString.slice(4, 6);

	var time = dateString.slice(dateString.indexOf(" at ") + 4, indexOfEnd);

	console.log(dateString);
	console.log('month: ' + month);
	console.log('day: ' + day);
	console.log('time: ' + time);

	
}
