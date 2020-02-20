let icon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
		 viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">\
		<style type="text/css">\
			.st0{fill:#4f8fd8;}\
			.st1{fill:#FFFFFF;}</style>\
		<g id="Layer_2_1_">\
			<circle class="st0" cx="513.6" cy="512.3" r="511.3"/>\
				<rect x="274.6" y="440.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -333.4777 416.8841)" class="st1" width="123.7" height="341.5"/>\
				<rect x="274.1" y="433.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -175.4795 571.0907)" class="st1" width="655.1" height="127.3"/></g></svg>'


let delicon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
		 viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">\
		<circle class="st3" fill="#E24444" cx="250" cy="250" r="250"/>\
		<path fill="#FFFFFF" d="M393.7,337.6c13.6,13.6,13.6,35.8,0,49.4l-6.7,6.7c-13.6,13.7-35.8,13.7-49.4,0L250,306.1l-87.6,87.6\
			c-13.6,13.7-35.8,13.7-49.4,0l-6.7-6.7c-13.6-13.6-13.6-35.8,0-49.4l87.6-87.6l-87.6-87.6c-13.6-13.7-13.6-35.8,0-49.4l6.7-6.7\
			c13.6-13.6,35.8-13.6,49.4,0l87.6,87.6l87.6-87.6c13.6-13.6,35.8-13.6,49.4,0l6.7,6.7c13.6,13.6,13.6,35.8,0,49.4L306.1,250\
			L393.7,337.6z"/></svg>'


function addButtons() {
	const comments = document.querySelectorAll('div:not(.cremleBot).reply_link_wrap');

	comments.forEach(function(button) {
		button.className += ' cremleBot';
		const emoji = document.createElement('div');
		const conteiner_emoji = document.createElement('div');
		const but_maket = document.createElement('img');

		but_maket.src = 'https://i.imgur.com/qkwQqOe.png'
		// emoji.innerHTML = "👹";
		// emoji.src = 'https://i.imgur.com/qkwQqOe.png';
		conteiner_emoji.className = 'emoji_conteiner';
		emoji.className = 'emoji_button_donos';
		but_maket.className = 'emoji_button_donos';
		but_maket.style.opacity = '0';
		but_maket.title = 'Внести в базу бяк этого юзера'

		const status = document.createElement('div');

		status.innerText = 0;
		status.className = 'status_report';
		// console.log(button)

		conteiner_emoji.appendChild(emoji);
		conteiner_emoji.appendChild(but_maket);
		conteiner_emoji.appendChild(status);
		button.after(conteiner_emoji);

	});

	const svgimg = document.querySelectorAll("div.emoji_button_donos"); // находим все элементы с классом happyface
	svgimg.forEach(function(btn){
		btn.innerHTML = icon;
	}); 
	get_colors();	
	get_report();

	// console.log(Object.keys(localStorage))

}

function addSetting() {
	const setting_conteiner = document.querySelector('div.head_nav_item.fl_l.head_nav_btns');
	const setting_main = document.createElement('div');
	const setting = document.createElement('img');

	// setting.src = 'https://i.imgur.com/3h636wU.png';
	setting.src = 'https://i.imgur.com/KD3TUUE.png';
	setting.className = 'setting_donos';
	setting_main.className = 'head_nav_item fl_l setting_donos';
	setting_conteiner.after(setting_main);
	setting_main.appendChild(setting)
	setting_main.insertAdjacentHTML('beforeBegin',	
		'<div class="setting"><div class="menu_setting">\
			<ul>\
				<b><li>Настройки</li></b>\
				<li>Цвет</li>\
			</ul><div class="menu_cont"><div class="content_menu"><li>Цвет кнопошки №1</li><input type="range" id="r1" min="5" max="500"></div><div class="content_menu"><li>Цвет кнопошки №2</li><input type="range" id="r3" min="5" max="500"></div>\
			<div class="save_button_donos"><a class="button_save">Сохранить</a></div>\
			</div></div>'); 
	const set = document.querySelector('.setting');
	setting_main.appendChild(set)
}

