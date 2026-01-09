    import instance from './AxiosInstance';

const signinUser = (data) => {
    return instance.post('/users/signin', data);
}
const signupUser = (data) => {
    return instance.post('/users/signup', data);
}

const AuthServices = {signinUser, signupUser};
export default AuthServices;