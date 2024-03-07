import * as Yup from 'yup'

function noWhitespace() {
    return this.transform((value, originalValue) => (/\s/.test(originalValue) ? NaN : value));
  }

  Yup.addMethod(Yup.string, 'noWhitespace', noWhitespace);


export const signUpSchemas = Yup.object({
    firstname: Yup.string().noWhitespace().min(2).max(25).required('Please Enter Your First Name'),
    lastname : Yup.string().noWhitespace().min(2).max(25).required('Please Enter Your Last Name'),
    username : Yup.string().noWhitespace().min(6).max(12).required('Please Enter Your User Name'),
    // dateofbirth : Yup.number().required('Please Enter Your Date of Birth'),
    // location: Yup.string().noWhitespace().min(6).max(12).required('Please Enter Your location'),
    email: Yup.string().email().required('Please Enter Your Email'),
    // password:  Yup.string().noWhitespace().min(6).required('Please Enter a Strong Password'),
    // confirm_password: Yup.string().noWhitespace().required().oneOf([Yup.ref('password'), null], "Password must match")
})