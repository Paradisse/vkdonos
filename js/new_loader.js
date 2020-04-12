window.setTimeout(function(){
	loading();

	// setTimeout(() => {unloading()}, 3500)

})

function loading() {
	const fon = document.querySelector('div#system_msg.fixed');

	const loader = document.createElement('div');
	loader.className = 'main-loader'
	fon.before(loader);
	loader.innerHTML = `<div class="footer_upd"><span title="Текующая версия расширения">v1.5.0.6-2</span></div>
		
		<div class="update_">
			<div class="content-loader">
				<div class="upd_">
					<h3 upd_1 class="title_upd">Обновление v1.5.0.6-2</h3>
					<span upd_1 class="text_upd">В обновление v1.5.0.6-2 мы решаемся обновить прелоудер. Исправляем найденные недочёты, баги.<div class="tag-name">#feb</div></span>
				</div>
				<div class="upd_">
					<h3 upd_1 class="title_upd">Обновление v1.5.0.6-1</h3>
					<span upd_1 class="text_upd">В обновление v1.5.0.6-1 мы упрощаем вёрстку настроек. Добавляем локальное сохранение для стилей, а также добавляй режим день/ночь.<div class="tag-name">#feb</div></span>
				</div>
				<div class="upd_">
					<h3 upd_1 class="title_upd">Обновление v1.5.0.2</h3>
					<span upd_1 class="text_upd">В обновление v1.5.0.2 были добавлены настройки для цветов<div class="tag-name">#feb</div></span>
				</div>
				<div class="upd_">
					<h3 upd_1 class="title_upd">Обновление v1.5</h3>
					<span upd_1 class="text_upd">В обновление v1.5 был добавлен прелоудер, во время загрузки страницы. Так же мы обновили скроллы <div class="tag-name">#feb</div></span>
				</div>
				<div class="upd_">
					<h3 upd_1 class="title_upd">Обновление v1.2-v1.4.2</h3>
					<span upd_1 class="text_upd">В текущем обновление мы исправляем найденные недочёты по теме и уже близимся к продакшену. <div class="tag-name">#feb</div></span>
				</div>
				<div class="upd_">
					<h3 upd_1 class="title_upd">Обновление v1</h3>
					<span upd_1 class="text_upd">Была добавлена тёмная тема.<br>Конечно же, есть множество аналогов, но как не крути, наша тема будет совершенствоваться и станет единственной. <div class="tag-name">#feb</div></span>
				</div>

			</div>
		</div>

		<div class="loading">
			<div class="load"></div>
		</div>
		<span class="proc-loader">0%</span>

		<div class="autoclick-div">Автоклик:<span class="autoclick"></span></div>
		<div class="btn_autoclick_">Клик</div>
		<div class="hover_upd">
			<a id="vk_n" href="https://vk.com/hignomik" title="Николай"></a>
			<a id="github" href="" title="Пока конфеденциально"></a>
			<a id="vk_v" href="https://vk.com/p4radis3" title="Иван"></a>
		</div>`;

	const text_load = document.querySelector('.proc-loader');
	setTimeout(() => text_load.innerText='10%', 500);
	setTimeout(() => text_load.innerText='25%', 900);
	setTimeout(() => text_load.innerText='35%', 1300);
	setTimeout(() => text_load.innerText='50%', 1700);
	setTimeout(() => text_load.innerText='65%', 2100);
	setTimeout(() => text_load.innerText='80%', 2500);
	setTimeout(() => text_load.innerText='95%', 2900);
	setTimeout(() => text_load.innerText='100%', 3300);
}

function unloading() {
	const loading = document.querySelector('.main-loader');
	loading.remove()
}