export const resetLoginForm = () => {
  return {
    type: "CLEAR_LOGIN_FORM"
  };
};
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  };
};
export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRNET_USER"
  };
};
const base_url = "http://localhost:3001";
export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser());
    dispatch(resetLoginForm());
    return fetch(`${base_url}/logout`, {
      method: "DELETE",
      credentials: "include"
    })
      .then(r => r.json())
      .then(data => {
        alert(data.notice);
      });
    //response for logged out from server  test
  };
};

export const login = credentials => {
  return dispatch => {
    return fetch(`${base_url}/sessions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(user => {
        if (!user.error) {
          dispatch(setCurrentUser(user));
        }
        return user;
      });
  };
};

export const getCurrentUser = () => {
  return dispatch => {
    return fetch(`${base_url}/profile`, {
      credentials: "include",
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          setTimeout(function() {
            console.log(user.error);
          }, 10000);
        } else {
          dispatch(setCurrentUser(user));
        }
      });
  };
};
export const signup = credentials => {
  console.log(credentials, "logins");
  return dispatch => {
    const data = { user: credentials };
    return fetch(`${base_url}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(user => {
        if (!user.error) {
          dispatch(setCurrentUser(user));
        }
        return user;
      });
  };
};
