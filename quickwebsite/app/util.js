import { title } from "process";

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
export async function amountVisited(){
    const uriVisited = baseURI+"api/amounts/visited"
    return await fetch(uriVisited,{method:"GET",headers:{'X-CSRFToken':csrftoken,}}).then(async res => await res.json());
        
    
}
export function buildList(){
    var wrapper  =document.getElementById('list-wrapper')
    var url = "http://127.0.0.1:8000/api/amounts/visited"
    fetch(url)
			.then((resp) => resp.json())
			.then(function(data){
				console.log(data)
            })
}
export async function amountClicked(){
    const uriClicked = baseURI+"/amounts/clicked/"
    return await fetch(uriClicked).then(async res=> await res.json())
}
export async function sendClicks(title, pressed){
    const uriSend = baseURI+"api/user-create/"

    return await fetch(uriSend,{
        method:"POST",
        headers:{
            'Content-type':'application/json',
            'X-CSRFToken':csrftoken,


        },
        body:JSON.stringify({"title":title,"completed":false,'pressed':pressed})
    })
}
export async function updateClicks(title, pressed,userId){
    const uriSend = baseURI+"api/task-update/"+userId+"/"

    return await fetch(uriSend,{
        method:"POST",
        headers:{
            'Content-type':'application/json',
            'X-CSRFToken':csrftoken,


        },
        body:JSON.stringify({"title":title,"completed":false,'pressed':pressed})
    })
}