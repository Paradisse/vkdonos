function addButtons() {
	const comments = document.querySelectorAll('div:not(.cremleBot).reply_link_wrap');

	comments.forEach(function(button) {
		button.className += ' cremleBot';
		const emoji = document.createElement('div');
		const container_emoji = document.createElement('div');
		const but_maket = document.createElement('img');

		but_maket.src = 'https://i.imgur.com/qkwQqOe.png'
		// emoji.innerHTML = "👹";
		// emoji.src = 'https://i.imgur.com/qkwQqOe.png';
		container_emoji.className = 'emoji_container';
		emoji.className = 'emoji_button_donos';
		but_maket.className = 'emoji_button_donos';
		but_maket.style.opacity = '0';
		but_maket.title = 'Донос'


		let icon = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
		 viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">\
		<style type="text/css">\
			.st0{fill:#4f8fd8;}\
			.st1{fill:#FFFFFF;}</style>\
		<g id="Layer_2_1_">\
			<circle class="st0" cx="513.6" cy="512.3" r="511.3"/>\
				<rect x="274.6" y="440.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -333.4777 416.8841)" class="st1" width="123.7" height="341.5"/>\
				<rect x="274.1" y="433.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -175.4795 571.0907)" class="st1" width="655.1" height="127.3"/></g></svg>'

		let svgimg = document.querySelectorAll("div.emoji_button_donos"); // находим все элементы с классом happyface
		for( let i = 0; i < svgimg.length; i++){ // проходим циклом по всем элементам
		    svgimg[i].innerHTML = icon; // вставляем в них иконку
		}

		container_emoji.appendChild(emoji);
		container_emoji.appendChild(but_maket);
		button.after(container_emoji);

	});
	get_colors();	
	// ReportInput();

	const body = document.querySelector('.scroll_fix');
	body.insertAdjacentHTML('afterBegin', '<div class="bg_report"><div class="array_report"><div class="name_report"></div><div class="comment_report"></div></div><input class="input_report" type="text" id="r2" alt="text"/><h1 class = "save_report">Сохранить</h1><h1 class = "close_report">Закрыть</h1></div>');


}

function addSetting() {
	const setting_container = document.querySelector('div.chat_onl_inner');
	const setting_main = document.createElement('div');
	const setting = document.createElement('img');

	setting.src = 'https://i.imgur.com/3h636wU.png';
	setting.className = 'setting_donos';
	setting_main.className = 'setting_donos';
	setting_container.appendChild(setting_main);
	setting_main.appendChild(setting)
	setting_container.insertAdjacentHTML('beforeBegin',	
		'<div class="setting"><div class="menu_setting">\
			<ul>\
				<b><li>Настройки</li></b><br>\
				<li>Цвет</li>\
			</ul><br><div class="menu_cont"><div class="content_menu"><input type="range" id="r1" min="5" max="500"></div></div></div></div>'); 
}

function ReportInput(node) {

	const name_report = document.querySelector('div.name_report');
	const comment_report = document.querySelector('div.comment_report');
	const input_report = document.getElementById('r2');
	const report = document.querySelector('.bg_report');

	// console.log(node);
	name_report.innerText = node[1].innerText;
	comment_report.innerText = node[2].innerText;

	window.addEventListener('click', function(event) { // здесь будет добавление в бд
		if (event.target.className === 'save_report'){
			console.log('В базу был записан', node[0] + '. Причина:', input_report.value);
			input_report.value = '';
			report.style.display = 'none';
		}
		else if (event.target.className === 'close_report'){
			input_report.value = '';
			report.style.display = 'none';
		}
	});
}

window.addEventListener('click', function(event) {
	const save_setting = document.querySelector('.setting_donos');
	const menu_cont = document.querySelector('.setting');
	const report = document.querySelector('.bg_report');
	// console.log(event.target.className);

	var a = document.getElementById('r2');


	if (event.target.className === 'emoji_button_donos'){
		// const comments = document.
		var name = event.path[3].children;
		// name = name.split('\n')

		ReportInput(name);
		report.style.display = 'block';
	}
	else if (event.target.className === 'setting_donos'){
		if (save_setting.className === 'setting_donos'){
			save_setting.className += ' save_setting';
			menu_cont.style.display = 'block';
		}
		else{
			save_setting.className = 'setting_donos';
			menu_cont.style.display = 'none';
		}
	}
	else if (event.target.className === 'left_label inl_bl'){
		window.setTimeout(function () {
			addButtons();
		}, 3000)
	}
	// else if (event.target.className === 'scroll_fix'){
	// 	console.log(a.value);		
	// }
})

window.addEventListener('input', function (event) {	// Настройка цвета
	if (event.target.id === 'r1'){
		btn_func();
	}
});

function btn_func() {	// Функция отвечающая за настройку цветов
	var rng=document.getElementById('r1');
    const div = document.querySelectorAll('.st0');

	div.forEach(function(button) {
		button.style.fill ='#'+rng.value;
	});

    local_save(div[0]);
}

function local_save(node) {	// Запись в базу цвета

	const parent = node.parentNode.parentNode;
	const const_color = parent.querySelector('.st0').style.fill;

	localStorage.setItem("colors", const_color);
}

function get_colors() {	// Установка цвета из базы
	var localValue = localStorage.getItem('colors');	// Переменная, которая берёт из базы цвета

    const div = document.querySelectorAll('.st0');

	div.forEach(function(button) {
		button.style.fill=localValue;
	});


}


window.setTimeout(function () {
	addButtons();
	addSetting();
}, 300)

setInterval(function(){ 
     //console.log('Прошло n секунд и я сейчас обновлюсь');
     addButtons();
     //console.log('Обновление прошло')
 }, 2500);