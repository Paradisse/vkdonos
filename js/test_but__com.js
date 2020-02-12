function addButtons() {
	const comments = document.querySelectorAll('div:not(.cremleBot).reply_link_wrap');

	comments.forEach(function(button) {
		button.className += ' cremleBot';
		const emoji = document.createElement('img');
		const conteiner_emoji = document.createElement('div');

		emoji.src = 'https://i.imgur.com/qkwQqOe.png';
		conteiner_emoji.className = 'emoji_conteiner';
		emoji.className = 'emoji_button_donos';
		emoji.title = 'Внести в базу бяк этого юзера'

		const status = document.createElement('div');

		status.innerText = 2;
		status.className = 'status_report';

		conteiner_emoji.appendChild(emoji);
		conteiner_emoji.appendChild(status);
		button.after(conteiner_emoji);
	});

	window.addEventListener('click', function (event) {	// Настройка цвета

		if (event.target.className === 'emoji_button_donos') {
			var score = event.path[2].children[3].children[1];
			var i = parseInt(score.innerText);

			i += 1;
			score.innerText = i;

			local_save(score.innerText);
		}

	});
	get_colors();
	cremBot();

}

function cremBot() {
	const comm = document.querySelectorAll('.reply.reply_dived.clear.reply_replieable._post');

	comm.forEach(function(c) {
		const avatar = c.querySelector('.reply_image');
		const resp = c.querySelector('.status_report').innerText;
		const cBd = document.createElement('div');

		const image_size = c.querySelector('.reply_image img')
		cBd.className = 'delete_cremleBot';
		cBd.style.width = image_size.width+'px';
		cBd.style.height = image_size.height+'px';
		if (image_size.width && image_size.height === 34){
			cBd.style.marginTop = '-34px';
		}
		else if (image_size.width && image_size.height === 24){
			cBd.style.marginTop = '-24px';
		}

		if (resp === '2'){
			avatar.appendChild(cBd);
		}
	});

}

window.setTimeout(function () {
	addButtons();
}, 300)


function local_save(node) {	// Запись в базу цвета

	// const const_color = parent.querySelector('.st0').style.fill;

	localStorage.setItem("status_user", node);
}

function get_colors() {	// Установка цвета из базы
	var localValue = localStorage.getItem('status_user');	// Переменная, которая берёт из базы цвета

    const div = document.querySelectorAll('.status_report');

	div.forEach(function(status) {
		status.innerText=localValue;
	});
}