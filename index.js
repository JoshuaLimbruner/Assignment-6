const wrapper=document.getElementById('wrapper')
const sortTitleBut=document.getElementById('sortTitle')
const sortPagesBut=document.getElementById('sortPages')
const sortYearBut=document.getElementById('sortYear')
const less300But=document.getElementById('less300')
const after2010But=document.getElementById('after2010')

const catalog=[
    {title:"House of Leaves",author:"Mark Z. Danielewski",pages:736,year:2006,genre:"Metafiction"},
    {title:"S.",author:"Doug Dorst",pages:400,year:2013,genre:"Mystery"},
    {title:"Scythe",author:"Neil Shusterman",pages:443,year:2016,genre:"Dystopian Fiction"},
    {title:"Land of Stories: The Wishing Well",author:"Chris Colfer",pages:438,year:2012,genre:"Fantasy"},
    {title:"Renegades",author:"Marissa Meyer",pages:559,year:2017,genre:"Superhero"},
    {title:"A Series of Unfortunate Events: The Bad Beginning",author:"Lemony Snicket",pages:162,year:1999,genre:"Mystery"},
    {title:"All the Wrong Questions: Who Could That Be at This Hour",author:"Lemony Snicket",pages:258,year:2012,genre:"Mystery"},
    {title:"Goosebumps: Attack of the Jack-O'-Lanterns",author:"R.L Stine",pages:113,year:1996,genre:"Horror"}
]

function render(books){
    wrapper.innerHTML=""
    const ele=document.createElement('div')
    const mapBooks=books.map((book)=>{
        const entry=document.createElement('p')
        entry.innerHTML="Title: "+book.title+"<br>Author: "+book.author+"<br>Pages: "+book.pages+"<br>Release Year: "+book.year+"<br>Genre: "+book.genre+"<hr>"
        ele.appendChild(entry)
        wrapper.appendChild(ele)})
    const bookCount=document.createElement("p")
    bookCount.innerHTML=books.length+" out of "+catalog.length
    wrapper.appendChild(bookCount)
}

function sortMethod(sortType,list){
    const sorted=list.sort(sortType)
    render(sorted)
}

sortTitleBut.addEventListener("click",function(){sortMethod((a,b)=>a.title.localeCompare(b.title),catalog)})
sortPagesBut.addEventListener("click",function(){sortMethod((a,b)=>a.pages-b.pages,catalog)})
sortYearBut.addEventListener("click",function(){sortMethod((a,b)=>a.year-b.year,catalog)})

less300But.addEventListener("click",function(){
    const filtered=catalog.filter(book=>{return book.pages<300}).sort((a,b)=>a.pages-b.pages)
    render(filtered)
})
after2010But.addEventListener("click",function(){
    const filtered=catalog.filter(book=>{return book.year>2010}).sort((a,b)=>a.title.localeCompare(b.title))
    render(filtered)
})

render(catalog)