
$(document).ready(function () {

    var questionNumber = 0;

    var sec = 15;

    var counter = setInterval(timer, 1000);

    var score = 0;

    // question & answer array
    var questionBank = [
        {
            question: "Who has the most career points in the NBA?",
            choices: ["Michael Jordan", "Kareem Abdul-Jabar", "Kobe Bryant", "LeBron James"],
            correctAnswer: "Kareem Abdul-Jabar",
            image: '<iframe src="https://giphy.com/embed/3o751RQIwBFwyxu4iQ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-expression-kareem-abdul-jabbar-3o751RQIwBFwyxu4iQ">via GIPHY</a></p>'
        },
        {
            question: "Who was the 2017-18 NBA Rookie of the Year?",
            choices: ["Ben Simmons", "Jayson Tatum", "Josh Jackson", "Donovan Mitchell"],
            correctAnswer: "Ben Simmons",
            image: '<iframe src="https://giphy.com/embed/APDWvheiSClNXHQdXE" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-simmons-philadelphia-76ers-APDWvheiSClNXHQdXE">via GIPHY</a></p>'
        },
        {
            question: "Black Ops is the subtitle of which game?",
            choices: ["Call of Duty", "Battlefield", "Operation:", "Sims 4"],
            correctAnswer: "Call of Duty",
            image: "<img src='assets/images/blackOps.jpg' class='img-circle shadow'>"
        },
    ];


    function currentQuestion() {
        sec = 15;
        $(".current-question").text(questionBank[questionNumber].question);
        $("#answer1").text((questionBank[questionNumber].choices[0]))
        $("#answer2").text((questionBank[questionNumber].choices[1]))
        $("#answer3").text((questionBank[questionNumber].choices[2]))
        $("#answer4").text((questionBank[questionNumber].choices[3]))
        $(".score").text("Score: " + score + "/" + questionNumber)
        timer();

    }

    function timer() {
        sec = sec - 1;
        if (sec < 1) {
            clearInterval(counter);
            alert("Out of Time")
            questionNumber++
            currentQuestion()
            return;
        }

        $(".timer").text(sec)
    }



    function victory() {
        $(".current-question").html(questionBank[questionNumber].image);
        setTimeout(currentQuestion,5000);
    }


    $(".btn").click(function () {
        var userGuess = $(this).text();
        if (userGuess === questionBank[questionNumber].correctAnswer) {
            console.log(this)
            victory()
            questionNumber++
            score++
        } else {
            alert("You Lose")
            questionNumber++
            currentQuestion()
        }

    })

    currentQuestion()
})