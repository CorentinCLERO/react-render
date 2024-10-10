import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

function Register() {
  const navigate = useNavigate()

  return (
    <Formik initialValues={{
      name: "",
      description: "",
      author: "67064ddcecf826d734cedb99"
    }}
    onSubmit={async (values) => {
      try {
        const postForm = await fetch('https://book-node-mongoose-render.onrender.com/api/books', {
          method: 'POST',
          data: values
        })
        const data = await postForm.json()
        console.log(data);
        navigate("/welcome")
      } catch (err) {
        console.log("Erreur lors de la recherche des livres", err)
      }
    }}
    validationSchema={Yup.object({
      name: Yup.string().min(5, "Must be greater than 5 characters").max(50, "Must be less than 50 character").required('Name required')
    })}>
      <Form>
        <div className='form-group'>
          <label htmlFor="name">Name:</label>
          <Field className='form-control' type='name' name='name'/>
          <ErrorMessage
            style={{ color: "red" }}
            name='name'
            component="div"
          />
        </div>
        <div className='form-group'>
          <label htmlFor="description">Description:</label>
          <Field className='form-control' type='description' name='description'/>
          <ErrorMessage
            style={{ color: "red" }}
            name='description'
            component="div"
          />
        </div>
        <div className='form-group'>
          <label htmlFor="author">Author:</label>
          <Field className='form-control' type='author' name='author'/>
          <ErrorMessage
            style={{ color: "red" }}
            name='author'
            component="div"
          />
        </div>
        <button
        className='btn btn-primary mt-3'
        type='submit'>
          Submit
        </button>
      </Form>
    </Formik>
  )
}

export default Register;