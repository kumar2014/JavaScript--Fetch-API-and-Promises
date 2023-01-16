// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log('ad', appDiv);

let countryList = document.querySelector('.countries');

function displayCountryDetails(data) {
  const html = `<article class="country">
<img src="${data.flags.png}" with="100%"/>
<h3>${data.name.common}</h3>
<p>${data.region}</p>

</article>`;
  countryList.insertAdjacentHTML('beforeend', html);
}

function getCountryInfo(country) {
  let promise1 = fetch('https://restcountries.com/v3.1/name/' + country);

  let promise2 = promise1.then(function (response) {
    console.log(response.t);
    return response.json(); // return a promise
  });

  promise2.then(function (data) {
    displayCountryDetails(data[0]);
    //  console.log(data)
  });
}
getCountryInfo('usa');
