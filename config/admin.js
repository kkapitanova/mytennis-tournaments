module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '28b4b81c3ddceeaa9bb93d7e5430ce1b'),
  },
});
