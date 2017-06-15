var createTwit = document.getElementById('add-info-button');
var modal = document.getElementsByClassName('hidden');
var closeTwit = document.querySelector('button.modal-close-button');
var cancelTwit = document.querySelector('button.modal-cancel-button');
var twitButton = document.querySelector('button.modal-accept-button');

createTwit.addEventListener('click', function() {
	for (var i = 0; i < modal.length; i+=1)
	{
		modal[i].style.display='block';
	
	}
	document.getElementById('twit-text-input').value = '';
	document.getElementById('twit-attribution-input').value = '';
});

closeTwit.addEventListener('click', function() {
	for (var j = 0; j < modal.length; j+=1)
	{
		modal[j].style.display='none';

	}
	document.getElementById('twit-text-input').value = '';
        document.getElementById('twit-attribution-input').value = '';
});

cancelTwit.addEventListener('click', function() {
	for (var k = 0; k < modal.length; k+=1)
	{
		modal[k].style.display='none';
	}
	document.getElementById('twit-text-input').value = '';
        document.getElementById('twit-attribution-input').value = '';
});

twitButton.addEventListener('click', function() {
	for (var l = 0; l < modal.length; l+=1)
	{
		modal[l].style.display='none';
	 
	}
	document.getElementById('twit-text-input').value = '';
        document.getElementById('twit-attribution-input').value = '';
});

