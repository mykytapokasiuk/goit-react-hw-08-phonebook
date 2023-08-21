import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  logoutUserThunk,
  refreshUserThunk,
} from 'redux/authentication/operations';
import {
  selectAuthentificated,
  selectToken,
  selectUserData,
} from 'redux/authentication/selectors';

const useCheckAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const userData = useSelector(selectUserData);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return { authentificated, handleLogOut, userData };
};

export default useCheckAuth;
