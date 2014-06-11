!function($, _) {
	if (_.isUndefined(APP) || !APP.config) return false;
	APP.config = $.extend(true, APP.config, {
		L10n: {
			'lang'												: 'ru',
			'locale'											: 'ru_RU',
			'Unknown'											: 'Неизвестно',
			'Not necessary to load module'						: 'Нет необходимости загружать модуль',
			'Oh! %%module%% didn\'t load!'						: 'Невозможно загрузить приложение.',
			'Execution time: %%title%%'							: 'Время выполнения: %%title%%',
			'[%%time%%] %%title%% started'						: '[%%time%%] %%title%% запущен',
			'Message log'										: 'Сообщение лога',
			'Something wrong'									: 'Невозможно загрузить приложение.',
			'Window resized'									: 'Размер окна изменен',
			'Translation'										: 'Перевод',
			'Please, fill the correct data in configuration'	: 'Неверные данные для входа в систему.',
			'Oh! Unfortunately, you can\'t login'				: 'Неверные данные для входа в систему.',
			'Oh! Unfortunately, we can\'t load SDK'				: 'Невозможно загрузить приложение.',
			'Session has been lost'								: 'Данные сессии устарели.',
			'Oh! We can\'t fetch information'					: 'Не удается получить данные.',
			'Oh! We can\'t remove this message'					: 'Ошибка удаления сообщения.',
			'Oh! We can\'t create command'						: 'Мы не можем создать команду',
			'Oh! Unfortunately, we can\'t send coordinates'		: 'К сожалению, мы не можем отправить координаты',
			'The message was removed'							: 'Сообщение удалено.',
			'There are no message to export'					: 'Нет сообщений для экспорта.',
			'Not enought rights or something else bad'			: 'Соединение недоступно',
			'You didn\'t choose phone number or something else'	: 'Вы не выбрали номер телефона или что-то еще',
			'You didn\'t choose anything'						: 'Вы ничего не выбрали',
			'Press Enter to send'								: 'Enter — отправить',
			'Message is not delivered'							: 'Сообщение не доставлено.',
			'Not found'											: 'Не найдено.',
			'Units'												: 'Обьекты',
			'Drivers'											: 'Водители',
			'Latest'											: 'Последние',
			'POIs'												: 'POI',
			'Geofences'											: 'Геозоны',
			'Loading messages'									: 'Загрузка сообщений',
			'Show messages:'									: 'Показать сообщения:',
			'Yesterday'											: 'Вчера',
			'Today'												: 'Сегодня',
			'Week'												: 'Неделя',
			'Month'												: 'Месяц',
			'Forever'											: 'Все время',
			'All messages'										: 'Все сообщения',
			'Incoming'											: 'Входящие',
			'Outgoing'											: 'Исходящие',
			'Export to .xml'									: 'Экспорт в .xml',
			'Save'												: 'Сохранить',
			'Show in folder'									: 'Показать в папке',
			'Send coordinates'									: 'Местоположение как',
			'Sent coordinates'									: 'Координаты',
			'Show on map'										: 'Показать на карте',
			'Remaining'											: 'Осталось',
			'%%r%% symbols'										: '%%r%% символов',
			'%%c%% SMS'											: '%%c%% SMS',
			'Chat'												: 'чат',
			'SMS'												: 'SMS',
			'Points'											: 'координаты',
			'Address'											: 'адреса',
			'Drag to change<br />Double click to send'			: 'Потяните для перемещения.<br />Двойной щелчок для отправки.',
			'%%type%% are not available'						: 'Соединение недоступно.',
			'%%type%% are available now'						: 'Соединение доступно (%%type%%)',
			'Possibility change (%%o%%)'						: 'Изменение доступности (%%o%%)',
			'Latest message: %%d%% %%t%%'						: 'Последнее: %%d%% %%t%%',
			'Speed: %%c%% %%measure%%'							: 'Скорость: %%c%% %%measure%%',
			'XML comments'										: 'Атрибуты msgset: *name: имя обьекта или водителя; *type: тип (обьект, водитель); *phones: доступные номера телефонов. Атрибуты msg: *ts: время сообщения (UTC); *type: тип сообщения (out - исходящее, in - входящее); *link: тип соединения (tcp или смс); *flag: флаги (1 - текст, 2 - изображение, 3 - координаты, 4 - тревожное сообщение); *text - текст сообщения.',
			'History is not available'							: 'История недоступна.',
			'km/h'												: 'км/ч',
			'mph'												: 'ми/ч'
		},
		default_city: 'Минск',
		localization: {
			'days'												: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
			'days_short'										: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
			'months'											: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			'months_short'										: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
		}
	});
}(jQuery, _);