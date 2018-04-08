const router = require('express').Router();

const webhooks = require('./webhooks');
const auth = require('./auth');

router.use('/webhooks', webhooks);
router.use(auth);

router.get('/', (req, res) => {
    res.send('Hello world');
});

module.exports = router;