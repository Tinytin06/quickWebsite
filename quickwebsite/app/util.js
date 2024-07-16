baseURI = ""
export async function amountVisited(){
    const uriVisited = baseURI+"/amounts/visited/"
    return await fetch(uriVisited).then(async res=> await res.json())
}
export async function amountClicked(){
    const uriClicked = baseURI+"/amounts/clicked/"
    return await fetch(uriClicked).then(async res=> await res.json())
}
export async function sendClicks(){
    const uriSend = baseURI+"/user-create/"
    return await fetch(uriSend,{
        method:"POST",
        headers:{

        },
        body:""
    })
}