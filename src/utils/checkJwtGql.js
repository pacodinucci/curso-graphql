const boom = require("@hapi/boom");

async function checkJwtGql(context) {
  const { user } = await context.authenticate('jwt', {session: false});
  if(!user) {
    throw boom.unauthorized("JWT is not valid.");
  }
  return user;
}

module.exports = checkJwtGql;
