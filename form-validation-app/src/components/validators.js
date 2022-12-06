import * as yup from 'yup';

let userSchema = yup.object({
    name: yup.string().required('This is custom error message: isim bos olamaz!'),
    surname: yup.string().required(),
    password: yup.string().min(5).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Your password don\'t match!'),
});
export default userSchema;