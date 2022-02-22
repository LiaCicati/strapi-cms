module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1d378d87b54093dfe0aa65270324c67f'),
  },
});
