
var User = require('./../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Response = require('./../utils/Response')
exports.auth = {
    register: async function (req, res, next) {
        const {
            email,
        } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                let result = { message: "User Already Exists" };
                return res.json(Response.Response(result));
            }

            user = new User(req.body);
            await user.save();
            // const payload = {
            //     id:user._id,
            //     role:user.role
            // };
            const payload = {
                user
            };

            jwt.sign(
                payload,
                process.env.TOKEN_SECRET, {
                expiresIn: '365h'
            },
                (err, token) => {
                    if (err) throw err;
                    return res.json({
                        token,
                        data:user,
                        status:true,
                        message:'User added successfully'
                    });

                }
            );
        }
        catch (err) {
            return res.json(Response.Response({message: "Error in Saving",errors:err}));
        }
    },
    login: async function (req, res, next) {
        const { email, password } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (!user)
                return res.json({
                    message: "User Not Exist",
                    status:false,
                    data:{},
                });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.json({
                    message: "Incorrect Password !",
                    status:false,
                    data:{},
                });

            // const payload = {
            //     id:user._id,
            //     role:user.role
            // };
            const payload = {
                user
            };

            jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                {
                    expiresIn: '365h'
                },
                (err, token) => {
                    if (err) throw err;
                    return res.status(200).json({
                        token,
                        data:user,
                        status:true,
                        message:'User login successfully'
                    });
                }
            );
        } catch (e) {
            console.error(e);
            return res.status(500).json({
                message: "Server Error"
            });
        }
    },
};
