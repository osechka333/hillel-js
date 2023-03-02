import { useFormik } from 'formik'
import { object, string } from 'yup';

const PHONE_TEMPLATE = /^\d{3}(-\d{2}){2}$/;
const validationSchema = object({
  firstName: string()
    .min(3)
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: string()
    .min(3)
    .max(20, 'Must be 20 characters or less'),
  phone: string()
    .matches(PHONE_TEMPLATE, 'Must be template 111-22-33')
    .required('Required'),
});


export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      firstName: 'Harry',
      lastName: 'Potter',
      phone: '777-88-88',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema,
  })

  console.log(formik)

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <ValidationError>{formik.errors.firstName}</ValidationError>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        <ValidationError>{formik.errors.lastName}</ValidationError>
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <ValidationError>{formik.errors.phone}</ValidationError>
      </div>

      <button>Save</button>
    </form>
  )
}

function ValidationError ({ children }) {
  return <span style={{ color: 'red' }}>{children}</span>
}
