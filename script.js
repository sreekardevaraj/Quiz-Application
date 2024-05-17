const quizContainer = document.getElementById("quiz-container")
const questionElement = document.getElementById("question")
const optionsContainer = document.getElementById("options-container")
const submitBtn = document.getElementById("submitBtn")
const feedbackElement = document.getElementById("feedback")
const scoreElement = document.getElementById("score")

let currentQuestionIndex = 0;
let score = 0;


const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin","Madrid","Paris","Rome"],
        correctAnswer: "Paris"
    },

    {
        question: "What is the capital of Telangana?",
        options: ["Berlin","Hyderabad","Andhra","Rome"],
        correctAnswer: "Hyderabad"
    }
]



function loadQuestions()
{
    const currentQuestion = quizQuestions[currentQuestionIndex]
    questionElement.innerHTML = currentQuestion.question

    optionsContainer.innerHTML = ""

    currentQuestion.options.forEach((options,index)=>{

        const optionButton = document.createElement("button")
        optionButton.innerHTML = options;


        optionButton.onclick = function() 
        {
            selectAnswer(options, currentQuestion.correctAnswer)
        }

        optionsContainer.appendChild(optionButton)
    })

}

loadQuestions();



function selectAnswer(selectedOption, correctAnswer) 
{
    if(selectedOption === correctAnswer)
    {
        feedbackElement.textContent = "Correct!"
        score++;
    }
    else
    {
        feedbackElement.textContent = "Incorrect. The correct answer is: " + correctAnswer
    }

    currentQuestionIndex++;

    if(currentQuestionIndex < quizQuestions.length)
    {
        loadQuestions()
    }
    else
    {
        endQuiz()
    }
}




function endQuiz() 
{
    quizContainer.innerHTML = "<h2>Quiz Completed</h2>"
    scoreElement.textContent = "Final Score: " + score + " out of " + quizQuestions.length
}



function submitAnswer() 
{
    const selectedOption = document.querySelector('input[name="option: checked"]')

    if(selectedOption)
    {
        selectAnswer(selectedOption.value)
    }
}
