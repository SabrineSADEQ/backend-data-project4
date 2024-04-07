import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();



async function fetchNews(country) {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=379ff3d647c0443ea4115eadf425dee1`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(`Erreur lors de la récupération des actualités pour ${country}: ${error}`);
    throw error;
  }
}

export { fetchNews };
