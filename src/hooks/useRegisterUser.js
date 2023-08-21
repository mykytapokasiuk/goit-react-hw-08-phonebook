import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk } from 'redux/authentication/operations';
import { selectAuthentificated } from 'redux/authentication/selectors';

const useRegisterUser = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return { authenticated, handleSubmit };
};

export default useRegisterUser;
