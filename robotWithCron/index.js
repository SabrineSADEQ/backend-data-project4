import cron from 'node-cron';
import { fetchNews } from './fetchData.js';
import { saveArticlesToDB } from './saveToDatabase.js';

cron.schedule('0 0 * * *', async () => {
  console.log('Tâche de récupération des actualités démarrée.');

  try {
    const countries = ['fr', 'ma','es',"us"];
    const allArticles = [];

    for (const country of countries) {
      const articles = await fetchNews(country);
      allArticles.push(...articles.map(article => ({ ...article, country })));
    }

    await saveArticlesToDB(allArticles);
    console.log('Tâche de récupération des actualités terminée.');
  } catch (error) {
    console.error('Erreur lors de la récupération des actualités:', error);
  }
});
