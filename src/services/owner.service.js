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
  const { name, lastname, updated_by, document, phonenumber, email, address } = owner;
  if (
    name === '' ||
    lastname === '' ||
    updated_by === '' ||
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

const addPetService = async data => {
  const {owner_id, pet_id} = data;
  if(owner_id === '' || pet_id === '' || pet_id === undefined || owner_id === undefined)    
    return('Para agregar una mascota debe enviar tanto el owner_id como el pet_id'); 

return await ownerRepository.addPetRepository(data);
}

module.exports = {
  createOwnerService,
  getOwnersService,
  getOwnerByIdService,
  updateOwnerService,
  deleteOwnerService,
  addPetService,
};
