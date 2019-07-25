//add action for violation response
/// state = []    each violation object    should be a json object 
//this is a new change hopefully the new build is passed to github
export const violationresponse = tickets=> {

  return {
    type: "ADD_VIOLATION",
    tickets
  }

}
export const plateupdate= plates => {

  return {
    type: "ADD_PLATES",
    plates
  }

}






export const search = data => {
  return dispatch => {
debugger 
    return fetch("https://nyc-violation.herokuapp.com/violations", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    } 
    ).then(r => r.json())

      .then(d => {
        dispatch(plateupdate(data))
        if (!d.notice  && !d.error ) {
      
          dispatch(violationresponse(d))
        }
        return d
      }
      )
  }
}
//back up not being used yet 
export const getplates = () => {

  return dispatch => {

    return fetch("https://nyc-violation.herokuapp.com/plates", {

      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },

    }
    ).then(r => r.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        }
        else {
          console.log(data)
        }
      }
      )
  }
}



