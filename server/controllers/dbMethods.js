const db = require('../../db/index.js');

module.exports = {
    getRestaurant: (req, res) => {
        const { id } = req.params;

        db.Restaurant.find({ id: id })
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    },
    saveToiletReview: (req, res) => {
        const { id } = req.params;

        const docToSave = {
            rating: id.rating,
            review: id.review
        }

        const review = new db.Review(docToSave);
        restaurant.save((err) => {

        });
    }
}