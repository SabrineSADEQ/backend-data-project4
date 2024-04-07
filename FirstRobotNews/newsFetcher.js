// fetchNews.mjs
import fetch from 'node-fetch';



async function fetchAndDisplayNews(country) {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=379ff3d647c0443ea4115eadf425dee1`);
    const data = await response.json();
    const articles = data.articles.map(article => ({
      
      author: article.author,
      title: article.title,
      url: article.url,
      publishedAt: article.publishedAt
    }));
    console.log(`Actualités pour ${country}:`);
    console.log(articles);
    return articles;
  } catch (err) {
    console.error(`Erreur lors de la récupération des actualités pour ${country}: ${err}`);
    throw err;
  }
}

export { fetchAndDisplayNews };
