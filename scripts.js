// JS for checking Exercise 1 (Variable Assignment)
function checkExercise1() {
    const userCode = document.getElementById("exercise1").value;
    let feedback = document.getElementById("exercise1-feedback");

    // Expected answer: age = 25 (or any valid Python variable assignment)
    if (userCode.includes("age") && userCode.includes("=")) {
        feedback.innerHTML = "Great job! Your variable assignment is correct.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "Oops! Make sure you are assigning a variable using =.";
        feedback.style.color = "red";
    }
}

// Function for toggling quizzes (for later quizzes)
function showQuiz(quizId) {
    const quiz = document.getElementById(quizId);
    quiz.style.display = quiz.style.display === 'none' ? 'block' : 'none';
}

// Function to check quiz answers
function checkAnswer(answerId, resultId, correctAnswer) {
    const userAnswer = document.getElementById(answerId).value.trim();
    const result = document.getElementById(resultId);

    if (userAnswer === correctAnswer) {
        result.innerHTML = "Correct!";
        result.style.color = "green";
    } else {
        result.innerHTML = "Try again. The correct answer is not " + userAnswer;
        result.style.color = "red";
    }
}