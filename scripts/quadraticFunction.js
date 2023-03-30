function countQuadraticFunction(){
console.log("hej")

        var factorA = document.getElementById('factorA').value;
        var factorB = document.getElementById('factorB').value;
        var factorC = document.getElementById('factorC').value;
        var error = document.getElementById('error');
        console.log(factorA)
        console.log(factorB)
        console.log(factorC)

        if(factorA == '' || factorB == '' || factorC == ''){
            error.innerHtml = "<p>"+"błąd"+"</p>";
        }
        else{
        var quadraticFunctionResult = document.getElementById('quadraticFunction');
        quadraticFunctionResult.innerHtml = "<canvas id='myCanvas' width='400' height='400'>"+"</canvas>"
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);


        let url = "http://localhost:8080/math/countQuadraticFunctions?factorA="+factorA+"&factorB="+factorB+"&factorC="+factorC
        console.log(url)
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: url,
            success: function(data){
                console.log(data.comment)
                console.log(data)

                $("#quadraticFunctionResult").empty();
                $('#quadraticFunctionResult').append(data.comment);

                var valueP = -(factorB)/2*factorA;
                var valueQ = -(data.delta)/4 * data.factorA;

                console.log(valueP)
                var valueX = -4;

                var c = document.getElementById("myCanvas");
                var ctx = c.getContext("2d");
                //ctx.clearRect(0, 0, c.width, c.height);

                if(data.delta == 0){
                ctx.beginPath();
                ctx.moveTo(200, 0);
                ctx.lineTo(200, 0);

                ctx.moveTo(0, 200);
                ctx.lineTo(0, 200);

                ctx.moveTo(0, 200);
                ctx.lineTo(400, 200);

                ctx.moveTo(200, 0);
                ctx.lineTo(200, 400);

                ctx.moveTo(200, data.valueX0 + 200)
                ctx.arc(200, data.valueX0 + 200, 2, 0, 2 * Math.PI);
                console.log(valueX)
                for (var i = 0; i < valueX; i++){
                    console.log(valueX)
                    var valueY = factorA * valueX*2 + factorB * valueX + factorC;
                    ctx.moveTo(valueX, valueY);
                    ctx.lineTo(valueX, valueY);
                }

                ctx.stroke();
                }

                else if(data.delta > 0 ){
                    ctx.beginPath();
                    ctx.moveTo(200, 0);
                    ctx.lineTo(200, 0);

                    ctx.moveTo(0, 200);
                    ctx.lineTo(0, 200);

                    ctx.moveTo(0, 200);
                    ctx.lineTo(400, 200);

                    ctx.moveTo(200, 0);
                    ctx.lineTo(200, 400);

                    ctx.moveTo(data.valueX1 + 200, 200)
                    ctx.arc(data.valueX1 + 200, 200, 2, 0, 2 * Math.PI);

                    ctx.moveTo(data.valueX2 + 200, 200)
                    ctx.arc(data.valueX2 + 200, 200, 2, 0, 2 * Math.PI);

                    ctx.moveTo(valueP + 200, valueQ + 200)
                    ctx.arc(valueP + 200, valueQ + 200, 2, 0, 2 * Math.PI);
                    ctx.moveTo(data.valueX2 + 200, 200);
                    ctx.quadraticCurveTo(valueP + 200, 2* valueQ + 200, data.valueX1 + 200, data.valueX2 + 200);

                    console.log(valueX)
                     /*for (var i = 0; i < valueX; i++){
                     console.log(valueX)
                        var valueY = factorA * valueX*2 + factorB * valueX + factorC;
                        ctx.moveTo(valueX, valueY);
                        ctx.lineTo(valueX, valueY);
                     }
                     */
                    ctx.stroke();

                    }
                }

        });
        }
    }


function clearMyCanvas(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);

}
