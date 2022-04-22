
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

fetch(`https://api.artic.edu/api/v1/artworks/search?q=${Topics}&query[term][date_start]=${year}`)

  .then(res => res.json()) 
  .then(data => {
      console.log(data)

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
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}




// fetch(`https://api.artic.edu/api/v1/artworks`)
// .then(res => res.json()) 
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(`error ${err}`)
// });
