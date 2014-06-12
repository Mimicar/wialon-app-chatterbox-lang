!function($, _) {
	if (_.isUndefined(APP) || !APP.config) return false;
	APP.config = $.extend(true, APP.config, {
		L10n: {
			"%%c%% SMS": "",
			"%%r%% symbols": "symboly",
			"%%type%% are available now": "%%type%% je práve k dispozícii",
			"%%type%% are not available": "Bez pripojenia",
			"Address": "Adresa",
			"All messages": "Všetky správy",
			"Chat": "",
			"Drag to change<br />Double click to send": "Ťahaním presunúť.<br />Dvojklikom odoslať.",
			"Drivers": "Vodiči",
			"Execution time: %%title%%": "Čas vykonania: %%title%%",
			"Export to .xml": "Export do .xml",
			"Forever": "Navždy",
			"Geofences": "Zóny ohraničenia",
			"History is not available": "História nie je dostupná",
			"Incoming": "Prichadzajúce",
			"Latest": "Posledné",
			"Latest message: %%d%% %%t%%": "Posledné správy: %%d%% %%t%%",
			"Loading messages": "Načítanie správ",
			"Message is not delivered": "Správa nebola doručená.",
			"Message log": "Denník správ",
			"Month": "Mesiac",
			"Not enought rights or something else bad": "Bez pripojenia",
			"Not found": "Nenájdené",
			"Not necessary to load module": "Nie je nutné načítať modul",
			"Oh! %%module%% didn't load!": "Chyba načítania aplikácie.",
			"Oh! Unfortunately, we can't load SDK": "Chyba pri načítaní aplikácie.",
			"Oh! Unfortunately, we can't send coordinates": "Nie je možné odoslať súradnice",
			"Oh! Unfortunately, you can't login": "Nesprávne prihlasovacie údaje.",
			"Oh! We can't create command": "Nie je možné vytvoriť príkaz",
			"Oh! We can't fetch information": "Nie je možné načítať informácie.",
			"Oh! We can't remove this message": "Nie je možné odstrániť túto správu.",
			"Outgoing": "Odoslané",
			"POIs": "Body záujmu",
			"Please, fill the correct data in configuration": "Nesprávne prihlasovacie údaje.",
			"Points": "súradnice",
			"Possibility change (%%o%%)": "Zmena možností (%%o%%)",
			"Press Enter to send": "Pre odoslanie stlačte Enter",
			"Remaining": "Zostávajúce",
			"SMS": "SMS",
			"Save": "Uložiť",
			"Send coordinates": "Pozícia ako",
			"Sent coordinates": "Súradnice",
			"Session has been lost": "Relácia stratená.",
			"Show in folder": "Pozri v priečinku",
			"Show messages": "Pozri správu",
			"Show on map": "Pozri na mape",
			"Something wrong": "Chyba pri načítaní aplikácie.",
			"Speed: %%c%% %%measure%%": "Rýchlosť: %%c%% %%measure%%",
			"The message was removed": "Správa bola vymazaná.",
			"There are no message to export": "Žiadna správa pre export.",
			"Today": "Dnes",
			"Translation": "Preklad",
			"Units": "Vozidlá",
			"Unknown": "Neznámy",
			"Week": "Týždeň",
			"Window resized": "Zmena veľkosti okna",
			"XML comments": "Attributes msgset: *name: Názov vozidla alebo vodiča; *type: typ (vozidlo, vodič); *phones: dostupné telefónne čísla. Attributes msg: *ts: čas správy (UTC); *type: typ správy (out - odoslané, in - doručené); *link: typ komunikácie (tcp alebo sms); *flag: vlajky (1 - text, 2 - obrázok, 3 - súradnice, 4 - poplach); *text - tvar správy.",
			"Yesterday": "Včera",
			"You didn't choose anything": "Nič ste nevybrali",
			"You didn't choose phone number or something else": "Nevybrali ste telefónne číslo, alebo niečo iné",
			"[%%time%%] %%title%% started": "",
			"km/h": "",
			"lang": "sk",
			"locale": "sk_SK",
			"mph": ""
		},
		localization: {
			"days": ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
			"days_short": ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
			"months": ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
			"months_short": ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"]
		}
	});
}(jQuery, _);
