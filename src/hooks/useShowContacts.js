import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';
import { selectUserContacts } from 'redux/contacts/selectors';

const useShowContacts = () => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return { handleDeleteContact, contacts };
};

export default useShowContacts;
