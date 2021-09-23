const ownerRepository = require('../repository/owner.respository');
const EmptyFieldException = require('../exceptions/emptyFieldException');

const createOwnerService = async owner => {
  const { name, lastname, created_by, document, phonenumber, email, address } = owner;
  if (
    name === '' ||
    lastname === '' ||
    created_by === '' ||
    document === '' ||
    phonenumber === '' ||
    email === '' ||
    address === ''
  )
    throw new EmptyFieldException('La información del propietario debe esta completa, no deje campos vacios');
  return await ownerRepository.createOwnerRepository(owner);
};

const getOwnersService = async () => {
  return await ownerRepository.getOwnersRepositroy();
};

const getOwnerByIdService = async ownerId => {
  return await ownerRepository.getOwnerByIdRepository(ownerId);
};

const updateOwnerService = async (ownerId, owner) => {
  const { name, lastname, created_by, document, phonenumber, email, address } = owner;
  if (
    name === '' ||
    lastname === '' ||
    created_by === '' ||
    document === '' ||
    phonenumber === '' ||
    email === '' ||
    address === ''
  )
    throw new EmptyFieldException('La información del propietario debe esta completa, no deje campos vacios');

  return await ownerRepository.updateOwnerRepository(ownerId, owner);
};

const deleteOwnerService = async ownerId => {
  return await ownerRepository.deleteOwnerRepository(ownerId);
};

module.exports = {
  createOwnerService,
  getOwnersService,
  getOwnerByIdService,
  updateOwnerService,
  deleteOwnerService,
};
