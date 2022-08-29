function Search(){
    var srch = document.getElementById('panal').value;

    if (srch === "Sri Lanka"){
      window.open('srilanka.html');
    }   
    else if(srch === "Anuradhaurapura"){
        window.open('Anuradhapura.html');
    }
    else if(srch === "Polonnaruwa"){
        window.open('Polonnaruwa.html');
    }
    else if(srch === "Coastal"){
        window.open('Coastal.html');
    }
    else if(srch === "Colombo"){
        window.open('Colombo.html');
    }
    else if(srch === "Dambulla"){
        window.open('Dambulla.html');
    }
    else if(srch === "Galle"){
        window.open('Galle.html');
    }
    else if(srch === "Jaffna"){
        window.open('Jaffna.html');
    }
    else if(srch === "Kandy"){
        window.open('Kandy.html');
    }
    else if(srch === "Nuwara Eliya"){
        window.open('NuwaraEliya.html');
    }
    else if(srch === "Sigiriya"){
        window.open('Sigiriya.html');
    }
    else if(srch === "Destinations"){
        window.open('Destinations.html');
    }
    else if(srch === "Map"){
        window.open('https://www.bing.com/maps?&ty=18&q=Sri%20Lanka&satid=id.sid%3A6bac8e76-6fd3-64fc-b260-bff13b0eebfc&vdpid=42&mb=10.03501~79.395912~5.71899~82.081024&ppois=7.877000093460083_80.73846817016602_Sri%20Lanka_~&cp=7.877~80.738468&v=2&sV=1&FORM=MIRE');
    }
    else{
        window.alert("Please try the words like \"Sri Lanka, Map, Anuradhapura, Galle\" etc.!");
    }
}