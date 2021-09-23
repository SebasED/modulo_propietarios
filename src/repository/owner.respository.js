const Owner = require('../models/Owner');
const DatabaseException = require('../exceptions/databaseException');

const createOwnerRepository = async owner => {
  try {
    const newOwner = new Owner(owner);
    return await newOwner.save();
  } catch (error) {
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

const getOwnersRepositroy = async () => {
  try {
    return await Owner.find();
  } catch (error) {
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

const getOwnerByIdRepository = async ownerId => {
  try {
    return await Owner.findById(ownerId);
  } catch (error) {
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

const updateOwnerRepository = async (ownerId, owner) => {
  try {
    return await Owner.findByIdAndUpdate(ownerId, owner, {
      new: true,
    });
  } catch (error) {
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

const deleteOwnerRepository = async ownerId => {
  try {
    return await Owner.findByIdAndDelete(ownerId);
  } catch (error) {
    throw new DatabaseException('Lo sentimos, ha ocurrido un problema');
  }
};

module.exports = {
  createOwnerRepository,
  getOwnersRepositroy,
  getOwnerByIdRepository,
  updateOwnerRepository,
  deleteOwnerRepository,
};
