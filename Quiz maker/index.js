const quiz = [
  {
    question: "Which country won the 2011 ICC Cricket World Cup?",
    options: ["Australia", "India", "England", "Pakistan"],
    answer: "India"
  },
  {
    question: "How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rohit Sharma"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "How many runs are awarded for a six?",
    options: ["4", "5", "6", "7"],
    answer: "6"
  },
  {
    question: "Which country invented cricket?",
    options: ["India", "Australia", "England", "South Africa"],
    answer: "England"
  },
  {
    question: "How many overs are played by one team in an ODI match?",
    options: ["20", "40", "50", "60"],
    answer: "50"
  },
  {
    question: "Who is known as 'Captain Cool'?",
    options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "KL Rahul"],
    answer: "MS Dhoni"
  },
  {
    question: "Which ball is generally used in Test cricket?",
    options: ["White Ball", "Red Ball", "Yellow Ball", "Blue Ball"],
    answer: "Red Ball"
  },
  {
    question: "Who holds the record for the highest individual ODI score?",
    options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"],
    answer: "Rohit Sharma"
  },
  {
    question: "What is the highest individual ODI score?",
    options: ["200", "209", "250", "264"],
    answer: "264"
  },
  {
    question: "Which tournament is played every four years?",
    options: ["IPL", "Asia Cup", "ICC Cricket World Cup", "Champions Trophy"],
    answer: "ICC Cricket World Cup"
  },
  {
    question: "Which country hosts the IPL?",
    options: ["Australia", "England", "India", "South Africa"],
    answer: "India"
  },
  {
    question: "How many wickets can a team lose in one innings?",
    options: ["8", "9", "10", "11"],
    answer: "10"
  },
  {
    question: "Which Indian fast bowler is famous for yorkers?",
    options: ["Mohammed Shami", "Jasprit Bumrah", "Zaheer Khan", "Ishant Sharma"],
    answer: "Jasprit Bumrah"
  },
  {
    question: "Who stands behind the stumps?",
    options: ["Slip Fielder", "Bowler", "Wicketkeeper", "Mid-off"],
    answer: "Wicketkeeper"
  },
  {
    question: "What is a score of zero called in cricket?",
    options: ["Goose", "Duck", "Zero Out", "Hat-trick"],
    answer: "Duck"
  },
  {
    question: "Who is known as the 'Universe Boss'?",
    options: ["Andre Russell", "Chris Gayle", "AB de Villiers", "Kieron Pollard"],
    answer: "Chris Gayle"
  },
  {
    question: "Which country won the first ICC T20 World Cup in 2007?",
    options: ["Pakistan", "India", "Australia", "England"],
    answer: "India"
  },
  {
    question: "How long is a cricket pitch?",
    options: ["20 yards", "21 yards", "22 yards", "24 yards"],
    answer: "22 yards"
  },
  {
    question: "Who hit the winning six in the 2011 ICC Cricket World Cup Final?",
    options: ["Virat Kohli", "Yuvraj Singh", "MS Dhoni", "Gautam Gambhir"],
    answer: "MS Dhoni"
  },
  {
  question: "Who won the ICC Champions Trophy 2013?",
  options: ["India", "England", "Australia", "Pakistan"],
  answer: "India"
  },
  {
  question: "Who scored the first double century in ODI cricket?",
  options: ["Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma", "Chris Gayle"],
  answer: "Sachin Tendulkar"
  },
  {
  question: "Which country won the ICC Cricket World Cup 2019?",
  options: ["England", "New Zealand", "India", "Australia"],
  answer: "England"
  },
  {
  question: "Who has taken the most wickets in Test cricket?",
  options: ["Shane Warne", "James Anderson", "Muttiah Muralitharan", "Anil Kumble"],
  answer: "Muttiah Muralitharan"
  },
  {
  question: "How many balls are there in one over?",
  options: ["5", "6", "7", "8"],
  answer: "6"
  },
  {
  question: "Which Indian player is known as the 'Hitman'?",
  options: ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Shubman Gill"],
  answer: "Rohit Sharma"
  },
  {
  question: "Who was the captain of India in the 1983 World Cup?",
  options: ["Sunil Gavaskar", "Kapil Dev", "Mohinder Amarnath", "Ravi Shastri"],
  answer: "Kapil Dev"
  },
  {
  question: "Which country has won the most ODI World Cups?",
  options: ["India", "England", "Australia", "West Indies"],
  answer: "Australia"
  },
  {
  question: "What is the maximum number of fielders allowed outside the circle during Powerplay in ODI?",
  options: ["2", "3", "4", "5"],
  answer: "2"
  },
  {
  question: "Who is known as 'Mr. 360'?",
  options: ["AB de Villiers", "Virat Kohli", "Chris Gayle", "David Warner"],
  answer: "AB de Villiers"
  },
  {
  question: "Which stadium is known as the 'Home of Cricket'?",
  options: ["MCG", "Lords", "Eden Gardens", "The Oval"],
  answer: "Lords"
  },
  {
  question: "Who has scored the fastest century in ODI cricket?",
  options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Glenn Maxwell"],
  answer: "AB de Villiers"
  },
  {
  question: "Which Indian bowler took all 10 wickets in a Test innings?",
  options: ["Harbhajan Singh", "Anil Kumble", "R Ashwin", "Kapil Dev"],
  answer: "Anil Kumble"
  },
  {
  question: "How many umpires are present on the field during a cricket match?",
  options: ["1", "2", "3", "4"],
  answer: "2"
  },
  {
  question: "Which IPL team has won the most titles?",
  options: ["Chennai Super Kings", "Mumbai Indians", "Kolkata Knight Riders", "Sunrisers Hyderabad"],
  answer: "Mumbai Indians"
  },
  {
  question: "Who was the first batsman to score 300 in Test cricket?",
  options: ["Brian Lara", "Virender Sehwag", "Don Bradman", "Andy Sandham"],
  answer: "Andy Sandham"
  },
  {
  question: "Which country won the first Cricket World Cup in 1975?",
  options: ["Australia", "England", "West Indies", "India"],
  answer: "West Indies"
  },
  {
  question: "Who has hit the most sixes in international cricket?",
  options: ["Chris Gayle", "Shahid Afridi", "Rohit Sharma", "MS Dhoni"],
  answer: "Chris Gayle"
  },
  {
  question: "Which Indian batsman is called the 'Wall'?",
  options: ["Virender Sehwag", "Rahul Dravid", "VVS Laxman", "Sourav Ganguly"],
  answer: "Rahul Dravid"
  },
  {
  question: "What is the maximum width of a cricket bat as per ICC rules?",
  options: ["4.25 inches", "4 inches", "4.5 inches", "5 inches"],
  answer: "4.25 inches"
  },
  {
  question: "Which player has scored the most runs in Test cricket?",
  options: ["Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis", "Joe Root"],
  answer: "Sachin Tendulkar"
  },
  {
  question: "Who was the first cricketer to score 100 international centuries?",
  options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Kumar Sangakkara"],
  answer: "Sachin Tendulkar"
  },
  {
  question: "Which country won the ICC T20 World Cup 2021?",
  options: ["Australia", "New Zealand", "India", "England"],
  answer: "Australia"
  },
  {
  question: "Who has the best bowling figures in an ODI innings?",
  options: ["Chaminda Vaas", "Glenn McGrath", "Muttiah Muralitharan", "Mitchell Starc"],
  answer: "Chaminda Vaas"
  },
  {
  question: "What is the length of a cricket pitch in feet?",
  options: ["60 ft", "66 ft", "72 ft", "75 ft"],
  answer: "66 ft"
  },
];

