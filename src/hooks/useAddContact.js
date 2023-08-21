import { useDispatch } from 'react-redux';

const useAddContact = () => {
  const dispatch = useDispatch();

  const onAddContact = (name, phone) => {
    const isExist = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      onSameName(name);
      return;
    }
    const newContact = {
      name,
      phone,
    };
    dispatch(addContactThunk(newContact));
  };

  return {
    handleSubmit,
    handleChange,
    contactNameId,
    name,
    contactPhoneId,
    phone,
  };
};

export default useAddContact;
