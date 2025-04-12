onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('любовь вкусная моя, приглашаю вас на свидание со мной в игре в кальмара( я не успела придумать чтото новое поэтому да nqsswx-gtWx.aternos.me:14190 ♡').split('')
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
