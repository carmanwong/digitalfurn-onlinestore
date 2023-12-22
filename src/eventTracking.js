
export default function(){
    console.log("error at import from eventTracking.js")
}

export function reportHoverEvent(id){
    const prevEvents = window.sessionStorage.getItem("hoverEvents")
    window.sessionStorage.setItem("hoverEvents", prevEvents + "/" + id)
    console.log(id)
}


export function reportClickEvent(id){
    console.log("___________________________" + id)
    const previousEvents = window.sessionStorage.getItem("clickEvents")
    window.sessionStorage.setItem("clickEvents", previousEvents + "/" + id)
    console.log(id)
}