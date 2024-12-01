// Define the endpoint URL for fetching Tesla news5Es1_c14
const API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5dc763064a0f430bbd18369c680b90ea`;

// Fetch and display "Tesla" news
async function fetchTeslaNews() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayNews(data.articles);
  } catch (error) {
    console.error("Error fetching Tesla news:", error);
  }
}

// Display news articles on the page with fallback images if necessary
function displayNews(articles) {
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = '';

  articles.forEach(article => {
    const newsCard = document.createElement('div');
    newsCard.classList.add('news-card');

    // Fallback image if `urlToImage` is not provided
    const imageUrl = article.urlToImage || 'https://link-to-default-image.jpg';

    newsCard.innerHTML = `
      <h3>${article.title}</h3>
      <img src="${imageUrl}" alt="${article.title}" style="width:100%; height:auto; border-radius:5px;">
      <p>${article.description || "No description available."}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;
    newsContainer.appendChild(newsCard);
  });
}

// Call the function to fetch and display "Tesla" news on page load
fetchTeslaNews();
