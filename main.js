var elButton = document.querySelector('#toggler');
var elMenu = document.querySelector('.list2');
       elButton.addEventListener('click', function(evt){
	evt.preventDefault();
	elMenu.classList.toggle('show');
});

