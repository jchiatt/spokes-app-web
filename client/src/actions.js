/* eslint func-names: 0 */

export const HANDLE_USER_SESSION = 'HANDLE_USER_SESSION';

export function handleSession() {
  return function (dispatch) {
    return dispatch({
      type: HANDLE_USER_SESSION,
    });
  };
}
