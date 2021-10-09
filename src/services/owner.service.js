const axios = require('axios');
const ownerRepository = require('../repository/owner.respository');
const EmptyFieldException = require('../exceptions/emptyFieldException');
const config = require('../config');

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
  const { owner_id, pet_id } = data;
  if (owner_id === '' || pet_id === '' || pet_id === undefined || owner_id === undefined)
    throw new EmptyFieldException('Para agregar una mascota debe enviar tanto el owner_id como el pet_id');

  return await ownerRepository.addPetRepository(data);
};

const generateGuestTokenService = async ownerEmail => {
  const owner = await ownerRepository.getOwnerByEmailRepository(ownerEmail);
  if (!owner) throw new EmptyFieldException('El propietario no se encuentra registrado');
  try {
    const { data } = await axios.post(`${config.SECURITY_MODULE}/generateguesttoken`, {
      guest_id: owner._id,
    });
    await axios.post(config.EMAIL_MODULE, { token: data.token, guest_email: owner.email });
  } catch (error) {
    throw new Error();
  }
};

module.exports = {
  createOwnerService,
  getOwnersService,
  getOwnerByIdService,
  updateOwnerService,
  deleteOwnerService,
  addPetService,
  generateGuestTokenService,
};
