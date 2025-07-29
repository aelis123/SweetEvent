const letters = "RLIDKRUYFELENR".split('');
const positions = [
  

  { x: 800, y: 100 },
  { x: 800, y: 900 },
  { x: 200, y: 900 },
  { x: 900, y: 500 },
  { x: 100, y: 500 },
  { x: 800, y: 100 },
  { x: 200, y: 100 },
  { x: 900, y: 500 },
  { x: 200, y: 900 },
  { x: 800, y: 900 },
  { x: 200, y: 100 },
  { x: 800, y: 100 },
  { x: 200, y: 900 },
  { x: 900, y: 500 },
];
let currentLetterIndex = 0;

function moveLetterToPosition(index) {
  const letterElement = document.getElementById('letter');
  const position = positions[index];
  letterElement.textContent = letters[index];
  letterElement.style.left = `${position.x}px`;
  letterElement.style.top = `${position.y}px`;
  letterElement.style.display = 'block';

  // ✨ Sound abspielen
  const popSound = document.getElementById('popSound');
  popSound.volume = 1.0; // Maximal (Standardwert)

  popSound.currentTime = 0; // Zurück an den Anfang
  popSound.play().catch(e => {
    console.warn('Sound konnte nicht abgespielt werden:', e);
  });
}

function showNextLetter() {
  if (currentLetterIndex < letters.length) {
    moveLetterToPosition(currentLetterIndex);
    setTimeout(() => {
      document.getElementById('letter').style.display = 'none';
      currentLetterIndex++;
      if (currentLetterIndex < letters.length) {
        setTimeout(showNextLetter, 21.43 * 60 * 1000); // 21,43 Minuten warten bis zum nächsten Buchstaben
    } else {
        // Zeige den Start-Button wieder an, wenn alle Buchstaben angezeigt wurden
        document.getElementById('startButton').style.display = 'block';
      }
    }, 240000); // 4 Minuten Buchstabe anzeigen
  }
}

document.getElementById('startButton').addEventListener('click', () => {
  if (currentLetterIndex === 0) {
    document.getElementById('startButton').style.display = 'none';
    showNextLetter();
  }
});