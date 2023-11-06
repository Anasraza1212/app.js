var questions = [
    {
        question:"what is the capital of Pakistan?",
        option1:"Lahore",
        option2:"Karachi",
        option3:"Islamabad",
        correctAns:"Islamabad"
    },
    {
        question:"who is the Father Of Our Nation? ",
        option1:"Allama Iqbal",
        option2:"Sir Syed",
        option3:"Quaid e Azam",
        correctAns:"Quaid e Azam"
    },{
        question:"Quaid e Azam died on ",
        option1:"11 Sep 1948",
        option2:"25 Dec 1948",
        option3:"11 Sep 1949",
        correctAns:"11 Sep 1948"
    },{
        question:"Badshahi mosque is situated in ?",
        option1:"multan",
        option2:"karachi",
        option3:"lahore",
        correctAns:"lahore"
    },{
        question:"First governor general of Pakistan",
        option1:"Quaid e Azam",
        option2:"Mohammad Ali Johar",
        option3:"Allama Iqbal",
        correctAns:"Quaid e Azam"
    }
    ,{
        question:"Rank of Pakistan in population",
        option1:"5",
        option2:"6",
        option3:"7",
        correctAns:"5"
    }]
    
    
    var para = document.getElementById("ques");
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var button = document.getElementById("btn");
    var timer = document.getElementById("timer")
    var index = 0;
    var score = 0;
    var min = 1;
    var sec = 59;
    
    
    
    setInterval(function(){
        timer.innerHTML = `${min}:${sec}`;
        sec--
        if(sec<0){
            min--;
            sec = 59    
        }
        if(min<0){
            min= 1;
            sec = 59;
            nextQuestion()
        }
    },1000)
    
    
    function nextQuestion(){
    
        var getOptions = document.getElementsByName("options");
    
        for(var i = 0;i<getOptions.length;i++)
        {
            if(getOptions[i].checked){
                var selectedValue = getOptions[i].value;
                // console.log(selectedValue)
                var selectedQues = questions[index - 1]["question"];
                var selectedAns = questions[index-1][`option${selectedValue}`]
                var correctAns = questions[index - 1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
            }
            getOptions[i].checked = false
        }
    
        button.disabled = true
    
        if(index >questions.length - 1){
    
            Swal.fire(
                'Good job!',
            `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
                'success'
              )
            // console.log("your percentage is " + ((score / questions.length)*100).toFixed(2))
        }
        else{
    
            
            para.innerHTML = questions[index].question;
            opt1.innerText = questions[index].option1;
            opt2.innerText = questions[index].option2;
            opt3.innerText = questions[index].option3;
            index++
        }
    }
    
    // nextQuestion()
    
    
    function clicked()
    {
        button.disabled = false
    }