onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('любимая моя, прошу вас присоединиться к замечательному времяпрепровождению со мной в Майнкрафт на сервере по адресу nqsswx-vtMC.aternos.me:29961, буду почтена вашему вниманию, ожидаю вас уже там вместе со всей моей любовью!').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
      }
    }

    // Прямо вызываем appendTitle в setInterval с интервалом в 100 мс
    const interval = setInterval(() => {
      appendTitle();
    }, 100); // Интервал 100 мс между символами

    // Останавливаем setInterval, когда весь текст выведен
    setTimeout(() => {
      clearInterval(interval);
    }, titles.length * 100); // Остановить через время, необходимое для вывода всех символов

    clearTimeout(c);
  }, 1000);
};
