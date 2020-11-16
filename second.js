function select(elm){
	return document.querySelector(elm);
}

function selectAll(elm){
	return document.querySelectorAll(elm);
}

var event = [
	'click',
	'mouseup',
	'mousedown',
	'mousemove',
	'keyup',
	'keydown',
	'keypress',
	'change',
	'blur',
	'focus',
];


// Cách 1

//thêm lắng nghe một sự kiện click
// btnClick.onclick = function(event){
// 	console.log('btn click');
// 	console.log(event);
// 	console.log(this)
// }

//hủy bỏ lắng nghe sự kiện
// select('.btn-show-hide').onclick = null;

//cách 2
//thêm sự kiện
// select('.btn-cancel-click').addEventListener('click', offListenClick)
//khai báo action xử lý sự kiện
// function offListenClick(){
// 	select('.btn-show-hide').onclick = null;
// }
//hủy bỏ sự kiện
// select('.btn-cancel-click').removeEventListener('click', offListenClick)