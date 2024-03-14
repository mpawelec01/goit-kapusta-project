// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { GoogleLogin } from 'react-google-login';

// const LoginForm = () => {
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // Tutaj można wykonać logikę logowania
//   };

//   const responseGoogle = (response) => {
//     console.log(response); // Tutaj można wykonać logikę rejestracji za pomocą Google
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           ref={register({ required: true })}
//         />
//         {errors.email && <span>Email jest wymagany</span>}
//         <input
//           type="password"
//           placeholder="Hasło"
//           name="password"
//           ref={register({ required: true })}
//         />
//         {errors.password && <span>Hasło jest wymagane</span>}
//         <button type="submit">Zaloguj się</button>
//       </form>
//       <GoogleLogin
//         clientId="your-google-client-id"
//         buttonText="Zaloguj się z Google"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//       />
//     </div>
//   );
// };

// export default LoginForm;
