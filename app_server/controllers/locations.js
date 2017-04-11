// Home page
module.exports.homelist = function(req, res) {
  res.render('index', { title: 'Home' });
};

// Location info page
module.exports.locationInfo = function(req, res) {
  res.render('index', { title: 'Location info' });
};

// Add review page
module.exports.addReview = function(req, res) {
  res.render('index', { title: 'Add review' });
};
