const cardContainer = document.querySelector('.card-container')

posts = [
    {
    "id": 1,
    "author": "Rylee Paul",
    "authorId": 9,
    "likes": 960,
    "popularity": 0.13,
    "reads": 50361,
    "tags": [ "tech", "health" ]
    },
    {
    "id": 2,
    "author": "Jon Smith",
    "authorId": 8,
    "likes": 460,
    "popularity": 0.10,
    "reads": 503,
    "tags": [ "test", "another" ]
    }
    ]

displayPosts(posts)

fetch(`https://api.hatchways.io/assessment/blog/posts`)
    .then(response => response.json())
    .then(posts => {
        console.log(posts)
    })

function displayPosts(posts) {
    posts.forEach(post => showPosts(post))
}

function showPosts(post) {
    const postCard = document.createElement('div')
    postCard.classList.add('card-container')

    const postName = document.createElement('h2')
    postName.textContent = post.name

    const postImage = document
}