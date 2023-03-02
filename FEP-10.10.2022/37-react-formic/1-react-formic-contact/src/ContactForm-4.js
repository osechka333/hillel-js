import { useFormik } from 'formik'

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      firstName: 'Harry',
      lastName: 'Potter',
      phone: '777-88-88',
    },
    onSubmit: (values) => {
      console.log(values)
    }
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
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
      </div>

      <button>Save</button>
    </form>
  )
}
