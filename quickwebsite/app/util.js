function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
const baseURI = "http://127.0.0.1:8000/"
export  function amountVisited(){
    const uriVisited = baseURI+"api/amounts/visited/"
    
        return( fetch(uriVisited,{headers:{'X-CSRFToken':csrftoken,}}).then((res)=> res.json()))
        
    
}
export async function amountClicked(){
    const uriClicked = baseURI+"/amounts/clicked/"
    return await fetch(uriClicked).then(async res=> await res.json())
}
export async function sendClicks(clicks){
    const uriSend = baseURI+"/user-create/"

    return await fetch(uriSend,{
        method:"POST",
        headers:{

        },
        body:""
    })
}