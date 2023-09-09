
// Your Code Here
async function getBooks(){
    let response = await fetch(' http://localhost:3001/listBooks',{
        method: 'GET',
        headers: null,
        body: null,
    })
    let result = await response.json()
    console.log(result)
}

async function updateBook(){
    let response = await fetch('http://localhost:3001/updateBook', {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        "id": 3,
        "title": "Legends of Arathrae",
    }),
});
let updatedBook = await response.json();
console.log(updatedBook)
}