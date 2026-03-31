(() => {
  const dead = document.getElementById("dead");
  const lost = document.getElementById("lost");

  const getHole = (index) => document.getElementById(`hole${index}`);

  const reset = (message) => {
    alert(message);
    dead.textContent = 0;
    lost.textContent = 0;
  };

  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => {
      if (getHole(i).classList.contains("hole_has-mole")) {
        dead.textContent++;
      } else {
        lost.textContent++;
      }

      if (Number(dead.textContent) === 10) {
        reset("Вы победили!");
      } else if (Number(lost.textContent) === 5) {
        reset("Вы проиграли!");
      }
    };
  }
})();
