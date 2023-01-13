const router = require('express').Router();
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');

const validation = require('./utils/validation');
const middleware = require('./middleware/Auth');

router.route('/register').post(validation.registerValidation, AuthController.auth.register);
router.route('/login').post(validation.loginValidation, AuthController.auth.login);

//userController
router.route('/user').get(middleware, UserController.user.getAllUsers);
router.route('/user/:id').get(middleware, UserController.user.showOne);
router.route('/user-profile').get(middleware, UserController.user.userProfile);
router.route('/user/:id').delete(middleware, UserController.user.delete);
router.route('/user/:id').put(middleware, validation.profileUpdateValidation, UserController.user.update);
router.route('/user/profilePhotoChange').post(middleware, UserController.user.profilePhotoChange);
router.route('/change-password').post(middleware, validation.changePassword, UserController.user.changePassword);


module.exports = router;