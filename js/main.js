
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('любимая моя, прошу вас присоединиться к замечательному времяпрепровождению со мной в Майнкрафте на сервере по адресу nqsswx-vtMC.aternos.me:29961, буду почтена вашему вниманию, ожидаю вас уже там вместе со всей моей любовью!').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        requestAnimationFrame(appendTitle); //
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
