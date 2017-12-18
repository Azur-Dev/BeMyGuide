var accessToken = "3d1b40ac10dd4a4eab328f089597a079";
var baseUrl = "https://api.api.ai/v1/";
            
    $(document).ready(function() {
                document.getElementById("frame").style.display = "none";
                $("#input").keypress(function(event) {
                    if (event.which == 13) {
                        event.preventDefault();
                        
                        if($("#input").val() == "hola"){
                            $("#response").html("Hola"); 
                        }
                        else if($("#input").val() == "622"){
                            document.getElementById("response").style.display = "none";
                            $("#frame").html("<iframe src='https://www.google.com/maps/d/embed?mid=1JvUkLjEQcxUxQ1W-680UNmni0nU' width='456' height='340' ></iframe>"); 
                            document.getElementById("frame").style.display = "block";
                        }
                        else if($("#input").val() == "25"){                            
                            document.getElementById("response").style.display = "none";
                            $("#frame").html("<iframe src='https://www.google.com/maps/d/embed?mid=1anwVIyWzFxVDGM08xDJEOOGuvNY&hl=en_US' width='456' height='340' ></iframe>"); 
                            document.getElementById("frame").style.display = "block";
                        }
                        else{
                            document.getElementById("response").style.display = "block";
                            document.getElementById("frame").style.display = "none";

                        }
                        //send();
                    }
                });
        
                

            });
            var recognition;

            function setInput(text) {
                $("#input").val(text);
                send();
            }

            function send() {
                var text = $("#input").val();
                $.ajax({
                    type: "POST",
                    url: baseUrl + "query?v=20150910",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    headers: {
                        "Authorization": "Bearer 3d1b40ac10dd4a4eab328f089597a079"
                    },
                    data: JSON.stringify({ query: text, lang: "en", sessionId: "mikebot" }),
                    success: function(data) {

                        var res=JSON.stringify(data, undefined, 2);
                        var res2=JSON.parse(res);
                        console.clear();
                        console.log(res2['result']['fulfillment']['messages'][0]['speech']);
                    },
                    error: function() {
                        setResponse("Internal Server Error");
                    }
                });
                setResponse("Loading...");
            }
            function setResponse(val) {
                $("#response").text(val);
            }