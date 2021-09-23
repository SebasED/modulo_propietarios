const { Router } = require('express');
const ownerController = require('../controllers/owner.controller');

const router = Router();

router.get('/', ownerController.getOwnersController);
router.get('/:owner_id', ownerController.getOwnerByIdController);
router.post('/', ownerController.createOwnerController);
router.put('/:owner_id', ownerController.updateOwnerByIdController);
router.delete('/:owner_id', ownerController.deleteOwnerByIdController);

module.exports = router;
