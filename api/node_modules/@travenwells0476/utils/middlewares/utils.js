const email = (req, res, next) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(req.body.email)) {
        return next();
    }
    res.status(422).json({
        message: "A valid email was not provided.",
    });
};

const phone = (req, res, next) => {
    if (
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g.test(
            req.body.phone
        )
    ) {
        return next();
    }
    res.status(422).json({
        message: "A valid phone number was not provided.",
    });
};
const birthday = (req, res, next) => {
    if (
        /^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)\d\d$/g.test(
            req.body.birthday
        )
    ) {
        return next();
    }
    res.status(422).json({
        message: "A valid phone number was not provided.",
    });
};
const password = (req, res, next) => {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(req.body.password)) {
        return next();
    }
    res.status(422).json({
        message:
            "A valid password number was not provided. Minimum 8 characters, at least one letter and one number",
    });
};

module.exports = { email, phone, birthday, password };
