let books = null;
let uniqueGenres = new Set([]);
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const genre = document.getElementById("genre");

async function loadBook() {
    try {
        const response = await fetch("books.json");
        const temp = await response.json();
        books = temp;
        genres();
        display();
    } catch (error) {
        console.error("Can't fetch books.json");
    }
}
// fetch("books.json")
//     .then(response =>response.json())
//     .then(temp =>{
//         books = temp;
//         console.log(books);
//     })
//     .catch(()=>console.error("Can't fetch books.json"))

loadBook();

function display(){
    b1.innerHTML = `
    <table>
        <tr class="w1">
            <td class="b">${"Title:"}</td>
            <td class="fst">${books.Books[0].title}</td>
        </tr>
    </table>`;
    b2.innerHTML = `
    <table>
        <tr> 
            <td class="b">Author: </td>
            <td class="fst">${books.Books[1].author}</td>
        </tr>
    </table>`;
    let ol = document.createElement("ol");
    for(let genre of uniqueGenres){
        let li = document.createElement("li");
        li.innerText = `${genre}`;
        ol.appendChild(li);
    }
    genre.appendChild(ol);
    console.log(`${books.Books[0].title}\n${books.Books[1].author}\n`);
    uniqueGenres.forEach(genre => {console.log(`${genre}`)})

}

function genres(){
    uniqueGenres.clear();
    let genres = [];
    books.Books.forEach(book => {
        book.genres.forEach(genre =>{
            uniqueGenres.add(genre);
        })
    });
}