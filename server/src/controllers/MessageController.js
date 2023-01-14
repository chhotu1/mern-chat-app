var Message = require('./../models/Message');
const Response = require('./../utils/Response')

exports.message = {
    getMessages: async function (req, res, next) {
        let userId = req.user._id;
        try {
            let from =userId;
            const { to } = req.body;
            const messages = await Message.find({
                users: {
                    $all: [from, to],
                },
            }).sort({ updatedAt: 1 });
            const projectedMessages = messages.map((msg) => {
                return {
                    fromSelf: msg.sender.toString() === from,
                    message: msg.message.text,
                };
            });
            // res.json(projectedMessages);
            let result = { message: "Message list successfully.",status: true,data:projectedMessages };
            return res.json(Response.Response(result));
        } catch (ex) {
            next(ex);
        }

    },
    addMessages: async function (req, res, next) {
        let userId = req.user._id;
        try {
            let from =userId; 
            const {  to, message } = req.body;
            const data = await Message.create({
                message: { text: message },
                users: [from, to],
                sender: from,
            });
            if(data){
                let result = { message: "Message added successfully.",status: true,data:data };
                return res.json(Response.Response(result));
            }
            else return res.json(Response.Response({message:'Failed to add message to the database'}));
        } catch (ex) {
            next(ex);
        }
    }
}

