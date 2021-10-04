const { Router } = require('express');
const ownerController = require('../controllers/owner.controller');
const verifyTokenMiddleware = require('../middlewares/token.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

const router = Router();

router.get('/', verifyTokenMiddleware, roleMiddleware.verifyAdminRole, ownerController.getOwnersController);
router.get('/:owner_id', ownerController.getOwnerByIdController);
router.post('/', ownerController.createOwnerController);
router.put('/:owner_id', ownerController.updateOwnerByIdController);
router.delete('/:owner_id', ownerController.deleteOwnerByIdController);
router.put('/', ownerController.addPetController);

module.exports = router;
