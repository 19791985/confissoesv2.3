function startGame() {
  console.log('A função startGame foi chamada!'); // ADICIONA ESTA LINHA
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  userAnswers = []; // Limpa as respostas anteriores
  setNextQuestion();
}
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.createElement('p');
questionElement.classList.add('question');
quizContainer.appendChild(questionElement);
const answersButtonsElement = document.createElement('div');
answersButtonsElement.classList.add('btn-grid');
quizContainer.appendChild(answersButtonsElement);

let shuffledQuestions, currentQuestionIndex;
let userAnswers = []; // Array para guardar as respostas do utilizador

const questions = [
  {
    question: "Como te sentes ao falar sobre fantasias sexuais com o teu parceiro?",
    answers: [
      { text: "Super Confortável", value: 4 },
      { text: "Confortável", value: 3 },
      { text: "Neutro", value: 2 },
      { text: "Desconfortável", value: 1 },
      { text: "Nada Confortável", value: 0 }
    ]
  },
  {
    question: "Quão à vontade te sentes ao experimentar novas posições sexuais?",
    answers: [
      { text: "Super Confortável", value: 4 },
      { text: "Confortável", value: 3 },
      { text: "Neutro", value: 2 },
      { text: "Desconfortável", value: 1 },
      { text: "Nada Confortável", value: 0 }
    ]
  },
  {
    question: "Como te sentes ao receber mensagens sensuais durante o dia?",
    answers: [
      { text: "Super Confortável", value: 4 },
      { text: "Confortável", value: 3 },
      { text: "Neutro", value: 2 },
      { text: "Desconfortável", value: 1 },
      { text: "Nada Confortável", value: 0 }
    ]
  },
  {
    question: "Quão confortável estás com a nudez na presença do teu parceiro?",
    answers: [
      { text: "Super Confortável", value: 4 },
      { text: "Confortável", value: 3 },
      { text: "Neutro", value: 2 },
      { text: "Desconfortável", value: 1 },
      { text: "Nada Confortável", value: 0 }
    ]
  },
   {
    question: "Como te sentes ao usar lingerie especial para o teu parceiro?",
    answers: [
      { text: "Super Confortável", value: 4 },
      { text: "Confortável", value: 3 },
      { text: "Neutro", value: 2 },
      { text: "Desconfortável", value: 1 },
      { text: "Nada Confortável", value: 0 }
    ]
  },
  {
    question: "Quão à vontade te sentes ao iniciar o ato sexual?",
    answers: [
      { text: "Super Confortável", value: 4 },
      { text: "Confortável", value: 3 },
      { text: "Neutro", value: 2 },
      { text: "Desconfortável", value: 1 },
      { text: "Nada Confortável", value: 0 }
    ]
  },
  {
    question: "Como te sentes ao receber elogios sobre a tua sensualidade?",
    answers: [
      { text: "Super Confortável", value: 4 },
      { text: "Confortável", value: 3 },
      { text: "Neutro", value: 2 },
      { text: "Desconfortável", value: 1 },
      { text: "Nada Confortável", value: 0 }
    ]
  },
  {
    question: "Quão confortável estás ao expressar os teus desejos sexuais?",
    answers: [
      { text: "Super Confortável", value: 4 },
      { text: "Confortável", value: 3 },
      { text: "Neutro", value: 2 },
      { text: "Desconfortável", value: 1 },
      { text: "Nada Confortável", value: 0 }
    ]
  },
  {
    question: "Como te sentes ao ter conversas abertas sobre sexo?",
    answers: [
      { text: "Super Confortável", value: 4 },
      { text: "Confortável", value: 3 },
      { text: "Neutro", value: 2 },
      { text: "Desconfortável", value: 1 },
      { text: "Nada Confortável", value: 0 }
    ]
  },
  {
    question: "Quão confortável estás com a ideia de apimentar a relação sexual?",
    answers: [
      { text: "Super Confortável", value: 4 },
      { text: "Confortável", value: 3 },
      { text: "Neutro", value: 2 },
      { text: "Desconfortável", value: 1 },
      { text: "Nada Confortável", value: 0 }
    ]
  }

];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});
prevButton.addEventListener('click', () => {
  currentQuestionIndex--;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  userAnswers = []; // Limpa as respostas anteriores
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer.value));
    answersButtonsElement.appendChild(button);
  });
  if (currentQuestionIndex > 0) {
    prevButton.classList.remove('hide');
  } else {
    prevButton.classList.add('hide');
  }
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    nextButton.classList.remove('hide');
  } else {
    nextButton.classList.add('hide');
    nextButton.innerText = 'Ver Resultados';
    nextButton.removeEventListener('click', () => {
      currentQuestionIndex++;
      setNextQuestion();
    });
    nextButton.addEventListener('click', showResults);
  }
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  prevButton.classList.add('hide');
  while (answersButtonsElement.firstChild) {
    answersButtonsElement.removeChild(answersButtonsElement.firstChild);
  }
}

function selectAnswer(value) {
  userAnswers.push(value); // Guarda o valor da resposta
  const buttons = answersButtonsElement.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.disabled = true; // Desabilita os botões após a seleção
  });
  nextButton.classList.remove('hide');
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function showResults() {
  resetState();
  let totalScore = userAnswers.reduce((sum, answer) => sum + answer, 0);
  let averageScore = totalScore / questions.length;
  questionElement.innerText = `Seu nível médio de conforto e intimidade é: ${averageScore.toFixed(2)}`;
  nextButton.classList.add('hide');
  prevButton.classList.add('hide');
}
