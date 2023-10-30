const boom = require("@hapi/boom");
const checkRolesGql = require("./../utils/checkRolesGql");
const checkJwtGql = require("./../utils/checkJwtGql");
const CategroyService = require("./../services/category.service");
const service = new CategroyService();

const addCategory = async (_, { dto }, context) => {
  const user = await checkJwtGql(context);
  checkRolesGql(user, 'admin');
  console.log(dto);
  return service.create({
    ...dto,
    image: dto.image.href
  });
}

const getCategory = async (_, { id }) => {
  return service.findOne(id);
}

module.exports = { addCategory, getCategory }
