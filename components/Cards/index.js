// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container');



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        console.log(response);
         console.log(response.data.articles);
         const articleList = Object.entries(response.data.articles);
        articleList.forEach(element => {
             element[1].forEach(data => {
                const newArticle = createCard(data);
                cardContainer.appendChild(newArticle);
             })
         })
     
    })
    .catch(error => {
        console.log("Error:", error);
    })

    
        
function createCard(data) {
    const newCard = document.createElement("div"),
    headline = document.createElement("div"),
    author = document.createElement("div"),
    imgContainer = document.createElement("div")
    newImage = document.createElement("img"),
    authName = document.createElement("span")
    
    headline.textContent = data.headline;
    newImage.src = data.authorPhoto;
    authName.textContent = data.authorName;
 
 
   newCard.appendChild(headline);
   newCard.appendChild(author);
   author.appendChild(imgContainer);
   imgContainer.appendChild(newImage);
   author.appendChild(authName);

   newCard.classList.add('card');
   headline.classList.add('headline');
   author.classList.add('author');
   imgContainer.classList.add('img-container');
  
 
   return newCard;
 }
 