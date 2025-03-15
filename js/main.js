onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('любимая сладусюля, имею честь пригласить вас на высокоторжественное погружение в игру в майнкрафт, ожидаю вас уже на месте со всей любовью').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 100); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
