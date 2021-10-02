// Variables and Constants
base_url = 'https://holidays.abstractapi.com/v1/'; 
api_key = '3e9f7a9fdbfe4adda2318bdf3f611928';

let holidayData;

// Cached Element References
// selecting the element for country
const $country = $('#country');
// selecting the element for day
const $day = $('#day');
// selecting the element for month
const $month = $('#month');
// selecting the element for year
const $year = $('#year');
// selecting the element for input site search
const $searchSite = $('#siteCountrySearch')




// step 1 is always select the dom element first
const $form = $('form'); 
const $button = $('submit');
const $holidayList = $('#holidays');
const $searchBtn = $('submit'); 


// then you attach an event listener
// event handler functions are passed an object containing data representing the event

$form.on('submit', handleData);

function handleData(evt) {
  evt.preventDefault();
  let chosenCountry = $country.val();
  let chosenMonth = parseInt($month.val());
  let chosenDay = parseInt($day.val());
  let chosenYear = parseInt($year.val());

  $.ajax(`${base_url}?api_key=${api_key}&country=${chosenCountry}&year=${chosenYear}&month=${chosenMonth}&day=${chosenDay}`).then(function(data) {
    // console.log(evt, data);
    // console.log(data);
    holidayData = data;
    render();
  }, function(error){
    console.log()
    console.log(error);
  });
}

function render() {
  for (let i = 0; i < holidayData.length; i++){
    // console.log(holidayData[i].name);
     $holidayList.append(`<li>Holiday date: ${holidayData[i].date}</li>`);
     $holidayList.append(`<li>Country: ${holidayData[i].country}</li>`);
     $holidayList.append(`<li>Holiday name: ${holidayData[i].name}</li>`);
     $holidayList.append(`<li>Holiday Type: ${holidayData[i].type}</li>`);
     console.log($holidayList.html())
  }

}
