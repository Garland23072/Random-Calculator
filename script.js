// สุ่มนะจ๊ะ

function createQuestion() {
    var symbols = ['+', '-', '*', '/'];
    var num1 = Math.floor(Math.random() * 11);
    var num2 = Math.floor(Math.random() * 11);
    var symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    var expression = `${num1} ${symbol} ${num2}`;
    var result = eval(expression);
    
    return {
        expression,
        result
    };
}
// คะแนน / คะแนนเต็ม
var score = 0;
var fullScore = 0;
// Update คะแนน
function updateScore() {
    document.getElementById("score").textContent = score;
    document.getElementById("fullScore").textContent = fullScore;
}
// แสดงคำถาม
function showMathProblem() {
    var randomQuestion = createQuestion();
    var questionText = document.getElementById("questionText");
    var answerInput = document.getElementById("userAnswer");
    answerInput.value = ""; // Clear the input field   
    questionText.textContent = `คำถาม: ${randomQuestion.expression}`;    
    document.getElementById("submitAnswer").addEventListener("click", function() {
        var userAnswer = parseFloat(answerInput.value);
        var correctAnswer = randomQuestion.result;        
        if (!isNaN(userAnswer) && userAnswer === correctAnswer) {
            score++;
        }        
        fullScore++;
        updateScore();
        document.getElementById("submitAnswer").removeEventListener("click", arguments.callee); // Remove the event listener
        showMathProblem(); // Show the next math problem
    });
}
// Reset คะแนน
function resetScore() {
    score = 0;
    fullScore = 0;
    updateScore();
}
// ปุ่มต่างๆ
document.getElementById("resetButton").addEventListener("click", resetScore);
// แสดงคำถามบน web
showMathProblem();
