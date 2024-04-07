import { fetchAndDisplayNews } from './newsFetcher.js'; // Importe directement la fonction fetchAndDisplayNews
import {saveArticlesToDB} from './saveArticlesToDB.js';

async function main() {
  try {
    const country = 'ma';
    const articles = await fetchAndDisplayNews(country);
    await saveArticlesToDB(articles);
  } catch (err) {
    console.error('Une erreur est survenue:', err);
  }
}

main();




