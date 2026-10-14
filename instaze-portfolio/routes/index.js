const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Lire les images du dossier heropages
function getHeroImages() {
  const dir = path.join(__dirname, '..', 'public', 'img', 'heropages');
  try {
    return fs.readdirSync(dir)
      .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map(file => `/img/heropages/${file}`);
  } catch (err) {
    console.error('Erreur lecture heropages:', err.message);
    return [];
  }
}

const siteData = {
  name: 'INSTAZE',
  tagline: "WE DON'T JUST MAKE GAMES – WE CREATE LEGENDS",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  phone: '+261 XX XXX XX',
  email: 'instaze@machin.com',
  address: 'Eto dogo fa tsy ako ny adresse',
  aboutText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  recentWork: [
    { id: 1, title: 'Cyber Racer', class: 'large' },
    { id: 2, title: 'Neon Warriors', class: 'large' },
    { id: 3, title: 'Pixel Quest', class: 'medium' },
    { id: 4, title: 'Dark Realms', class: 'medium' },
    { id: 5, title: 'Star Forge', class: 'medium' },
    { id: 6, title: 'Void Runner', class: 'medium' },
    { id: 7, title: 'Iron Legends', class: 'medium' },
    { id: 8, title: 'Echo Storm', class: 'large' }
  ]
};

router.get('/', (req, res) => {
  res.render('index', { 
    data: siteData, 
    heroImages: getHeroImages() 
  });
});

router.get('/about', (req, res) => {
  res.render('about', { data: siteData });
});

router.get('/projects', (req, res) => {
  res.render('projects', { data: siteData });
});

router.get('/contact', (req, res) => {
  res.render('contact', { data: siteData });
});

module.exports = router;