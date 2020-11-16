var btn_button = document.querySelector('.btn-show-hide');

btn_button.onclick = function(e){

	var d_block = document.querySelector('.title');

	if(this.classList.contains('showed')){
		//xử lý hidden
		d_block.classList.add('d-none');
		this.innerText = "SHOW";
		this.classList.remove('showed');
	}else{
		d_block.classList.remove('d-none');
		this.innerText = "HIDE";
		this.classList.add('showed');
	}
}
var text_input = document.querySelector('.input_change');
var title_show = document.querySelector('.title');
text_input.onblur = function(e){
    if(this.value == 'show'){
        title_show.classList.remove('d-none');
    }
    else if(this.value == 'hide'){
        title_show.classList.add('d-none');
    }
    this.value = '';
    this.focus();
}