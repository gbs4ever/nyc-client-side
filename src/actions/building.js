export const buildingsresponse = tickets => {

  return {
    type: "ADD_BUILDINGS_VIOLATIONS",
    tickets
  }

}







export const searchbuildings = data => {
  return dispatch => {
 
    return fetch("https://nyc-violation.herokuapp.com/buildings", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    ).then(r => r.json())
 
      .then(d => {
      
        // dispatch(plateupdate(data))
        if (!d.notice && !d.error) {

          dispatch(buildingsresponse(d))
        }
        return d
      }
      )
  }
}