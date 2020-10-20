import Timezone from './timezone.js'
import Search from './search.js'
const timezoneList = document.querySelector('.timezoneList')
const searchInput = document.querySelector('.searchInput')
const timezoneDb = Object.keys(moment.tz._zones).map(data=> data.replace('_','/')).map(data=> data.replace('_',' '))
const search = new Search(timezoneDb)
const suggestionList = document.querySelector('.suggestionList')
 
let cityArray = [
    {city: 'Asia/Seoul'},
    {city: 'Asia/Hong_kong'},
    {city: 'Europe/Madrid'},
]

const cityList = cityArray.map(city => new Timezone(city.city))
timezoneList.innerHTML = cityList.map(city => city.render()).join('')

searchInput.addEventListener('input', (e) => {search.displayMatches(e.target.value)})

suggestionList.addEventListener('click', (e)=>{
    if (e.target.tagName !== 'LI'){
        return;
    }
    const zoneName = e.target.dataset.zone.replace(' ','_').split('/')
                    .map(data => data[0].toUpperCase() + data.substr(1).toLowerCase()).join('/')
    cityList.push(new Timezone(zoneName))
    timezoneList.innerHTML = cityList.map(city => city.render()).join('')
    //console.log(cityList)
})


