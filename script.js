// สุ่มนะจ๊ะ

function createQuestion() {
    const symbols = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    const expression = `${num1} ${symbol} ${num2}`;
    const result = eval(expression);
    
    return {
        expression,
        result
    };
}
// คะแนน / คะแนนเต็ม
let score = 0;
let fullScore = 0;
// Update คะแนน
function updateScore() {
    document.getElementById("score").textContent = score;
    document.getElementById("fullScore").textContent = fullScore;
}
// แสดงคำถาม
function showMathProblem() {
    const randomQuestion = createQuestion();
    const questionText = document.getElementById("questionText");
    const answerInput = document.getElementById("userAnswer");
    answerInput.value = ""; // Clear the input field   
    questionText.textContent = `คำถาม: ${randomQuestion.expression}`;    
    document.getElementById("submitAnswer").addEventListener("click", function() {
        const userAnswer = parseFloat(answerInput.value);
        const correctAnswer = randomQuestion.result;        
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