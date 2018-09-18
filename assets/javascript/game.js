
$(document).ready(function () {

    var questionNumber = 0;

    var sec = 15;

    var counter = setInterval(timer, 1000);

    var score = 0;

    var lastQuestion = false;

    var failure = '<iframe src="https://giphy.com/embed/4OJFCEeGzYGs0" width="480" height="313" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wrong-err-4OJFCEeGzYGs0">via GIPHY</a></p>'

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
            question: "Which of these Laker greats was originally drafted by Charlotte?",
            choices: ["Kobe Bryant", "Magic Johnson", "Shaquille O'Neal", "Jerry West"],
            correctAnswer: "Kobe Bryant",
            image: '<iframe src="https://giphy.com/embed/xSSXHCyUPdfDa" width="480" height="275" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-draft-charlotte-hornets-xSSXHCyUPdfDa">via GIPHY</a></p>'
        },
        {
            question: "Which of these players has won the most MVP awards",
            choices: ["Kevin Garnett", "Kobe Bryant", "Steve Nash", "Kevin Durant"],
            correctAnswer: "Steve Nash",
            image: '<iframe src="https://giphy.com/embed/3o7aTnRulacz1EySti" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-basketball-all-star-game-3o7aTnRulacz1EySti">via GIPHY</a></p>'
        },
        {
            question: "Who hold the record for most points per game in their career?",
            choices: ["Wilt Chamberlain", "Kareem Abdul-Jabar", "Michael Jordan", "Magic Johnson"],
            correctAnswer: "Michael Jordan",
            image: '<iframe src="https://giphy.com/embed/l3q2JCu9lep6dAmyY" width="480" height="351" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-shrug-mj-l3q2JCu9lep6dAmyY">via GIPHY</a></p>'
        },
    ];



    function currentQuestion() {
        if (questionNumber < questionBank.length) {
        sec = 15;
        $(".current-question").text(questionBank[questionNumber].question);
        $("#answer1").text((questionBank[questionNumber].choices[0]));
        $("#answer2").text((questionBank[questionNumber].choices[1]));
        $("#answer3").text((questionBank[questionNumber].choices[2]));
        $("#answer4").text((questionBank[questionNumber].choices[3]));
        $(".score").text("Score: " + score + "/" + questionNumber);
        timer();
        lastQuestion = false;} else {
            $(".current-question").text("Game Over");
            $("#answer1").text("You got " +score+ " out of " +questionNumber + " correct");
            $("#answer2").text("");
            $("#answer3").text("");
            $("#answer4").text("");
            $(".score").text("Score: " + score + "/" + questionNumber);
        }
    }

    function timer() {
        if (questionNumber < questionBank.length) {   
        sec = sec - 1;
        if (sec < 1) {
            questionNumber++
            currentQuestion()
            return;
        }

        $(".timer").text(sec)
    } else {
        return false;
    }
    }



    function victory() {
        $(".current-question").html(questionBank[questionNumber].image);
        sec = 15;
        score++
        setTimeout(currentQuestion,5000);
    }


    $(".btn").click(function () {
        if (!lastQuestion) {
        var userGuess = $(this).text();
        if (userGuess === questionBank[questionNumber].correctAnswer) {
            console.log(this)
            victory();
            questionNumber++
            lastQuestion = true;
        } else {
            $(".current-question").html(failure);
            questionNumber++
            setTimeout(currentQuestion,5000);
        }
    } else {
        return false;
    }
    })

    currentQuestion()
    
})