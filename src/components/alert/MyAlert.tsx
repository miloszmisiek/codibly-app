import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { alertActions } from "../../store/alert-slice";
import { AlertCustom } from "./styles";

const MyAlert: React.FC = () => {
  const show = useSelector((state: RootState) => state.alert.show);
  const variant = useSelector((state: RootState) => state.alert.variant);
  const message = useSelector((state: RootState) => state.alert.message);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      // After 3 seconds set the show value to false
      dispatch(alertActions.handleClose());
    }, 3000);
  }, []);

  return (
    <AlertCustom show={show} variant={variant}>
      {message}
    </AlertCustom>
  );
};

export default MyAlert;
