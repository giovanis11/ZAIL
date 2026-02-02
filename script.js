const questions = [
  {
    question: "Where did we first meet?",
    options: ["Coffee Shop", "Class", "Online", "Party"],
    correct: 1
  },
  {
    question: "What food do we always argue about?",
    options: ["Pizza", "Tuna", "Burgers", "Your High Day"],
    correct: 3
  },
  {
    question: "What nickname do I call you?",
    options: ["Love", "Jo", "Habibti", "Baby"],
    correct: 0
  },
  {
    question: "When is my Birthday?",
    options: ["22 Nov", "21 Nov", "22 Oct", "I don't know"],
    correct: 2
  },
  {
    question: "When are your plans for 14 Nov?",
    options: ["Club", "Me", "I'm About to find Out", "Nothing"],
    correct: 2
  },
  {
    question: "Who loves who more?",
    options: ["Me you", "You", "You", "You"],
    correct: 0
  }

];

let currentQuestion = 0;
let noClicks = 0;

const titleEl = document.getElementById("title");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const cardEl = document.getElementById("card");

function startQuiz() {
  currentQuestion = 0;
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  animateCard();

  titleEl.textContent = "Quick check 💕";
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];

  if (selected === q.correct) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showFinal();
    }
  } else {
    animateCard();
    questionEl.textContent = "Hmm… that doesn’t sound like you 👀";
  }
}

function showFinal() {
  animateCard();
  noClicks = 0;

  titleEl.textContent = "Now that I know it's my Joelle 💖";
  questionEl.textContent = "Will you be my Valentine? ❤️";

  optionsEl.innerHTML = `
    <button id="yesBtn">YES 💘</button>
    <button class="secondary" id="noBtn">NO 😅</button>
  `;

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  yesBtn.onclick = sayYes;

  noBtn.onclick = () => {
    noClicks++;

    const yesScale = Math.min(1 + noClicks * 0.25, 3);
    const noScale = Math.max(1 - noClicks * 0.15, 0.4);

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${noScale})`;

    if (noClicks === 1) questionEl.textContent = "Are you sure? 🥺";
    else if (noClicks === 2) questionEl.textContent = "Think again 😏";
    else questionEl.textContent = "You already know the answer 💕";
  };
}

function sayYes() {
  animateCard();

  titleEl.textContent = "YAY 💖";
  questionEl.textContent = "Best answer ever ❤️";

  optionsEl.innerHTML = `
    <p style="font-size:18px; margin-top:10px;">
      I love you so much 💕
    </p>
    <button class="plan-btn" onclick="showPlans()">
      See our plans for the 14th 💖
    </button>
  `;
}

function showPlans() {
  animateCard();

  titleEl.textContent = "Our plans 💕";
  questionEl.textContent = "Just us, good vibes, and something special ✨";

  optionsEl.innerHTML = `
    <img 
      src="plans.png" 
      alt="Our plans for the 14th"
      class="plan-image"
    />
  `;
}

function animateCard() {
  cardEl.style.animation = "none";
  cardEl.offsetHeight;
  cardEl.style.animation = "fadeIn 0.6s ease";
}
