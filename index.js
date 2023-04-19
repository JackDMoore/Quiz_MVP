var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var myQuestions = [
	{
		question: "Who did Henry VII, the first Tudor King, defeat at the Battle of Bosworth in 1485 in order to take the throne?",
		answers: {
			a: 'King Richard I',
			b: 'King Richard III',
			c: 'Kind Richard II'
		},
		correctAnswer: 'b'
	},
	{
		question: "To secure his position, and to end the Wars of the Roses, who did Henry VII marry in 1486?",
		answers: {
			a: 'Elizabeth Woodville',
			b: 'Anne Neville',
			c: 'Elizabeth Of York'
		},
		correctAnswer: 'c'
	},
    {
        question: "While Henry VII had at least seven children, only four survived infancy. Who was his eldest child?",
		answers: {
			a: 'Henry VIII',
			b: 'Margaret of Scotland',
			c: 'Prince Arthur'
		},
		correctAnswer: 'c'
    },
	{
		question: "In which royal palace did Henry VII die on 21 April 1509?",
		answers: {
			a: 'Richmond Palace',
			b: '5',
			c: '10'
		},
		correctAnswer: 'a'
	},
	{
		question: "Henry VIII was eighteen years old when he became King in 1509. Who did he marry that same year?",
		answers: {
			a: 'Catherine Of Braganza',
			b: 'Catherine Of Aragon',
			c: 'Anne Of Cleves'
		},
		correctAnswer: 'b'
	},
];


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);