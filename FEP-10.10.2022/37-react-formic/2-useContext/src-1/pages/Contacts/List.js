import { useEffect, useState } from 'react'
import ContactApi from '../../api/ContactApi'
import { useNavigate, Link } from 'react-router-dom'

export default function List () {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ContactApi.getList()
      .then((list) => {
        setList(list)
      })
  }, [])

  function onEditBtnClick (contact) {
    navigate(`/contacts/edit/${contact.id}`)
  }

  return (
    <>
      <div>
        <Link to='/contacts/create'><button>Create Contact</button></Link>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>


        {list.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phone}</td>
            <td>
            <span>
                <button onClick={() => onEditBtnClick(contact)}>[Edit]</button>
                <button>[Delete]</button>
            </span>
            </td>
          </tr>
        ))}
      </table>
    </>
  )
}
