



var questions = [
    {
        question: 'HTML Stands for ______________________',
        option:['Hypertext Markup Language', 'Hypertext Market Language', 'Hypertest Measurement Language', 'Hightext Markup Language'],
        correctAnswer:'Hypertext Markup Language'
    },
    {
        question: 'CSS Stands for ______________________',
        option:['Cascading Style Sheet', 'Cascading Sales Sheet', 'Class Style Sheet', 'Call Style Sheet'],
        correctAnswer:'Cascading Style Sheet'
    },{
        question: 'JS Stands for ______________________',
        option:['JavaScript', 'JellyScript', 'JavaStyle', 'JoeScript'],
        correctAnswer:'JavaScript'
    },{
        question: 'JavaScript Made in _________ time period',
        option:['10 Days', '20 Days', '100 Days', '112 Days'],
        correctAnswer:'10 Days'
    },{
        question: 'CSS Colors can be defined in _____ ways',
        option:[3, 4, 5, 7],
        correctAnswer: 3
    },{
        question: 'URL Stands for ______________________',
        option:['Unifrom Resource Location', 'Universal Resource Location', 'U', 'Hightext Markup Language'],
        correctAnswer:'Unifrom Resource Location'
    },]

var questionnum = 0


    function displayQuestion(){
        var a = document.getElementById('questionsCom')
        a.innerHTML = questionnum + 1
        var b = document.getElementById('remain')
        b.innerHTML = questions.length
        var questiondis = document.getElementById('question')
        questiondis.innerHTML = questions[questionnum].question

        var optiondiv = document.getElementById('optio')
        optiondiv.innerHTML = ''
        for(var i=0; i<questions[questionnum].option.length; i++){
            var div = document.createElement('div')
            div.setAttribute('class', 'col-md-6 p-3')
            var optionbtn = document.createElement('button')
            optionbtn.setAttribute('class', 'custombtn')
            var optionbtntext = document.createTextNode(questions[questionnum].option[i])
            optionbtn.appendChild(optionbtntext)
            div.appendChild(optionbtn)
            optiondiv.appendChild(div)

        }
    }


function nextquestion(){
    questionnum++
    displayQuestion()
}

displayQuestion()

