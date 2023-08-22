import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations';
import { selectUserContacts } from 'redux/contacts/selectors';

const useAddContact = () => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);

    dispatch(addContactThunk({ name, number }));
    form.reset();
  };

  return { handleSubmit };
};

export default useAddContact;
