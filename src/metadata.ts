/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./auth/dto/signin.dto"), { "SignInDto": { email: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./auth/dto/signup.dto"), { "SignUpDto": { email: { required: true, type: () => String }, password: { required: true, type: () => String }, first_name: { required: true, type: () => String }, last_name: { required: true, type: () => String } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }], [import("./auth/auth.controller"), { "AuthController": { "signIn": {}, "signUp": {} } }]] } };
};