onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('любимая моя, прошу вас присоединиться к замечательному времяпрепровождению со мной в Майнкрафт на сервере по адресу nqsswx-vtMC.aternos.me:29961, буду почтена вашему вниманию, ожидаю вас уже там вместе со всей моей любовью!').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function appendTitle() {
      while (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        await sleep(150); // Задержка между символами (150 мс)
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
