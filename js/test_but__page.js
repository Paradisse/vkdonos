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

function addRatingnew() {
	// console.log(location)
	const page = document.querySelector('.page_avatar_wrap');
	const rating = document.createElement('img');
	// const line_rat = document.createElement('div');

	const rat_num = document.createElement('div');
	const cont_rat = document.createElement('div');


	// var save = get_rate();

	cont_rat.className = 'conteiner_rat'
	rating.className = 'rating_conteiner';
	// rating.src = 'https://thumbs.gfycat.com/BrilliantDefensiveIslandwhistler-size_restricted.gif'
	rating.src = 'https://avatars.mds.yandex.net/get-pdb/1689173/d9da8ec6-46ce-4190-9bac-a68b7bddaf4d/s1200';
	// rating.style.width = page.width+'px';
	// rating.innerText = 'Рейтинг:';

	rat_num.className = 'rat_num';
	rat_num.innerText = 0;
	// rat_num.style.margin = '1.5px 0 0 5px';

	// line_rat.className = 'line_rating';

	page.before(rating);
	rating.before(cont_rat);
	cont_rat.appendChild(rat_num);

	// rating.after(line_rat);	

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
		// line_rat.style.background = '#f00';
		// line_rat.style.transform = 'translateX(-'+(250-rat_num.innerText)+'px)';
		s_text.innerText = 'СММщик';
	}else if (parseInt(rat_num.innerText) <= 500){
		// line_rat.style.background = '#0f0';
		// line_rat.style.transform = 'translateX(-'+(450-rat_num.innerText)+'px)';
		s_text.innerText = 'Противник';
	}
	else{
		s_text.innerText = 'пусто';
	}
}

function addRatnew2(){

	const main = document.querySelector('.page_block.page_photo');
	const conteiner_rate = document.createElement('div');
	const content_rate = document.createElement('div');
	const name_block = document.createElement('div');
	const num_block = document.createElement('span');

	const content_rate2 = document.createElement('div');
	const bar_rate = document.createElement('div');
	const bar_rrr = document.createElement('div');

	const ach_cont = document.createElement('div');
	const img_ach = document.createElement('img');

	conteiner_rate.className = 'conteiner_rating page_block';
	content_rate.className = 'cont_rate';
	content_rate2.className = 'cont_rate2';
	bar_rate.className = 'bar_rating';
	bar_rrr.className = 'bar_rating bar_style';
	// bar_rrr.style.marginLeft = '-190px';
	name_block.innerText = 'Рейтинг зла';
	name_block.className = 'name_block';
	num_block.innerText = 0;
	num_block.className = 'num_block';
	// num_block.innerText = 1232;
// ------------------------{АЧИВКИ}-------------------------------
	ach_cont.className = 'achivment_content';
	img_ach.className = 'img_ach';
	img_ach.src = 'https://vk.com/sticker/4-501-96';
	img_ach.alt = 'Ачивка one'

	// bar_rrr.style.marginLeft = '-'+((num_block.innerText/4)-200)+'px';
	if (num_block.innerText >= 0 && num_block.innerText <= 999){

		// console.log('-'+(num_block.innerText-190)+'px')
		bar_rrr.style.marginLeft = '-'+(num_block.innerText-190)+'px';
	}
	else if (num_block.innerText >= 1000 && num_block.innerText <= 9999){
		var a = num_block.innerText.split('');
		num_block.innerText = a[0] + 'K';
	} 
	else if (num_block.innerText >= 10000 && num_block.innerText <= 99999){
		var a = num_block.innerText.split('');
		num_block.innerText = a[0] + a[1] + 'K';
	} 
	else if (num_block.innerText > 99999) {
		num_block.innerText = 'Не, ну это бан'
	}
	const actions_group = document.querySelector('.page_actions');
	if (main != null && actions_group == null){
		main.after(conteiner_rate);	
		conteiner_rate.appendChild(content_rate);
		content_rate.appendChild(name_block);
		content_rate.appendChild(num_block);
// --------------------------------------------
		conteiner_rate.appendChild(content_rate2);
		content_rate2.appendChild(bar_rate);
		bar_rate.appendChild(bar_rrr)
// --------------------------------------------
		// conteiner_rate.appendChild(ach_cont);
		// ach_cont.appendChild(img_ach);

		// id = '365017611';
		// num = 235;

		// local_save(num)
		get_rate();
	}

}

window.setTimeout(function () {
	// addRating();
	// addRatingnew();
	addRatnew2();
}, 300)

function local_save(node) {

	localStorage.setItem("365017611", node);
}

function get_rate() {
	const test = document.getElementById('profile_photo_link')
	if (test != null){
	    var a = document.getElementById('profile_photo_link').href
		a = a.split('https://vk.com/photo')
		a = a[1].split('_')
		var localValue = localStorage.getItem(a[0])
	    var div = document.querySelector('.num_block');
	    if (localValue){
			div.innerText=localValue;
	    }
	    else if (localValue === null){
			div.innerText=0;
	    }
	}

}

window.addEventListener('click', function (event) {
	const input_report = document.querySelector('.reply.reply_dived.clear.reply_replieable._post');
	if (event.target.className === 'left_label inl_bl' || event.target.className === 'top_home_link fl_l' || event.target.className === 'people_cell_img'){
		window.setTimeout(function () {
			addRatnew2();
		}, 3000)
	}
	// console.log(event.target)
});