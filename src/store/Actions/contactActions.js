import { post } from '../../utils/http-util';
import { handleError } from '../../utils/error-utils';
import { getAppUrl } from '../../utils/environment-util';

const AUTH_ENDPOINT_BASE = 'api/v1/contact';
const SEND_MAIL = 'SEND_MAIL';

const sendMail = (message) => async (dispatch) => {
  try {
    const response = await post(dispatch, SEND_MAIL, `${AUTH_ENDPOINT_BASE}/mail`, message, false);

  } catch (err) {
    await handleError(dispatch, err, SEND_MAIL);
  }
};

export default sendMail;

 