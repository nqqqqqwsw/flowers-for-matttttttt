onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('любимая моя, прошу вас присоединиться к замечательному времяпрепровождению со мной в Майнкрафт на сервере по адресу nqsswx-vtMC.aternos.me:29961, буду почтена вашему вниманию, ожидаю вас уже там вместе со всей моей любовью!').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    // Используем setInterval для более быстрых обновлений
    const interval = setInterval(() => {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
      } else {
        clearInterval(interval); // Останавливаем интервал, когда весь текст выведен
      }
    }, 250); // 50 мс между добавлением символов

    clearTimeout(c);
  }, 1000);
};
