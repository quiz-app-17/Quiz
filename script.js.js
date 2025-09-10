const quizData = [
  // ---- India related (your 10 questions) ----
  {
    question: "What is the capital of India?",
    a: "Mumbai",
    b: "New Delhi",
    c: "Kolkata",
    d: "Chennai",
    correct: "b",
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    a: "Jawaharlal Nehru",
    b: "Mahatma Gandhi",
    c: "B. R. Ambedkar",
    d: "Subhas Chandra Bose",
    correct: "b",
  },
  {
    question: "Which is the national animal of India?",
    a: "Lion",
    b: "Tiger",
    c: "Elephant",
    d: "Peacock",
    correct: "b",
  },
  {
    question: "Which Indian state is known as the Land of Five Rivers?",
    a: "Punjab",
    b: "Haryana",
    c: "Rajasthan",
    d: "Gujarat",
    correct: "a",
  },
  {
    question: "What is the currency of India?",
    a: "Dollar",
    b: "Rupee",
    c: "Pound",
    d: "Dinar",
    correct: "b",
  },
  {
    question: "Who was the first Prime Minister of India?",
    a: "Sardar Vallabhbhai Patel",
    b: "Lal Bahadur Shastri",
    c: "Jawaharlal Nehru",
    d: "Indira Gandhi",
    correct: "c",
  },
  {
    question: "Which festival is known as the Festival of Lights?",
    a: "Holi",
    b: "Diwali",
    c: "Pongal",
    d: "Eid",
    correct: "b",
  },
  {
    question: "Which is the longest river in India?",
    a: "Yamuna",
    b: "Brahmaputra",
    c: "Godavari",
    d: "Ganga",
    correct: "d",
  },
  {
    question: "Where is the famous Taj Mahal located?",
    a: "Delhi",
    b: "Jaipur",
    c: "Agra",
    d: "Lucknow",
    correct: "c",
  },
  {
    question: "Who wrote the Indian National Anthem “Jana Gana Mana?",
    a: "Rabindranath Tagore",
    b: "Bankim Chandra Chatterjee",
    c: "Sarojini Naidu",
    d: "Subramania Bharati",
    correct: "a",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Venus",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "b",
  },
  {
    question: "What is the largest mammal in the world?",
    a: "African Elephant",
    b: "Blue Whale",
    c: "Giraffe",
    d: "Whale Shark",
    correct: "b",
  },
  {
    question: "Who painted the Mona Lisa?",
    a: "Pablo Picasso",
    b: "Leonardo da Vinci",
    c: "Vincent Van Gogh",
    d: "Michelangelo",
    correct: "b",
  },
  {
    question: "What is the smallest prime number?",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    correct: "c",
  },
  {
    question: "Which is the largest continent in the world?",
    a: "Africa",
    b: "Asia",
    c: "North America",
    d: "Europe",
    correct: "b",
  },
  {
    question: "What is the chemical symbol of Gold?",
    a: "Au",
    b: "Ag",
    c: "Go",
    d: "Gd",
    correct: "a",
  },
  {
    question: "Who developed the theory of relativity?",
    a: "Isaac Newton",
    b: "Albert Einstein",
    c: "Galileo Galilei",
    d: "Nikola Tesla",
    correct: "b",
  },
  {
    question: "Which ocean is the largest?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Pacific Ocean",
    d: "Arctic Ocean",
    correct: "c",
  },
  {
    question: "Which gas do humans inhale to survive?",
    a: "Carbon Dioxide",
    b: "Oxygen",
    c: "Nitrogen",
    d: "Helium",
    correct: "b",
  },
  {
    question: "What is the fastest land animal?",
    a: "Lion",
    b: "Horse",
    c: "Cheetah",
    d: "Tiger",
    correct: "c",
  },
  {
    question: "In which year did World War II end?",
    a: "1942",
    b: "1945",
    c: "1948",
    d: "1950",
    correct: "b",
  },
  {
    question: "Which is the tallest mountain in the world?",
    a: "K2",
    b: "Mount Everest",
    c: "Kangchenjunga",
    d: "Makalu",
    correct: "b",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    a: "50°C",
    b: "90°C",
    c: "100°C",
    d: "120°C",
    correct: "c",
  },
  {
    question: "Which country is called the Land of the Rising Sun?",
    a: "China",
    b: "Japan",
    c: "Thailand",
    d: "Korea",
    correct: "b",
  },
  {
    question: "What is the national sport of Canada?",
    a: "Ice Hockey",
    b: "Cricket",
    c: "Baseball",
    d: "Basketball",
    correct: "a",
  },
  {
    question: "How many sides does a hexagon have?",
    a: "5",
    b: "6",
    c: "7",
    d: "8",
    correct: "b",
  },
  {
    question: "Which element has the symbol O?",
    a: "Osmium",
    b: "Oxygen",
    c: "Oxide",
    d: "Ozone",
    correct: "b",
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    a: "Germany",
    b: "Brazil",
    c: "France",
    d: "Argentina",
    correct: "c",
  },
  {
    question: "Who was the first man to walk on the Moon?",
    a: "Yuri Gagarin",
    b: "Neil Armstrong",
    c: "Buzz Aldrin",
    d: "Michael Collins",
    correct: "b",
  },
  {
    question: "Which country is famous for the Great Wall?",
    a: "India",
    b: "Japan",
    c: "China",
    d: "Mongolia",
    correct: "c",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    a: "Gold",
    b: "Iron",
    c: "Diamond",
    d: "Platinum",
    correct: "c",
  },
  {
    question: "Which is the smallest ocean in the world?",
    a: "Arctic Ocean",
    b: "Indian Ocean",
    c: "Atlantic Ocean",
    d: "Southern Ocean",
    correct: "a",
  },
  {
    question: "Who invented the telephone?",
    a: "Thomas Edison",
    b: "Alexander Graham Bell",
    c: "Nikola Tesla",
    d: "Guglielmo Marconi",
    correct: "b",
  },
  {
    question: "How many bones are there in the adult human body?",
    a: "206",
    b: "208",
    c: "210",
    d: "212",
    correct: "a",
  },
  {
    question: "Which bird is known as the symbol of peace?",
    a: "Eagle",
    b: "Dove",
    c: "Swan",
    d: "Peacock",
    correct: "b",
  },
  {
    question: "Which gas is used to extinguish fire?",
    a: "Oxygen",
    b: "Carbon Dioxide",
    c: "Hydrogen",
    d: "Nitrogen",
    correct: "b",
  },
  {
    question: "Which is the longest river in the world?",
    a: "Amazon",
    b: "Nile",
    c: "Yangtze",
    d: "Mississippi",
    correct: "b",
  },
  {
    question: "How many players are there in a cricket team?",
    a: "9",
    b: "10",
    c: "11",
    d: "12",
    correct: "c",
  },
  {
    question: "What is the capital of Australia?",
    a: "Sydney",
    b: "Melbourne",
    c: "Canberra",
    d: "Perth",
    correct: "c",
  },
  {
    question: "Which instrument measures atmospheric pressure?",
    a: "Thermometer",
    b: "Barometer",
    c: "Hygrometer",
    d: "Altimeter",
    correct: "b",
  },
  {
    question: "Who discovered gravity?",
    a: "Albert Einstein",
    b: "Isaac Newton",
    c: "Galileo Galilei",
    d: "James Watt",
    correct: "b",
  },
  {
    question: "Which is the largest desert in the world?",
    a: "Sahara",
    b: "Thar",
    c: "Gobi",
    d: "Kalahari",
    correct: "a",
  },
  {
    question: "Which is the smallest country in the world?",
    a: "Monaco",
    b: "Vatican City",
    c: "Maldives",
    d: "San Marino",
    correct: "b",
  },
  {
    question: "Which blood group is known as universal donor?",
    a: "A",
    b: "B",
    c: "O negative",
    d: "AB positive",
    correct: "c",
  },
  {
    question: "What is the capital of France?",
    a: "Paris",
    b: "Berlin",
    c: "London",
    d: "Rome",
    correct: "a",
  },
  {
    question: "How many continents are there in the world?",
    a: "5",
    b: "6",
    c: "7",
    d: "8",
    correct: "c",
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    a: "Germany",
    b: "France",
    c: "Italy",
    d: "Spain",
    correct: "b",
  },
  {
    question: "Which part of the plant conducts photosynthesis?",
    a: "Root",
    b: "Leaf",
    c: "Stem",
    d: "Flower",
    correct: "b",
  },
  {
    question: "What is the capital of Egypt?",
    a: "Cairo",
    b: "Alexandria",
    c: "Luxor",
    d: "Giza",
    correct: "a",
  },
  {
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    a: "Vitamin A",
    b: "Vitamin C",
    c: "Vitamin D",
    d: "Vitamin K",
    correct: "c",
  },
  {
    question: "Which instrument is used to measure earthquakes?",
    a: "Seismograph",
    b: "Barometer",
    c: "Thermometer",
    d: "Hygrometer",
    correct: "a",
  },
  {
    question: "Which country is known as the Land of Kangaroos?",
    a: "India",
    b: "Australia",
    c: "South Africa",
    d: "New Zealand",
    correct: "b",
  },
];

let currentQuiz = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll("input[name='answer']");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  resetColors();
  const currentData = quizData[currentQuiz];
  questionEl.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
}

function deselectAnswers() {
  answersEls.forEach((answer) => (answer.checked = false));
}

function resetColors() {
  document.querySelectorAll("label").forEach((lbl) => {
    lbl.style.backgroundColor = "";
  });
}

function getSelected() {
  let answer;
  answersEls.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    const correct = quizData[currentQuiz].correct;

    if (answer === correct) {
      score++;
      document.getElementById(correct + "_text").style.backgroundColor = "lightgreen";
    } else {
      document.getElementById(correct + "_text").style.backgroundColor = "lightgreen";
      document.getElementById(answer + "_text").style.backgroundColor = "salmon";
    }

    // 5 sec delay before moving to next question
    setTimeout(() => {
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly!</h2>
        <button onclick="location.reload()">Reload</button>`;
      }
    }, 3000);
  }
});
