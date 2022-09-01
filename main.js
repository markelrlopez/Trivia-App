function createQuestion(){
    var request= new XMLHttpRequest();
    request.open('GET', 'https://opentdb.com/api.php?amount=1&type=multiple' )
    request.onload=function(){
    var r1=document.getElementById("idR0");
    var r2=document.getElementById("idR1");
    var r3=document.getElementById("idR2");
    var r4=document.getElementById("idR3");
    r1.classList.remove("correct")
    r2.classList.remove("correct")
    r3.classList.remove("correct")
    r4.classList.remove("correct")
    r1.classList.remove("respuestaIncorrecta")
    r2.classList.remove("respuestaIncorrecta")
    r3.classList.remove("respuestaIncorrecta")
    r4.classList.remove("respuestaIncorrecta")
    r1.classList.remove("respuestaCorrecta")
    r2.classList.remove("respuestaCorrecta")
    r3.classList.remove("respuestaCorrecta")
    r4.classList.remove("respuestaCorrecta")


    var textResponse=this.response;
    var jsonResponse=JSON.parse(textResponse)
    console.log(jsonResponse)
    var preguntaObj=jsonResponse["results"][0]
    console.log(preguntaObj)
    var preguntaCat=preguntaObj["category"]
    var preguntaDif=preguntaObj["difficulty"]
    var preguntaQue=preguntaObj["question"]
    var respuestaCor=preguntaObj["correct_answer"]
    var respuestasInc=preguntaObj["incorrect_answers"]
    console.log(preguntaCat)
    console.log(preguntaDif)
    console.log(preguntaQue)
    console.log(respuestaCor)


    var diff=document.getElementById("idDiff");
    diff.innerHTML="Difficulty: "+preguntaDif
    var cat=document.getElementById("idCat");
    cat.innerHTML="Category: "+preguntaCat
    var que=document.getElementById("idPregunta");
    que.innerHTML=preguntaQue

    var numCorrecta=getRndInteger(0,4);
    console.log("numCorrecta: "+numCorrecta)

    
    switch (numCorrecta) {
        case 0:
            r1.value=respuestaCor
            r1.classList.add("correct")
            r2.value=respuestasInc[0]
            r3.value=respuestasInc[1]
            r4.value=respuestasInc[2]
            break;
        
        case 1:
            r1.value=respuestasInc[0]
            r2.value=respuestaCor
            r2.classList.add("correct")
            r3.value=respuestasInc[1]
            r4.value=respuestasInc[2]
            break;

        case 2:
            r1.value=respuestasInc[0]
            r2.value=respuestasInc[1]
            r3.value=respuestaCor
            r3.classList.add("correct")
            r4.value=respuestasInc[2]
            break;

        case 3:
            r1.value=respuestasInc[0]
            r2.value=respuestasInc[1]
            r3.value=respuestasInc[2]
            r4.value=respuestaCor
            r4.classList.add("correct")
            break;
    }
}
request.send()
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function responseQuestion(response){
    console.log(response)
    if (document.getElementById("idR"+response).classList.contains("correct")) {
        document.getElementById("idR"+response).classList.add("respuestaCorrecta")
        var contadorCorrectas=document.getElementById("idContador").innerHTML
        document.getElementById("idContador").innerHTML=Number(contadorCorrectas)+1;
        createQuestion();
    }else{
        document.getElementById("idR"+response).classList.add("respuestaIncorrecta")
        
    }
    
}
    

createQuestion()