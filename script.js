document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const initialYear = document.getElementById('year').value
  const initialTopic = document.getElementById('Topic').value

  let year
  let noSpacesYear = initialYear.split(" ")
    if (noSpacesYear.length > 1) {
      year = noSpacesYear.join('%20')}
    else year = noSpacesYear

  let Topic
  let noSpacesTopic = initialTopic.split(" ")
    if (noSpacesTopic.length > 1) {
      Topic = noSpacesTopic.join('%20')}
    else Topic = noSpacesTopic

    let api_link

fetch(`https://api.artic.edu/api/v1/artworks/search?q=${Topic}&query[term][date_start]=${year}`)
  .then(res => res.json()) 
  .then(data => {

    if (data.data.length < 1){
      document.getElementById('title').innerText = "No Results"
      document.getElementById('artist').innerText = ""
      document.querySelector('img').src = ""}

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

