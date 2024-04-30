const asyncHandler = require('express-async-handler');
const User = require('../../models/authModel/user');

exports.register = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        return res.status(400).send("please fill all requried filed!")
    }

    const userData = await User.findOne({ email });

    if (userData) {
        return res.status(401).send("please email allready axist")
    }

    const newUser = new User({ name, email, password, role });

    const sendData = await newUser.save();

    res.status(200).json({
        _id: sendData._id,
        name: sendData.name,
        password: sendData.passpord,
        email: sendData.email,
        role: sendData.role
    })
})


exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bycriptjs.compare(password, user.password))) {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expireIn: "2d" });

        res.status(200).json({
            _id: user._id,
            password: user.password,
            email: user.email,
            token
        })
    } else {
        return res.status(500).send("please email is allready exist")
    }
}
)

//getaLLUser

exports.register = asyncHandler(async (req, res) => {
    try {
        const getData = await User.find({});
        res.status(200).send(getData);
    } catch (error) {

        res.status(500).send(error.message)

    }
})

//getaLLUserDelete

exports.register = asyncHandler(async (req, res) => {
    try {
        const userData = await User.findByIdAndDelete(req.params.id);

        if (!userData) {
            return res.status(400).send("user is not find");
        } else {
            return res.status(200).send("user successfully deleted!")
        }
    } catch (error) {

        res.status(500).send({error: 'server error'})

    }
})
