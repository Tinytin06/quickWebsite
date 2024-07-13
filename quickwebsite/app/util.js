baseURI = ""
export async function amountVisited(){
    return await fetch(`${baseURI}/amounts/visited`).then(async res=> await res.json())
}
export async function amountVisited(){
    return await fetch(`${baseURI}/amounts/clicked`).then(async res=> await res.json())
}