const letters = "TSLAYEEVRN".split('');
const positions = [
  
  { x: 800, y: 100 },
  
  { x: 800, y: 900 },
  { x: 200, y: 900 },
  { x: 900, y: 500 },
  { x: 100, y: 500 },
  { x: 800, y: 100 },
  { x: 900, y: 500 },
  { x: 800, y: 900 },
  { x: 200, y: 100 },
  { x: 200, y: 900 },
];
let currentLetterIndex = 0;

function moveLetterToPosition(index) {
  const letterElement = document.getElementById('letter');
  const position = positions[index];
  letterElement.textContent = letters[index];
  letterElement.style.left = `${position.x}px`;
  letterElement.style.top = `${position.y}px`;
  letterElement.style.display = 'block';
}

function showNextLetter() {
  if (currentLetterIndex < letters.length) {
    moveLetterToPosition(currentLetterIndex);
    setTimeout(() => {
      document.getElementById('letter').style.display = 'none';
      currentLetterIndex++;
      if (currentLetterIndex < letters.length) {
        setTimeout(showNextLetter, 26 * 60 * 1000); // 26 Minuten warten bis zum nächsten Buchstaben
    } else {
        // Zeige den Start-Button wieder an, wenn alle Buchstaben angezeigt wurden
        document.getElementById('startButton').style.display = 'block';
      }
    }, 240000); // 1 Sekunde Buchstabe anzeigen
  }
}

document.getElementById('startButton').addEventListener('click', () => {
  if (currentLetterIndex === 0) {
    document.getElementById('startButton').style.display = 'none';
    showNextLetter();
  }
});