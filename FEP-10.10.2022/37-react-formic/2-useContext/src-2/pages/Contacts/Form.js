import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ContactApi from '../../api/ContactApi'

export default function Form () {
  const navigate = useNavigate()
  const [contact, setContact] = useState({});
  let { idContact } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (idContact) {
      ContactApi.getOne(idContact)
        .then((res) => {
          setContact(res)
        })
    }
  }, [idContact])

  function onInputChange(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    })
  }

  function onSubmit (e) {
    e.preventDefault()

    // validate contact

    if (contact.id) {
      ContactApi.update(contact.id, contact)
        .then(() => {
          navigate('/contacts')
        })
    } else {
      ContactApi.create(contact)
        .then(() => {
          navigate('/contacts')
        })
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="hidden" name="id" id="id" />
      <input value={contact.firstName} onChange={onInputChange} type="text" name="firstName" id="nameInput" />
      <input value={contact.lastName} onChange={onInputChange} type="text" name="lastName" id="surnameInput" />
      <input value={contact.phone} onChange={onInputChange} type="text" name="phone" id="phoneInput" />
      <button>Save</button>
    </form>
  )
}
