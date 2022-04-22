
// within parameters, need to get the image id and pull it from another DB
// do a full text search and get the first object and print it?
// return it to https://www.artic.edu/iiif/2/6884e725-f7ae-cb1c-853a-201fc4fe5630/full/600,/0/default.jpg



document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const initialYear = document.getElementById('year').value
  const initialTopic = document.getElementById('Topic').value

  let year
  let noSpacesYear = initialYear.split(" ")
    if (noSpacesYear.length > 1) {
      year = noSpacesYear.join('%20')}
    else year = noSpacesYear
    console.log(year)

  let Topic
  let noSpacesTopic = initialTopic.split(" ")
    if (noSpacesTopic.length > 1) {
      Topic = noSpacesTopic.join('%20')}
    else Topic = noSpacesTopic
    console.log(Topic)

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

// 1980, woman gets Cindy Sherman

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



      // console.log(data.data[0].api_link.title)
      // console.log(data.data[0].api_link.artist_display)
      // console.log(data.data[0].api_link.image_id)

      // get first item out of array (later randomize for length of array)
      // get api link, ie https://api.artic.edu/api/v1/artworks/97434
      // from api link, get title, artist_display, image_id	
      // https://www.artic.edu/iiif/2/{identifier}/full/600,/0/default.jpg


    //   const lineBreak = document.createElement('br');
    //   document.getElementById('incidentlist').appendChild(lineBreak);
    //   document.getElementById('incidentlist').innerText = "";

    //   if (data.length < 1){
    //     document.getElementById('incidentlist').innerText = "No Results"
    //   }
    //   else {
    //     for (i=0; i<data.length; i++) {
    //       // document.querySelector('h2').innerText += data[i].complaint_type + " : " + data[i].descriptor
    //       // document.querySelector('h2').appendChild(lineBreak)

    //       document.getElementById('incidentlist').innerText += data[i].complaint_type + " : " + data[i].descriptor
    //       document.getElementById('incidentlist').appendChild(lineBreak)
    //     }
    //   }
//   })
//   .catch(err => {
//       console.log(`error ${err}`)
//   });

// }

fetch(`https://api.artic.edu/api/v1/artworks/193864`)
.then(res => res.json()) 
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(`error ${err}`)
});
