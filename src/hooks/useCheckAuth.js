import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/authentication/operations';
import {
  selectAuthentificated,
  selectToken,
  selectUserData,
} from 'redux/authentication/selectors';

const useCheckAuth = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return { authentificated, handleLogOut, userData, token, dispatch };
};

export default useCheckAuth;
