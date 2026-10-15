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
    { id: 1, title: 'Mythara', class: 'large' },
    { id: 2, title: 'Ketrika poissonerrie', class: 'large' },
    { id: 3, title: 'D-Bit', class: 'medium' },
    { id: 4, title: '...', class: 'medium' },
    { id: 5, title: '...', class: 'medium' },
    { id: 6, title: '...', class: 'medium' },
    { id: 7, title: '...', class: 'medium' }
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