"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reg = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i;
exports.emailValidator = (email) => reg.test(email); // true - valid
exports.passwordValidator = (password) => password.length > 7; // true - valid
exports.validateAnswer = (req, res, inInfo) => {
    if (!exports.emailValidator(req.body.email) || !exports.passwordValidator(req.body.password)) {
        res.status(400).json({
            error: 'not valid email/password',
            in: inInfo,
            email: exports.emailValidator(req.body.email),
            password: exports.passwordValidator(req.body.password),
            emailRegExp: '/^[\\w][\\w-.]*@[\\w-]+\\.[a-z]{2,7}$/i',
            passwordRegExp: 'Password must be more than 7 characters...',
        });
        return false;
    }
    else
        return true;
};
//# sourceMappingURL=validators.js.map