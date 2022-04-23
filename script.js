document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    let country = "US"
    const month
    const day

    const pickerDate = document.getElementById('date').value
    const splitDate = pickerDate.split('-');

    const year = splitDate[0]
    console.log(year)

    if (splitDate[1].charAt(0) = "0"){month = splitDate[1].charAt(1)}
      else month = splitDate[1]
    console.log(month)
  
    if (splitDate[2].charAt(0) = "0"){month = splitDate[2].charAt(1)}
    else day = splitDate[2]
    console.log(day)

fetch(`https://calendarific.com/api/v2/holidays?api_key=b75fdd08b1fa9eb16e4821057eef4c83ca861f77&country=${country}&year=${year}&month=${month}&day=${day}`)
// https://calendarific.com/api/v2/holidays?api_key=b75fdd08b1fa9eb16e4821057eef4c83ca861f77&country=US&year=2019&month=1&day=23
  .then(res => res.json()) 
  .then(data => {

    if (data.data.length < 1){
      document.getElementById('name').innerText = "No Results"
      document.getElementById('description').innerText = ""

    else {
      console.log(data)
      let number = Math.floor(Math.random() * data.data.length)
      api_link = data.data[number].api_link
      console.log("api:" + data.data[0].api_link)

      fetch(`${api_link}`)
        .then(res => res.json()) 
        .then(data => {          
          document.getElementById('title').innerText = ""
          document.getElementById('title').innerText = data.data.title
          document.getElementById('artist').innerText = ""
          document.getElementById('artist').innerText = data.data.artist_display
          document.querySelector('img').src =
          `https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    }
    
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}

