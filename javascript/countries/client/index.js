let getCountriesData = new Promise((resolve, reject) => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Network error, could not connect to countries endpoint"
        );
      }
      resolve(response.json());
    })
    .catch((error) => {
      reject(error.message);
    });
});

function parseCountriesData(data) {
  let countriesData = [];
  for (let index = 0; index < data.length; index++) {
    countriesData.push([
      data[index].flags.png,
      data[index].name.common,
      data[index].population,
      data[index].region,
      data[index].capital,
    ]);
  }
  countriesData = countriesData.sort((a, b) => a[1] - b[1]);
  displayCountriesCard(countriesData);
}

function displayCountriesCard(countriesData) {
  let printedCountriesData = [];
  for (let index = 0; index < countriesData.length; index++) {
    printedCountriesData.push(`
        <article>
            <img src="${countriesData[index][0]}" />
            <h4>${countriesData[index][1]}</h4>
            <h6>${countriesData[index][2]}</h6>
            <h6>${countriesData[index][3]}</h6>
            <h6>${countriesData[index][4]}</h6>
        </article>
        `);
  }
  console.log(printedCountriesData);
}

getCountriesData
  .then((data) => {
    parseCountriesData(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("operations are now completed!");
  });

function changeTheme() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.getElementById("navigation-bar-right__button-mode").src =
      "./assets/light-mode.svg";
  } else {
    document.getElementById("navigation-bar-right__button-mode").src =
      "./assets/dark-mode.svg";
  }
}
