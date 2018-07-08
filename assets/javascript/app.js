$('document').ready(function () {

    var questions = {
        q1: {
            q: "What is generally considered to be the first \"pony car\"?",
            a: {
                a1: [
                    "Pontiac Firebird",
                    false
                ],
                a2: [
                    "Ford Mustang",
                    true
                ],
                a3: [
                    "Mercury Cougar",
                    false
                ],
                a4: [
                    "Chevorlet Camero",
                    false
                ]
            }
        },
        q2: {
            q: "What was the first Japanese car to be produced in the United States?",
            a: {
                a1: [
                    "Honda Accord",
                    true
                ],
                a2: [
                    "Mazda Miata",
                    false
                ],
                a3: [
                    "Toyota Camry",
                    false
                ],
                a4: [
                    "Nissan Maxima",
                    false
                ]
            }
        },
        q3: {
            q: "What car sold more than one million units in 1965, setting a record that still stands today?",
            a: {
                a1: [
                    "Buick Wildcat",
                    false
                ],
                a2: [
                    "Pontiac GTO",
                    false
                ],
                a3: [
                    "Ford Thunderbird",
                    false
                ],
                a4: [
                    "Chevrolet Impala",
                    true
                ]
            }
        },
        q4: {
            q: "What three specialty convertibles did General Motors originally introduce in 1953?",
            a: {
                a1: [
                    "Buick Skylark, Oldsmobile Fiesta & Cadillac Eldorado",
                    true
                ],
                a2: [
                    "Buick Roadmaster, Buick Riviera & Buick Super",
                    false
                ],
                a3: [
                    "Buick Lesabre, Oldsmobile Straycat & Cadillac Fastback",
                    false
                ],
                a4: [
                    "Cadillac Fleetwood, Oldsmobile Omega, Ford Victoria",
                    false
                ]
            }
        },
        q5: {
            q: "What year was the Corvette first introduced?",
            a: {
                a1: [
                    "1943",
                    false
                ],
                a2: [
                    "1953",
                    true
                ],
                a3: [
                    "1963",
                    false
                ],
                a4: [
                    "1973",
                    false
                ]
            }
        },
        q6: {
            q: "What was the first car to be mass-produced?",
            a: {
                a1: [
                    "Model T",
                    true
                ],
                a2: [
                    "Model A",
                    false
                ],
                a3: [
                    "Packard",
                    false
                ],
                a4: [
                    "Duryea Motor Wagon",
                    false
                ]
            }
        },
        q7: {
            q: "What was the first car to come equipped with anti-lock brakes?",
            a: {
                a1: [
                    "Lincoln Continental Mark III",
                    false
                ],
                a2: [
                    "Shelby Cobra",
                    false
                ],
                a3: [
                    "BMW 1600",
                    false
                ],
                a4: [
                    "Jensen FF",
                    true
                ]
            }
        },
        q8: {
            q: "What was the first commercially available hybrid gasoline-electric car in the United States?",
            a: {
                a1: [
                    "Ford Escape Hybrid",
                    false
                ],
                a2: [
                    "Toyota Prius",
                    false
                ],
                a3: [
                    "Honda Insight",
                    true
                ],
                a4: [
                    "Saturn Vue",
                    false
                ]
            }
        },
        q9: {
            q: "What kind of car did Starsky and Hutch drive in the classic television series?",
            a: {
                a1: [
                    "Ford Bronco",
                    false
                ],
                a2: [
                    "Ford Thunderbird",
                    false
                ],
                a3: [
                    "Ford Gran Torino",
                    true
                ],
                a4: [
                    "Ford Ranger",
                    false
                ]
            }
        },

        q10: {
            q: "How much horse power did the first Porsche 911 have?",
            a: {
                a1: [
                    "35 HP",
                    false
                ],
                a2: [
                    "90 HP",
                    false
                ],
                a3: [
                    "130 HP",
                    true
                ],
                a4: [
                    "180 HP",
                    false
                ]
            }
        },

    }

    function startGame() {
        $("#splashScreen").fadeOut(300, function () {
            var timeMinutes = 10;
            var timeSeconds = 0;
            $("#triviaGame").fadeIn();
            populate();
            setInterval(function () {
                if (timeSeconds <= 1 && timeMinutes == 0) {
                    submitResults();
                    clearInterval();
                } else if (timeSeconds <= 1) {
                    timeMinutes--;
                    timeSeconds = 59;
                } else {
                    timeSeconds--;
                }

                if (timeSeconds < 10) {
                    $("#timer").text(timeMinutes + ":0" + timeSeconds);
                } else {
                    $("#timer").text(timeMinutes + ":" + timeSeconds);
                }
            }, 1000);
        });

    }

    function populate() {
        for (i = 1; i <= 10; i++) {

            // Building the answers layout
            var answers = "";

            for (f = 1; f <= 4; f++) {
                answers += ('<div class="qDiv"><label class="mx-md-5 label-' + f + '"><input type="radio" name="' + i + '" class="mr-1" value=' + questions["q" + i].a["a" + f][1] + '>' + questions["q" + i].a["a" + f][0] + '</label></div>')
            }

            // Attaching it to the question
            var questionDiv = '<div class="pt-3 pb-5 text-center fullBlock"><h5 class="mb-4">' + questions["q" + i].q + '</h5>' + answers + '</div>';
            // Adding to the #questionHolder div
            $("#questionHolder").append(questionDiv);

        }
    }

    function submitResults() {

        var correctAnswers = 0;
        var incorrectAnswers = 0;
        var unansweredAnswers = 0;

        for (r = 1; r <= 10; r++) {
            var selectedRadio = $('input:radio[name=' + r + ']:checked');
            // The value of the radios are strings, not booleans
            if (selectedRadio.val() === "true") {
                correctAnswers++;
            } else if (selectedRadio.val() === "false") {
                incorrectAnswers++;
            } else {
                unansweredAnswers++;
            }
        }

        $("#correct").text("Correct: " + correctAnswers);
        $("#incorrect").text("Incorrect: " + incorrectAnswers);
        $("#unanswered").text("Unanswered: " + unansweredAnswers);

        $("#triviaGame").fadeOut(300, function () {
            $("#answerScreen").fadeIn().css("display", "flex");
        });
    }

    $("#startButton").on("click", startGame);

    $("#submit").on("click", submitResults);

});