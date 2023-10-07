document
  .getElementById('timeZoneButton')
  .addEventListener('click', function () {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let time = new Date();
    let greeting = '';

    if (time.getHours() >= 5 && time.getHours() < 12) {
      greeting = 'Доброе утро!';
    } else if (time.getHours() >= 12 && time.getHours() <= 17) {
      greeting = 'Добрый день!';
    } else if (time.getHours() >= 18 && time.getHours() <= 22) {
      greeting = 'Добрый вечер!';
    } else {
      greeting = 'Доброй ночи!';
    }

    let timeZoneButton = document.getElementById('timeZoneButton');
    let timeZoneDisplay = document.getElementById('timeZoneDisplay');
    let resetButton = document.getElementById('resetButton');

    timeZoneButton.style.display = 'none';

    timeZoneDisplay.style.display = 'block';
    timeZoneDisplay.textContent = `Твой часовой пояс: ${timeZone} - ${greeting}`;
    resetButton.style.display = 'block';
  });

document.getElementById('resetButton').addEventListener('click', function () {
  location.reload();
});
