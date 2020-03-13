function addSetting() {
	const setting_conteiner = document.querySelector('div.head_nav_item.fl_l.head_nav_btns');
	const setting_main = document.createElement('div');
	const setting = document.createElement('img');

	// setting.src = 'https://i.imgur.com/3h636wU.png';
	setting.src = 'https://i.imgur.com/KD3TUUE.png';
	setting.className = 'setting_donos';
	setting_main.className = 'head_nav_item fl_l top_nav_btn setting_donos';
	setting_conteiner.after(setting_main);
	setting_main.appendChild(setting)
	setting_main.insertAdjacentHTML('beforeBegin',	
		'<div class="setting"><div class="menu_setting">\
			<ul>\
				<b><li>Настройки</li></b>\
				<li>Цвет</li>\
			</ul><div class="menu_cont"><div class="content_menu"><div class="color_block__"></div><div class="color_block__ close"></div><div class="color_block__ close"></div></div>\
			<div class="save_button_donos"><a class="button_save">Сохранить</a></div>\
		</div>'); 
	const set = document.querySelector('.setting');
	setting_main.appendChild(set)


	const blocks = document.querySelectorAll('.color_block__');
	blocks.forEach(function(block) {
		var rgb = Math.random() * 255;
		block.style.backgroundColor = 'rgb('+rrandom(0, 255)+','+rrandom(0, 255)+','+rrandom(0, 255)+')';
	})
}

window.addEventListener('click', function(event) {
	const save_setting = document.querySelector('.head_nav_item.fl_l.setting_donos');
	const img_save_setting = document.querySelector('img.setting_donos');
	const menu_cont = document.querySelector('.setting');
	const block = document.querySelector('.conteiner_close');

	var a = document.getElementById('r2');
	console.log(event.target.className)
	if (event.target.className === 'head_nav_item fl_l top_nav_btn setting_donos' || event.target.className === 'setting_donos'){
		if (save_setting.className === 'head_nav_item fl_l top_nav_btn setting_donos' && img_save_setting.className === 'setting_donos'){
			save_setting.className += ' save_setting active';
			img_save_setting.className += ' save_setting active';
			img_save_setting.src = 'https://i.imgur.com/YTmQmky.png';
			menu_cont.style.display = 'block';
		}
	}
	else if (event.target.className === '' || event.target.className === 'menu_cont' || event.target.className === 'menu_setting' || event.target.className === 'color_block__' || event.target.className === 'color_block__ close'){
		if (event.target.className === 'color_block__ close'){
			close_block()
			// alert('закрыто')
		}
	}
	else {
		if (save_setting.className === 'head_nav_item fl_l top_nav_btn setting_donos save_setting active' && img_save_setting.className === 'setting_donos save_setting active'){
			save_setting.className = 'head_nav_item fl_l top_nav_btn setting_donos';
			img_save_setting.className = 'setting_donos';
			img_save_setting.src = 'https://i.imgur.com/KD3TUUE.png';
			menu_cont.style.display = 'none';
		}
	}

	if (event.target.className === 'block_but'){
		block.remove()
	}
})


function close_block() {

	const body = document.querySelector('body');

	body.insertAdjacentHTML('afterBegin',	
	'<div class="conteiner_close">\
		<div class="close_block">\
			<div class="cblock">\
				<h3>Данный цвет не доступен</h3>\
				<div class="block_but">Закрыть</div>\
			</div>\
		</div>\
	</div>'); 
	
}
				// <img src="https://i.imgur.com/RANRcNc.png"/>\
addSetting()


function rrandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}