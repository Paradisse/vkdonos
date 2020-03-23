window.setTimeout(function(){
	loading();

	setTimeout(() => {unloading()}, 3500)

})

function loading() {

	const fon = document.querySelector('div#system_msg.fixed');

	const load = document.createElement('div');
	const c_load = document.createElement('div');
	const loading = document.createElement('img');
	load.className = 'cont_load';
	c_load.className = 'conteiner';
	loading.className = 'loading';
	loading.src = 'https://i.imgur.com/BZc72Sy.png';
	// c_load.innerText = 'Загрузка цвета'

	load.appendChild(c_load);
	c_load.appendChild(loading);
	fon.before(load);
}

function unloading() {
	const loading = document.querySelector('.cont_load');
	loading.remove()
}