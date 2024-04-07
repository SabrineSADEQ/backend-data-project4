import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

mongoose.connect(`${MONGODB_URL}/${DATABASE_NAME}`)
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

  const ArticleSchema = new mongoose.Schema({
  
    country: String,
    author: String,
    title: String,
    url: String,
    publishedAt: Date
  });

const COLLECTION_NAME = process.env.COLLECTION_NAME;
const Article = mongoose.model(COLLECTION_NAME, ArticleSchema);

async function saveArticlesToDB(articles) {
  try {
    const savedArticles = await Article.insertMany(articles);
    console.log('Articles sauvegardés dans la base de données MongoDB:');
    console.log(savedArticles);
  } catch (err) {
    console.error('Erreur lors de la sauvegarde des articles dans MongoDB:', err);
  }
}

export { saveArticlesToDB };