$(document).ready(function() {
    var question = $("#question");
    window.currentQuestion = 1;
    window.answers = [];
    window.questions = [
        "-1",
        "I am assertive, demanding, and decisive.",
        "I enjoy doing multiple tasks at once.",
        "I thrive in a challenge-based environment.",
        "I think about tasks above others or myself.",
        "I am motivated by accomplishment and authority.",
        "I enjoy influencing and inspiring people.",
        "I am optimistic about others.",
        "I tend to be the life of the party.",
        "I think about motivating people.",
        "I am motivated by recognition and approval.",
        "I thrive in consistent environments over changing ones.",
        "I prefer specifics over generalizations.",
        "I enjoy small groups of people.",
        "I prefer being a member of a team over leading the team.",
        "I am motivated by stability and support.",
        "I typically do not take big risks.",
        "I love tasks, order and details.",
        "I am right most of the time.",
        "I comply with clearly defined rules.",
        "I am motivated by quality and correctness.",
        "I like organizing services and events.",
        "I enjoy starting new churches.",
        "I enjoy working with my hands.",
        "I can tell when someone is insincere.",
        "I pray for the lost daily.",
        "Encouraging others is a high priority in my life.",
        "Believing God for our daily needs is important to me.",
        "Influencing others for the kingdom of God through finances is extremely important to me.",
        "I look for opportunities to pray for the sick.",
        "I enjoy doing the little things that others do not.",
        "I enjoy having people come to my house.",
        "I enjoy spending hours in prayer for other people.",
        "Education is very important to me.",
        "I tend to motivate others to get involved.",
        "My heart hurts when I see others hurting.",
        "I believe God will use me to enact His miracles.",
        "I enjoy sharing the gospel with other people groups and nationalities.",
        "I’ve devoted considerable time to mastering my voice and or instrument.",
        "Caring for the hurting is paramount in my eyes.",
        "The willful sin of others really aggravates me.",
        "I enjoy serving behind the scenes.",
        "I enjoy creating outlines of the Bible.",
        "God has used me to interpret a heavenly language.",
        "I enjoy the book of Proverbs more than any other book in the Bible.",
        "I am passionate about managing details.",
        "I prefer to pioneer new ministry projects.",
        "I consider myself a craftsman or craftswoman.",
        "I sense when situations are spiritually unhealthy.",
        "I am greatly concerned about seeing the lost saved.",
        "I try to come across loving and caring.",
        "Asking God for a list of big things is exciting to me.",
        "I find ways to give offerings above my tithe.",
        "I believe miraculous healing is for this day and age.",
        "Helping others is one of my highest achievements.",
        "Creating a warm and welcoming home is important to me.",
        "I am burdened to pray for situations in the world.",
        "People seek me out to learn more about the Kingdom of God.",
        "I prefer to take the lead whenever necessary.",
        "I’m very sensitive to sad stories.",
        "Miracles often happen when I’m nearby.",
        "Living in another country to benefit the gospel is exciting to me.",
        "I desire to serve the church through worship.",
        "I enjoy connecting, caring, and coaching others.",
        "Confronting someone with sin in their life is not hard.",
        "It bothers me when people sit around and do nothing.",
        "I share Biblical truth with others in hopes of their personal growth.",
        "I pray in tongues daily.",
        "When I study scripture God gives me unique insights.",
        "Creating a task list is easy and enjoyable for me.",
        "I am attracted to ministries that start new churches.",
        "Building something with my hands is very rewarding to me.",
        "I can pinpoint issues or problems before others.",
        "I enjoy sharing the gospel with a total stranger.",
        "I look for ways to be an encouragement to other people.",
        "I trust that God has my back in every situation.",
        "Making more money means I can give more.",
        "God has used me to bring healing to those who are sick.",
        "Being a part of the process is fulfilling to me.",
        "I tend to make total strangers feel at home.",
        "People often describe me as a prayer warrior.",
        "I enjoy knowing biblical details and helping others to understand.",
        "I delegate responsibilities to accomplish tasks.",
        "I am motivated to help those who are less fortunate.",
        "I have a constant hunger to see God’s miraculous power.",
        "I focus a lot on reaching the world for Christ.",
        "I gain my deepest satisfaction through leading others in vocal or instrumental worship.",
        "I enjoy walking with someone in times of direst.",
        "I enjoy hearing passionate and clear preaching of the truth.",
        "I like to do small things that others pass over.",
        "I prefer to teach the Bible topically rather than verse by verse.",
        "Praying in the Spirit is encouraging and important to me.",
        "When faced with difficulty I tend to make wise decisions and choices."
    ];

    $("#begin").click(function(e) {
        e.preventDefault();
        $("#disc-intro").fadeOut(function() {
            window.scrollTo(0,0);
            beginAssessment();
        });
    });

    function beginAssessment() {
        question.html('<h1>Question ' + window.currentQuestion + ' of 92</h1><h3>' + window.questions[window.currentQuestion] + '</h3><div class="btn-wrapper"><span class="answer btn" data-answer="1">Almost Never</span><span class="answer btn" data-answer="2">Rarely</span><span class="answer btn" data-answer="3">Sometimes</span><span class="answer btn" data-answer="4">Often</span><span class="answer btn" data-answer="5">Almost Always</span></div>');
    }

    function nextQuestion() {
        if (window.currentQuestion < window.questions.length) {
            $('.answer').die();
            question.fadeOut(function() {
                question.html('<h1>Question ' + window.currentQuestion + ' of 92</h1><h3>' + window.questions[window.currentQuestion] + '</h3><div class="btn-wrapper"><span class="answer btn" data-answer="1">Almost Never</span><span class="answer btn" data-answer="2">Rarely</span><span class="answer btn" data-answer="3">Sometimes</span><span class="answer btn" data-answer="4">Often</span><span class="answer btn" data-answer="5">Almost Always</span></div>');
                question.fadeIn();
                bindAnswer();
            });
        } else {
            finishTest();
        }
    }

    window.finishTest = function finishTest() {

        var userResult = getResults(window.answers);
        $('#results').prepend(userResult.result);
        userResultsData = userResult.resFormatted;
        $("#results").slideDown();
        document.getElementById('question').style.display = 'none';
    }

    function bindAnswer() {
        $('.answer').live('click', function() {
            window.answers[window.currentQuestion] = parseFloat($(this).attr('data-answer'));
            window.currentQuestion++;
            nextQuestion();
        });
    }
    bindAnswer();

});