document.querySelector('button').addEventListener('click', getFetch)

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

    if (data.response.holidays.length < 1){
      document.getElementById('name').innerText = "Nothing! These days are rarer than you might think."
      document.getElementById('description').innerText = ""}

    else {
      // use a for loop to display all, need to create html elements.
      for (i = 0; i < data.response.holidays.length; i++ ) {
        
        // console.log(data.response.holidays[i].name)
        // document.getElementById('name').innerText = ""
        document.getElementById('name').innerHTML += (data.response.holidays[i].name + data.response.holidays[i].description)


        // document.getElementById('name').innerText = ""
        // const response = document.getElementById('response')
        // // response.innertext = ""

        // let nameDisplay = document.createElement("h3") 
        // nameDisplay.setAttribute('id', 'nameDisplay')
        // document.getElementById('nameDisplay').innerText = data.response.holidays[i].name
        // name.append(nameDisplay)


      }
    // document.getElementById('name').innerText = ""
    // document.getElementById('name').innerText = data.response.holidays[0].name

    // document.getElementById('description').innerText = ""
    // document.getElementById('description').innerText = data.response.holidays[0].description
    }

      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}

