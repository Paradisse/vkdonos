// ==============================================[ИКОНКИ ДЛЯ КНОПОК]==============================================================================================================
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

let new_emoji_icon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
	 viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve">\
	<circle fill="none" stroke="#8b8096" stroke-width="14" stroke-miterlimit="10" cx="125" cy="125" r="116.1"/><g>\
		<path fill="#8b8096" d="M104.6,109c-4,5.9-10.7,9.8-18.4,9.8C74,118.7,64,108.8,64,96.6c0-7.7,3.9-14.4,9.8-18.4L104.6,109z"/>\
		<g><path fill="#8b8096" d="M103.3,108.5c-7.9,11-23.1,12-32.4,2.2c-8.9-9.4-6.2-24.4,3.8-31.7c-0.7,0-1.4,0.1-2.1,0.1\
				c10.2,10.2,20.5,20.5,30.7,30.7c1,1,3.4-0.5,2.2-1.7C95.4,97.9,85.2,87.6,74.9,77.4c-0.5-0.5-1.6-0.2-2.1,0.1\
				c-11.4,8.3-14.2,25.5-3.4,35.6c10.8,10.2,27.7,8.3,36.4-3.7C106.9,107.9,104.2,107.3,103.3,108.5z"/></g></g>\
	<g><path fill="#8b8096" d="M174.6,78.2c5.9,4,9.8,10.7,9.8,18.4c0,12.2-9.9,22.1-22.1,22.1c-7.7,0-14.4-3.9-18.4-9.8L174.6,78.2z"/><g>\
			<path fill="#8b8096" d="M173.2,78.8c12.5,9,12.9,27.7-0.3,36.4c-7.6,5-17.3,3-23.9-2.5c-0.7-0.6-4-3.5-3.4-4.1\
				c0.7-0.7,1.3-1.3,2-2c9.5-9.5,19-19,28.5-28.5c0.8-0.8-2.1-0.5-2.7,0C163,88.5,152.8,98.8,142.5,109c-0.2,0.2-0.1,0.4,0,0.5\
				c8.2,11.3,23.6,12.8,34.6,4.7c12.4-9.2,10.8-27.8-1.1-36.5C175.2,77.1,172.6,78.3,173.2,78.8z"/></g></g>\
	<g><g><path fill="#8b8096" d="M76.2,168.1c27.1,25.8,70.5,26.3,97.6,0c6.9-6.8-3.7-17.4-10.6-10.6c-21.2,20.6-55.1,20.2-76.4,0\
				C79.8,150.8,69.2,161.4,76.2,168.1L76.2,168.1z"/></g></g></svg>'


// ====================================[ДОБАВЛЕНИЕ НОВЫХ КНОПОК К ВИДИМЫМ КОММЕНТАРИЯМ]================================================================================================================
function addButtons() {
	const comments = document.querySelectorAll('div:not(.cremleBot).reply_link_wrap');
	if (comments.length == 0){
		// console.log('Добавлено 0 новых кнопок');
	}
	else {
		comments.forEach(function(button) {
			button.className += ' cremleBot';
			const emoji = document.createElement('div');
			const conteiner_emoji = document.createElement('div');
			const but_maket = document.createElement('img');

			// but_maket.src = 'https://i.imgur.com/qkwQqOe.png'
			conteiner_emoji.className = 'emoji_conteiner';
			emoji.className = 'emoji_button_donos';
			but_maket.className = 'emoji_button_donos';
			but_maket.style.opacity = '0';
			but_maket.title = 'Внести в базу бяк этого юзера'

			const status = document.createElement('div');

			status.innerText = 0;
			status.className = 'status_report';

			conteiner_emoji.appendChild(emoji);
			conteiner_emoji.appendChild(but_maket);
			conteiner_emoji.appendChild(status);
			button.after(conteiner_emoji);

		});

		const svgimg = document.querySelectorAll("div.emoji_button_donos"); // находим все элементы с классом happyface
		svgimg.forEach(function(btn){
			btn.innerHTML = icon;
		}); 
		get_colors(); // добавление кастомизации(цвет) к кнопка
		get_report(); // добавление рейтинга
		// console.log('Добавлено',comments.length,'новых кнопок')
	}
}

// ====================================[НАСТРОЙКИ ДЛЯ ЦВЕТОВ (верстка)]========================================================================================================================
function addSetting() {
	const setting_conteiner = document.querySelector('div.head_nav_item.fl_l.head_nav_btns');
	const setting_main = document.createElement('div');
	const setting = document.createElement('img');

	// setting.src = 'https://i.imgur.com/3h636wU.png';
	setting.src = 'https://i.imgur.com/KD3TUUE.png';
	setting.className = 'setting_donos s_btn';
	setting_main.className = 'head_nav_item fl_l top_nav_btn setting_donos';
	setting_conteiner.after(setting_main);
	setting_main.appendChild(setting)
	setting_main.insertAdjacentHTML('beforeBegin',	
		`<div id="audio_layer_tt" class="setting page_block"><div class="menu_setting audio_row__title">
			<ul>
				<li class="big_text">Настройки / <span>Цвет</span></li>
			</ul><div class="menu_cont audio_row__title"><div class="content_menu"><li>Цвет кнопошки №1</li><input type="range" id="r1" min="5" max="500"></div><div class="content_menu"><li>Цвет кнопошки №2</li><input type="range" id="r3" min="5" max="500"></div>
			<div class="save_button_donos feedback_row"><a class="button_save">Сохранить</a></div>
			</div></div>`); 
	const set = document.querySelector('.setting');
	setting_main.appendChild(set)
}

