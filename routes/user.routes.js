const express = require('express');
const router = express.Router();

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/logged', (req, res) => {
  if(req.user) {
    res.render('logged', {name: req.user.displayName , avatar: req.user._json.picture});
  } else {
    res.redirect('../user/no-permission');
  }
});

router.get('/profile', (req, res) => {
  if(req.user) {
    res.render('profile');
  } else {
    res.redirect('../user/no-permission');
  }
});

router.get('/profile/settings', (req, res) => {
  if(req.user) {
    res.render('settings');
  } else {
    res.redirect('/user/no-permission');
  }
});

module.exports = router; 