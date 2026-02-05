// 1. Les questions du quiz
const questions = [
  {
    question: "Quel braquage peut se faire en solo dans GTA Online ?",
    answers: ["Braquage du Casino", "The Doomsday Heist", "Cayo Perico", "Prison Break"],
    correct: 2
  },
  {
    question: "Combien y a-t-il de personnages jouables dans GTA 5 solo ?",
    answers: ["2", "3", "4", "5"],
    correct: 1
  },
  {
    question: "Quel personnage a la capacité de ralentir le temps en voiture ?",
    answers: ["Michael", "Franklin", "Trevor", "Lester"],
    correct: 1
  },
  {
    question: "Quel est le braquage le plus rentable de GTA Online ?",
    answers: ["Casino", "Prison Break", "Cayo Perico", "Pacific Standard"],
    correct: 2
  },
  {
    question: "Pourquoi les joueurs solo vont sur GTA Online ?",
    answers: ["Pour les mises à jour", "Pour l'argent", "Pour jouer avec des amis", "Toutes les réponses"],
    correct: 3
  }
];

// 2. Variables
let currentQuestion = 0;
let score = 0;

// 3. Récupération des éléments HTML
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

// 4. Afficher une question
function showQuestion() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
  questionEl.textContent = questions[currentQuestion].question;

  questions[currentQuestion].answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => checkAnswer(index);
    answersEl.appendChild(button);
  });
}

// 5. Vérifier la réponse
function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    score++;
  }
  nextBtn.style.display = "block";
}

// 6. Question suivante
nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

// 7. Résultat final
function showResult() {
  questionEl.textContent = "Quiz terminé 🎉";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  let message = "";

  if (score <= 2) message = "🎮 Joueur occasionnel";
  else if (score <= 4) message = "😎 Gamer confirmé";
  else message = "👑 Légende de San Andreas";

  resultEl.textContent = `Score : ${score}/${questions.length} — ${message}`;
}

// 8. Lancer le quiz
showQuestion();
