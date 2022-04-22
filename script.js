fetch(`https://api.artic.edu/api/v1/artworks`)
.then(res => res.json()) 
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(`error ${err}`)
});


// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const initialStreet1 = document.querySelector('input').value
//   const initialStreet2 = document.getElementById('street2').value
//   const initialBorough = document.getElementById('borough').value

//   let street1
//   let noSpacesStreet1 = initialStreet1.split(" ")
//     if (noSpacesStreet1.length > 1) {
//       street1 = noSpacesStreet1.join('%20')}
//     else street1 = noSpacesStreet1
//     console.log(street1)

//   let street2
//   let noSpacesStreet2 = initialStreet2.split(" ")
//     if (noSpacesStreet2.length > 1) {
//       street2 = noSpacesStreet2.join('%20')}
//     else street2 = noSpacesStreet2
//     console.log(street2)

//   let borough
//   let noSpacesBorough = initialBorough.split(" ")
//     if (noSpacesBorough.length > 1) {
//       borough = noSpacesBorough.join('%20')}
//     else borough = noSpacesBorough
//     console.log(borough)

//   fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?cross_street_1=${street1}&cross_street_2=${street2}&borough=${borough}`)
//   .then(res => res.json()) 
//   .then(data => {
//       console.log(data)

//       const lineBreak = document.createElement('br');
//       // document.querySelector('h2').appendChild(lineBreak);
//       // document.querySelector('h2').innerText = "";
//       document.getElementById('incidentlist').appendChild(lineBreak);
//       document.getElementById('incidentlist').innerText = "";

//       if (data.length < 1){
//         document.getElementById('incidentlist').innerText = "No Results"
//       }
//       else {
//         for (i=0; i<data.length; i++) {
//           // document.querySelector('h2').innerText += data[i].complaint_type + " : " + data[i].descriptor
//           // document.querySelector('h2').appendChild(lineBreak)

//           document.getElementById('incidentlist').innerText += data[i].complaint_type + " : " + data[i].descriptor
//           document.getElementById('incidentlist').appendChild(lineBreak)
//         }
//       }
//   })
//   .catch(err => {
//       console.log(`error ${err}`)
//   });
// }