window.addEventListener('click', function(event) {
	const save_setting = document.querySelector('.head_nav_item.fl_l.setting_donos');
	const img_save_setting = document.querySelector('img.setting_donos');
	const menu_cont = document.querySelector('.setting');

	var a = document.getElementById('r2');


	if (event.target.className === 'emoji_button_donos'){
		var name = event.path[3].children;
		const status = event.path[1].children[2]
		var i = parseInt(status.innerText);

		i += 1;
		status.innerText = i;
		// console.log(event.path[1].children[2].innerText)
		// save_report(event.path)
		event.path[0].className = 'delemoji_button_donos';
		event.path[1].firstChild.className = 'delemoji_button_donos';
		// console.log(event.path[1].firstChild.innerHTML)

		event.path[1].firstChild.innerHTML = delicon
		event.path[0].title = 'Убрать юзера из базы бяк'

	}
	else if (event.target.className === 'delemoji_button_donos'){
		var name = event.path[3].children;
		const status = event.path[1].children[2]
		var i = parseInt(status.innerText);

		i -= 1;
		status.innerText = i;
		// console.log(event.path[1].children[2].innerText)
		// save_report(event.path)
		event.path[0].className = 'emoji_button_donos';
		event.path[1].firstChild.className = 'emoji_button_donos';
		// console.log(event.path[1].firstChild.innerHTML)

		event.path[1].firstChild.innerHTML = icon
		event.path[0].title = 'Внести в базу бяк этого юзера'
	}
	else if (event.target.className === 'head_nav_item fl_l setting_donos' || event.target.className === 'setting_donos'){
		if (save_setting.className === 'head_nav_item fl_l setting_donos' && img_save_setting.className === 'setting_donos'){
			save_setting.className += ' save_setting active';
			img_save_setting.className += ' save_setting active';
			img_save_setting.src = 'https://i.imgur.com/YTmQmky.png';
			menu_cont.style.display = 'block';
		}
	}
	else if (event.target.className === 'head_nav_item fl_l setting_donos save_setting active' || event.target.className === 'setting_donos save_setting active'){
		if (save_setting.className === 'head_nav_item fl_l setting_donos save_setting active' && img_save_setting.className === 'setting_donos save_setting active'){
			save_setting.className = 'head_nav_item fl_l setting_donos';
			img_save_setting.className = 'setting_donos';
			img_save_setting.src = 'https://i.imgur.com/KD3TUUE.png';
			menu_cont.style.display = 'none';
		}
	}
	else if (event.target.className === 'left_label inl_bl' || event.target.className === 'top_home_link fl_l' || event.target.className === 'people_cell_img'){
		window.setTimeout(function () {
			addButtons();
		}, 3000)
	}
	else if (event.target.className === 'button_save' || event.target.className === 'save_button_donos'){
		const icon_donos = document.querySelector('.st0')
		const icon_podnos = document.querySelector('.st3')	

		if (icon_donos != null || icon_podnos != null){
			if (icon_donos != null && icon_podnos == null){
				console.log(localStorage.setItem("colors_donos", icon_donos.style.fill))
			}
			else if (icon_podnos != null && icon_donos == null){
				console.log(localStorage.setItem("colors_podnos", icon_podnos.style.fill))
			}
			else {
				console.log(localStorage.setItem("colors_donos", icon_donos.style.fill))
				console.log(localStorage.setItem("colors_podnos", icon_podnos.style.fill))

			}
		}
	}
	get_colors();

})

function local_save(donos, podnos) {	// Запись в базу цвета

	const const_color = donos.querySelector('.st0').style.fill;

	console.log(const_color)
	
}

window.addEventListener('input', function (event) {	// Настройка цвета
	if (event.target.id === 'r1'){
		btn_func_r1();
	}
	else if (event.target.id === 'r3'){
		btn_func_r3();
	}
});

function btn_func_r1() {	// Функция отвечающая за настройку цветов
	var rng=document.getElementById('r1');
    const div = document.querySelectorAll('.st0');

	div.forEach(function(button) {
		button.style.fill ='#'+rng.value;
	});
    // const const_color = div[0].
	// localStorage.setItem("colors_donos", const_color);

    // local_save(div[0]);
}

function btn_func_r3() {	// Функция отвечающая за настройку цветов
	var rng=document.getElementById('r3');
    const div = document.querySelectorAll('.st3');

	div.forEach(function(button) {
		button.style.fill ='#'+rng.value;
	});
	// localStorage.setItem("colors_donos", const_color);
    // local_save(div[0]);
}

function get_colors() {	// Установка цвета из базы
	var localValue = localStorage.getItem('colors_donos');	// Переменная, которая берёт из базы цвета

    const donos = document.querySelectorAll('.st0');

	donos.forEach(function(button) {
		button.style.fill=localValue;
	});

	var localValue = localStorage.getItem('colors_podnos');	// Переменная, которая берёт из базы цвета

    const podnos = document.querySelectorAll('.st3');

	podnos.forEach(function(button) {
		button.style.fill=localValue;
	});
}

function save_report(event) {
	var id = event[3].children[1].children[0].dataset.fromId;
	var name = event[3].querySelector('.author').innerText;
	var report = event[1].querySelector('.status_report').innerText;

	let rep = [];

	if (id && name && report){
		rep = [id, name, report]
	}

	localStorage.setItem(id, rep);
	a = localStorage.getItem(id).split(',')
	// console.log(a[0]);
	// console.log(rep)
	// console.log(localStorage.clear(), localStorage.length)
}
function get_report() {
	const main = document.querySelectorAll('div.reply_content')

	for (var i = 0; i <= (main.length-1); i++) {
		// console.log(i)
		id = main[i].children[1].children[0].dataset.fromId
		var localValue = localStorage.getItem(id);

		if (localValue != null){
			user_id = localValue.split(',')[0];
			user_name = localValue.split(',')[1];
			score = localValue.split(',')[2];
			if (id === user_id){
				const pack = main[i].children[3].children[3].lastElementChild
				pack.innerText = score;
			}
			else{ console.log('Данный ID отсутствует в базе') }
		}
		// else {console.log('В базе пусто')}
	}
}

window.setTimeout(function () {
	addButtons();
	addSetting();
}, 300)

// setInterval(function(){ 
//     console.log('Прошло 5 секунд и я сейчас обновлюсь');
//     addButtons();
//     console.log('Обновление прошло')
// }, 5000);