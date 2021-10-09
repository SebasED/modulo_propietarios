const ownerService = require('../services/owner.service');
const BaseException = require('../exceptions/baseException');

const getOwnersController = async (req, res) => {
  try {
    const owners = await ownerService.getOwnersService();
    return res.status(200).json(owners);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

const getOwnerByIdController = async (req, res) => {
  try {
    const { owner_id } = req.params;
    const owner = await ownerService.getOwnerByIdService(owner_id);
    return res.status(200).json(owner);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

const createOwnerController = async (req, res) => {
  try {
    const owner = req.body;
    const newOwner = await ownerService.createOwnerService(owner);
    return res.status(200).json(newOwner);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

const updateOwnerByIdController = async (req, res) => {
  try {
    const { owner_id } = req.params;
    const owner = req.body;
    const updatedOwner = await ownerService.updateOwnerService(owner_id, owner);
    return res.status(200).json(updatedOwner);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

const deleteOwnerByIdController = async (req, res) => {
  try {
    const { owner_id } = req.params;
    await ownerService.deleteOwnerService(owner_id);
    return res.status(200).json({ message: 'El propietario ha sido eliminado' });
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

const addPetController = async (req, res) => {
  try {
    const data = req.body;
    const updatePetOwner = await ownerService.addPetService(data);
    return res.status(200).json(updatePetOwner);
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

const generateGuestTokenController = async (req, res) => {
  try {
    const { email } = req.body;
    await ownerService.generateGuestTokenService(email);
    return res.status(200).json({ message: 'Ha sido enviado un email a su correo para el ingreso a la aplicación' });
  } catch (error) {
    if (error instanceof BaseException) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

module.exports = {
  getOwnersController,
  getOwnerByIdController,
  createOwnerController,
  updateOwnerByIdController,
  deleteOwnerByIdController,
  addPetController,
  generateGuestTokenController,
};
