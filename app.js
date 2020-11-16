const newName = 'DDD';

// document.getElementById('dasdasdsa');
// document.getElementsByClassName();


// document.querySelector();
// document.querySelectorAll();


function select(elm){
	return document.querySelector(elm);
}

function selectAll(elm){
	return document.querySelectorAll(elm);
}

var abcTag = document.querySelectorAll('.h2_tags');
var textWithName = {};

abcTag.forEach(function(tag){
	var dataName = tag.getAttribute('data-name');
	textWithName[dataName] = tag.innerText;
});

abcTag.forEach(function(tag){
	var dataName = tag.getAttribute('data-name');
	if(dataName == 'abc'){
		tag.innerText = textWithName.def;
	}
	if(dataName == 'def'){
		tag.innerText = textWithName.abc;
	}
})