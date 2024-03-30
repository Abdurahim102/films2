const movie_wrap = document.querySelector('.movie_wraper')
const select = document.querySelector('.catigors')
const opt = document.querySelector('.option')
const rat = document.querySelector('.rat')
const yearM = document.querySelector('.yearM')


let parM = movies.splice(1,100)
let Categories = []
console.log(parM);

parM.forEach((item)=>{
    if (!Categories.includes(item.Categories)) {
        Categories.push(item.Categories)
        
    }
})
Categories.forEach((item)=>{
    let newop = document.createElement("option")
    newop.textContent = item;
    newop.setAttribute("value",item)
    select.appendChild(newop)
})


rat.addEventListener("change",(e)=>{
    if (e.target.value == "up") {
        renderM(parM.sort((a,b)=> b.imdb_rating - a.imdb_rating))
    }else if (e.target.value == "down"){
        renderM(parM.sort((a,b)=> a.imdb_rating - b.imdb_rating))
    }

})

select.addEventListener("change",(e)=>{
    if (e.target.value == "defol") {
        renderM(parM)
    }else{
    let fill = parM.filter((item)=> item.Categories == e.target.value)
    renderM(fill)
    }
})

yearM.addEventListener("change",(e)=>{
    if (e.target.value == "new") {
        renderM(parM.sort((a,b)=> b.movie_year - a.movie_year))
    }else if (e.target.value == "old"){
        renderM(parM.sort((a,b)=> a.movie_year - b.movie_year))
    }else if (e.target.value == "dafault"){
    renderM(parM)
    }
})

select.addEventListener("change",(e)=>{
    let fill = parM.filter((item)=> item.Categories == e.target.value)
    renderM(fill)
})

function renderM(data) {
    movie_wrap.innerHTML = ""
    data.forEach((item)=>{
    movie_wrap.innerHTML += `
    <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="http://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${item.Title}</h5>
                  <p class="card-text">Year:${item.movie_year}</p>
                  <p class="card-text">RATING: ${item.imdb_rating}</p> 
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
    `
    })

}
 renderM(parM)