// =================================[ПРОВЕРКА НАЖАТИЯ ПО КНОПКАМ]==================================================================================================================
window.addEventListener('click', function(event) {
	const save_setting = document.querySelector('.head_nav_item.fl_l.setting_donos');
	const img_save_setting = document.querySelector('img.setting_donos');
	const menu_cont = document.querySelector('.setting');

	var a = document.getElementById('r2');
	// console.log(event.target.className)
	if (event.target.className === 'emoji_button_donos'){
		// var id = event.path[3].children[1].firstElementChild.dataset.fromId;
		var click_button = event.target.className;
		var id = event.target.parentElement.parentElement.parentElement.children[1].children[0].dataset.fromId
		if (id == undefined){
			id = event.target.offsetParent.children[0].children[0].dataset.answeringId
		}			

		let bd = [id, click_button]

		const status = event.target.nextSibling;
		var i = parseInt(status.innerText);
		i += 1;
		status.innerText = i;
		event.target.className = 'delemoji_button_donos';
		event.target.previousSibling.className = 'delemoji_button_donos';

		event.target.previousSibling.innerHTML = delicon
		event.target.title = 'Убрать юзера из базы бяк'
		get_colors();

	}
	else if (event.target.className === 'delemoji_button_donos'){
		var id = event.target.parentElement.parentElement.parentElement.children[1].children[0].dataset.fromId
		var click_button = event.target.className;
		if (id == undefined){
			id = event.target.offsetParent.children[0].children[0].dataset.answeringId
		}			

		let bd = [id, click_button]

		const status = event.target.nextSibling
		var i = parseInt(status.innerText);

		i -= 1;
		status.innerText = i;
		event.target.className = 'emoji_button_donos';
		event.target.previousSibling.className = 'emoji_button_donos';

		event.target.previousSibling.innerHTML = icon
		event.target.title = 'Внести в базу бяк этого юзера'
		get_colors();

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
	get_colors();
	}

	if (event.target.className === 'head_nav_item fl_l top_nav_btn setting_donos' || event.target.className === 'setting_donos s_btn'){
		if (save_setting.className === 'head_nav_item fl_l top_nav_btn setting_donos' && img_save_setting.className === 'setting_donos s_btn'){
			save_setting.className += ' save_setting active';
			img_save_setting.className += ' save_setting active';
			img_save_setting.src = 'https://i.imgur.com/YTmQmky.png';
			menu_cont.style.display = 'block';
		}
	}
	else if (event.target.className === '' || event.target.className === 'menu_cont' || event.target.className === 'menu_setting'){}
	else {
		if (save_setting.className === 'head_nav_item fl_l top_nav_btn setting_donos save_setting active' && img_save_setting.className === 'setting_donos s_btn save_setting active'){
			save_setting.className = 'head_nav_item fl_l top_nav_btn setting_donos';
			img_save_setting.className = 'setting_donos s_btn';
			img_save_setting.src = 'https://i.imgur.com/KD3TUUE.png';
			menu_cont.style.display = 'none';
		}
	}
})

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
}

function btn_func_r3() {	// Функция отвечающая за настройку цветов
	var rng=document.getElementById('r3');
    const div = document.querySelectorAll('.st3');

	div.forEach(function(button) {
		button.style.fill ='#'+rng.value;
	});
}

// ================================[ДОБАВЛЕНИЕ ЦВЕТОВ К КНОПКАМ]=========================================================================================================================
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

// ===============================[*ЛОКАЛЬНАЯ БАЗА РЕЙТИНГА*]======================================================================================================================
function save_report(event) {
	var id = event[3].children[1].children[0].dataset.fromId;
	var name = event[3].querySelector('.author').innerText;
	var report = event[1].querySelector('.status_report').innerText;

	// let rep = [42342399];
	// if (id && name && report){
	// 	rep = [your_id()]
	// }

	localStorage.setItem(id, your_id());	
	a = localStorage.getItem(id)
	// console.log(a[0]);
	console.log(a)
	// console.log(localStorage.clear(), localStorage.length)
}

// ===============================[*ДОБАВЛЕНИЕ РЕЙТИНГА НА СТРАНИЦУ*]=====================================================================================================================
function get_report() {
	const main = document.querySelectorAll('div.reply_content')

	for (var i = 0; i <= (main.length-1); i++) {
		// console.log(i)
		id = main[i].children[1].children[0].dataset.fromId
		var localValue = localStorage.getItem(id);

		if (localValue != null){
			user_id = localValue.split(',')[0];
			score = localValue.length;
			if (id === user_id){
				const pack = main[i].children[3].children[3].lastElementChild
				pack.innerText = score;
			}
			// else{ console.log('Данный ID отсутствует в базе') }
		}
	}
}

// ===============================[УДАЛЕНИЕ ВСЕХ СОЗДАННЫХ КНОПОК]=====================================================================================================================
function delbuttons_test() {
	var delbut = document.querySelectorAll('div.reply_footer.clear_fix');

	delbut.forEach(function(elements) {
	var test_1 = elements.querySelector('.reply_link_wrap.cremleBot');
		if (test_1 != null){
			elements.querySelector('.emoji_conteiner').remove();
			elements.querySelector('.reply_link_wrap').className = 'reply_link_wrap';
		}
	})
}

window.setTimeout(function () {
	addButtons();
	addSetting();
}, 300)

// ====================================[ОБНОВЛЕНИЕ КНОПОК]=======================================================================================================
// setInterval(function(){ 
//     delbuttons_test();
// 	addButtons();
// }, 5000);