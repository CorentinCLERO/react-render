import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()

  return (
    <Formik
    initialValues={{
      login: '',
      password: ''
    }}
    onSubmit={async () => {
      try {
        const postForm = await fetch('https://book-node-mongoose-render.onrender.com/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: "corentinclero@hotmail.com",
            password: "Azerty1"
          })
        })
        const data = await postForm.json()
        console.log("Requete d'authentification réussi", data);
        
        navigate('/', {replace: true})
      } catch (err) {
        console.log("Erreur d'authentification de user", err)
      } 
    }}>
      {({isSubmitting}) => (
        <Form>
          <div className='form-group'>
            <label htmlFor="login">Login:</label>
            <Field className='form-control' type='login' name='login'/>
            <ErrorMessage
              style={{ color: "red" }}
              name='login'
              component="div"
            />
          </div>
          <div className='form-group'>
            <label htmlFor="password">Password:</label>
            <Field className='form-control' type='password' name='password'/>
            <ErrorMessage
              style={{ color: "red" }}
              name='password'
              component="div"
            />
          </div>
          <button
          className='btn btn-primary mt-3'
          type='submit'
          disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Login;