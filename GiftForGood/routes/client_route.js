let express = require('express');
let router = express.Router();

let MiddlewareController = require('../controllers/MiddlewareController');
let ClientController = require('../controllers/ClientController');

router.get('/', MiddlewareController.doCheckLogin, function (req, res, next) {
    ClientController.dashboard(req, res, next);
});

router.get('/dashboard', MiddlewareController.doCheckLogin, function (req, res, next) {
    ClientController.dashboard(req, res, next);
});

router.get('/gifts', MiddlewareController.doCheckLogin, function (req, res, next) {
    ClientController.gifts(req, res, next);
});

router.get('/activity', MiddlewareController.doCheckLogin, function (req, res, next) {
    ClientController.activity(req, res, next);
});

router.get('/users', MiddlewareController.doCheckLogin, function (req, res, next) {
    ClientController.users(req, res, next);
});

router.get('/step1', MiddlewareController.doCheckLogin, function (req, res, next) {
    ClientController.gift_it_forward(req, res, next);
});

router.post('/step1/add-product', MiddlewareController.doCheckLoginPost, function (req, res, next) {
    ClientController.add_product_as_gift(req, res, next);
});
router.post('/step1/show-more', MiddlewareController.doCheckLoginPost, function (req, res, next) {
    ClientController.show_more_products(req, res, next);
});

router.get('/step2', MiddlewareController.doCheckLogin, function (req, res, next) {
    ClientController.recipient_information(req, res, next);
});
router.post('/step2/add-information', MiddlewareController.doCheckLoginPost, function (req, res, next) {
    ClientController.add_recipient_information(req, res, next);
});

router.get('/step3', MiddlewareController.doCheckLogin, function (req, res, next) {
    ClientController.brand_message(req, res, next);
});
router.post('/step3/customize', MiddlewareController.doCheckLoginPost, function (req, res, next) {
    ClientController.customize_message(req, res, next);
});

router.get('/step4', MiddlewareController.doCheckLogin, function (req, res, next) {
    ClientController.confirm_details(req, res, next);
});
router.post('/step4/send', MiddlewareController.doCheckLoginPost, function (req, res, next) {
    ClientController.send_gift(req, res, next);
});

router.get('/confirmed', MiddlewareController.doCheckLogin, function (req, res, next) {
    ClientController.confirmed_order(req, res, next);
});

module.exports = router;
