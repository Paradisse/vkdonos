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

		const status = document.createElement('div');

		status.innerText = 0;
		status.className = 'status_report';

		conteiner_emoji.appendChild(emoji);
		conteiner_emoji.appendChild(but_maket);
		conteiner_emoji.appendChild(status);
		button.after(conteiner_emoji);

	});
	get_colors();	
	// ReportInput();



}

function addSetting() {
	const setting_conteiner = document.querySelector('div.chat_onl_inner');
	const setting_main = document.createElement('div');
	const setting = document.createElement('img');

	setting.src = 'https://i.imgur.com/3h636wU.png';
	setting.className = 'setting_donos';
	setting_main.className = 'setting_donos';
	setting_conteiner.appendChild(setting_main);
	setting_main.appendChild(setting)
	setting_conteiner.insertAdjacentHTML('beforeBegin',	
		'<div class="setting"><div class="menu_setting">\
			<ul>\
				<b><li>Настройки</li></b><br>\
				<li>Цвет</li>\
			</ul><br><div class="menu_cont"><div class="content_menu"><input type="range" id="r1" min="5" max="500"></div></div></div></div>'); 
}

window.addEventListener('click', function(event) {
	const save_setting = document.querySelector('.setting_donos');
	const menu_cont = document.querySelector('.setting');
	const report = document.querySelector('.bg_report');

	var a = document.getElementById('r2');


	if (event.target.className === 'emoji_button_donos'){
		var name = event.path[3].children;
		// name = name.split('\n')
		ReportInput(name);
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

	const input_report = document.getElementById('r2');
	if (event.target.className === 'save_report'){
		// var i = parseInt(status.innerText);

		var name = event.path[1].children[0].children[0].innerText
		if (input_report.value === ''){
			input_report.value = 'Мошенник';
		}
		console.log('В базу был записан', name + '. Причина:', input_report.value);

		report.remove()

		// i += 1;
		// status.innerText = i;
		// local_save_report();
	}
	else if (event.target.className === 'close_report'){
		report.remove()
	}

})

function ReportInput(node) {

	const body = document.querySelector('.scroll_fix');
	body.insertAdjacentHTML('afterBegin', '<div class="bg_report"><div class="array_report"><div class="name_report"></div><div class="comment_report"></div></div><div class="id_user_vk"></div><input class="input_report" type="text" id="r2" alt="text"/><h1 class = "save_report">Сохранить</h1><h1 class = "close_report">Закрыть</h1></div>');

	const name_report = document.querySelector('div.name_report');
	const comment_report = document.querySelector('div.comment_report');
	const input_report = document.getElementById('r2');
	const report = document.querySelector('.bg_report');
	const id_user = document.querySelector('.id_user_vk');

	name_report.innerText = node[1].innerText;
	comment_report.innerText = node[2].innerText;
	id_user.innerText = node[1].children[0].dataset.fromId;

	// save_report()

// Берём ИМЯ, ИД, ПРИЧИНУ жалобы и добавляем в базу
}

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

	localStorage.setItem("colors_donos", const_color);
}

function get_colors() {	// Установка цвета из базы
	var localValue = localStorage.getItem('colors_donos');	// Переменная, которая берёт из базы цвета

    const div = document.querySelectorAll('.st0');

	div.forEach(function(button) {
		button.style.fill=localValue;
	});
}
function save_report() {
	const const_color = document.querySelector('.status_report').innerText;
	console.log(const_color)
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