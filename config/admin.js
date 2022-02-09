module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8f60519ad0a68bb6d8178a4016afa174'),
  },
});