function RandomQuestion(){

  const data = new Set();

  while(data.size < 5){
    const index = Math.floor(Math.random()*quiz.length);
    data.add(quiz[index]);
  }

  return [...data];
}

const form = document.querySelector('form');
const problem = RandomQuestion();
const original_answer = {};

problem.forEach((obj, index) => {
  const heading = document.createElement('h3');
  heading.textContent = `${index+1}. ${obj.question}`;
  form.appendChild(heading);
  original_answer[`q${index+1}`] = obj.answer;

  // four options

  obj.options.forEach((data) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `q${index+1}`;
    input.value = data;
    label.appendChild(input);
    label.appendChild(document.createTextNode(data));

    form.appendChild(label);
    form.appendChild(document.createElement('br'));
  });
});

const submit_btn = document.createElement('button');
submit_btn.type = 'submit'
submit_btn.innerText = 'Submit Quiz';
form.appendChild(submit_btn);

// key value

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const Data = new FormData(form);

    let Result = 0;
     
    for(let [key, value] of Data.entries()){
        if(value === original_answer[key]){
            Result++;
        }
    };

    const out = document.createElement('div');
    out.className = 'result';
    if( '0' ===`${Result}`){
      out.innerText = `${Result} out of 5 is correct 😢`;
      out.style.backgroundColor = '#D32F2F';
      document.body.style.backgroundColor = '#FFEBEE';
      out.style.color = 'white';
    }
    else if( '1' ===`${Result}`){
      out.innerText = `${Result} out of 5 is correct 😒`;
      out.style.backgroundColor = '#F57C00';
      document.body.style.backgroundColor = '#FFF3E0';
      out.style.color = 'white';
    }
    else if( '2' ===`${Result}`){
      out.innerText = `${Result} out of 5 is correct 👍`;
      out.style.backgroundColor = '#FBC02D';
      document.body.style.backgroundColor = '#FFFDE7';
      out.style.color = 'white';
    }
    else if( '3' ===`${Result}`){
      out.innerText = `${Result} out of 5 is correct 😊`;
      out.style.backgroundColor = '#7CB342';
      document.body.style.backgroundColor = '#F1F8E9';
      out.style.color = 'white';
    }
    else if( '4' ===`${Result}`){
      out.innerText = `${Result} out of 5 is correct 😍`;
      out.style.backgroundColor = '#43A047';
      document.body.style.backgroundColor = '#E8F5E9';
      out.style.color = 'white';
    }
    else {
      out.innerText = `${Result} out of 5 is correct ❤️`;
      out.style.backgroundColor = '#2E7D32';
      document.body.style.backgroundColor = '#E8F5E9';
      out.style.color = 'white';
    }
    form.appendChild(out);
});
