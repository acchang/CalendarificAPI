document.querySelector('button').addEventListener('click', getFetch)

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function getFetch(){
    let country = "US"
    let month
    let day

    let pickerDate = document.getElementById('date').value
    let splitDate = pickerDate.split('-');
    let year = splitDate[0]

    if (splitDate[1].charAt(0) === "0"){month = splitDate[1].charAt(1)}
      else month = splitDate[1]
  
    if (splitDate[2].charAt(0) === "0"){day = splitDate[2].charAt(1)}
    else day = splitDate[2]

fetch(`https://calendarific.com/api/v2/holidays?api_key=b75fdd08b1fa9eb16e4821057eef4c83ca861f77&country=${country}&year=${year}&month=${month}&day=${day}`)
  .then(res => res.json()) 
  .then(data => {
    console.log(data)

    let responseHeader = document.querySelector('#responseHeader');

    if (data.response.holidays.length < 1){
      removeAllChildNodes(responseHeader)

      let noneFound = document.createElement('h4')
      noneFound.id = noneFound
      responseHeader.appendChild(noneFound)
      noneFound.innerHTML = "No holidays today. Celebrate yourself!"}

    else {

      removeAllChildNodes(responseHeader)

      for (i = 0; i < data.response.holidays.length; i++ ) {

        let nameDisplay = document.createElement('h4')
        nameDisplay.id = data.response.holidays[i]
        nameDisplay.innerHTML = data.response.holidays[i].name
        responseHeader.appendChild(nameDisplay)

        let descriptionDisplay = document.createElement('h5')
        descriptionDisplay.id = data.response.holidays[i]
        descriptionDisplay.innerHTML = data.response.holidays[i].description
        nameDisplay.appendChild(descriptionDisplay)

        let locationDisplay = document.createElement('h6')
        locationDisplay.id = data.response.holidays[i]
        locationDisplay.innerHTML = "locations: " + data.response.holidays[i].locations
        descriptionDisplay.appendChild(locationDisplay)

      }
    }

      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}

