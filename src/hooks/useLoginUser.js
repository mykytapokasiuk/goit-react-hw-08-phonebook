import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from 'redux/authentication/operations';
import { selectAuthentificated } from 'redux/authentication/selectors';

const useLoginUser = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };

  return { authenticated, handleSubmit };
};

export default useLoginUser;
