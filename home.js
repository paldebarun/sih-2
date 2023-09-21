function handleThing(){
    let element = document.getElementById('carouselExampleRide')
    element.classList.add('hidden')
    let element2 = document.getElementById('restOverThing')
    element2.classList.remove("hidden")
    // element2.animate()
}

function toggleBack(){
    let element = document.getElementById('carouselExampleRide')
    element.classList.remove('hidden')
    let element2 = document.getElementById('restOverThing')
    element2.classList.add("hidden")
}