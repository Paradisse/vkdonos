function addRating() {
	// console.log(location)
	const page = document.querySelector('.page_avatar_img');
	const rating = document.createElement('div');
	const line_rat = document.createElement('div');

	const rat_num = document.createElement('div');

	// var save = get_rate();

	rating.className = 'rating_conteiner';
	rating.style.width = page.width+'px';
	rating.innerText = 'Рейтинг:';

	rat_num.className = 'rat_num';
	rat_num.innerText = 0;
	rat_num.style.margin = '1.5px 0 0 5px';

	line_rat.className = 'line_rating';

	rating.appendChild(rat_num);
	page.before(rating);
	rating.after(line_rat);	

	get_rate();

	const status_get = document.querySelector('.clear_fix.profile_info_row')
	const status = document.createElement('div');
	const s_cont = document.createElement('div');
	const s_text = document.createElement('div');

	status.className = 'status_user_conteiner';

	s_cont.innerText = 'Статус юзера:';
	s_cont.className = 'status_content';
	s_text.className = 'status_text';

	status.appendChild(s_cont);
	status.appendChild(s_text);
	status_get.before(status);

	if (parseInt(rat_num.innerText) <= 250){
		line_rat.style.background = '#f00';
		line_rat.style.transform = 'translateX(-'+(250-rat_num.innerText)+'px)';
		s_text.innerText = 'СММщик';
	}else if (parseInt(rat_num.innerText) <= 500){
		line_rat.style.background = '#0f0';
		line_rat.style.transform = 'translateX(-'+(450-rat_num.innerText)+'px)';
		s_text.innerText = 'Противник';
	}
}

window.setTimeout(function () {
	addRating();
}, 300)

function local_save(node) {	// Запись в базу цвета
	localStorage.setItem("status_user", node);
}

function get_rate() {	// Установка цвета из базы
	var localValue = localStorage.getItem('status_user');	// Переменная, которая берёт из базы цвета

    var div = document.querySelector('.rat_num');

	div.innerText=299;
}

window.addEventListener('click', function (event) {	// Настройка цвета
	const input_report = document.querySelector('.reply.reply_dived.clear.reply_replieable._post');

	console.log(event.target)
});