import Timezone from './timezone.js'
import Hour from './hour.js'

//hourComponent.innerHTML = new Hour(0).render()


class TimezoneManager{

    constructor(){
        this.cityArray = [
            // {city: 'Asia/Seoul'},
            // {city: 'Asia/Hong_kong'},
            // {city: 'America/New_York'},
            // {city: 'Austrailia/Sydney'}
        ]
        this.cityList = [];
        this.hourList = [];
        this.timezoneList = document.querySelector('.timezoneList')
        this.hoursList = document.querySelector('.hoursList')
        this.defaultTimezone = moment.tz.guess()
        this.defaultOffset = moment.tz(`${this.defaultTimezone}`).utcOffset()/60; 
    }

    getDifference(city){
        let currentOffset = moment.tz(city).utcOffset()/60 //9
        let difference = (this.defaultOffset - currentOffset) < 1 ? `${this.defaultOffset - currentOffset}`.replace('-','+') : '-' + (this.defaultOffset - currentOffset);
        return difference;
    }

    addZone(target) {
        const zoneName = target.dataset.zone.replace(' ','_').split('/')
        .map(data => data[0].toUpperCase() + data.substr(1).toLowerCase()).join('/')
        this.cityList.push(new Timezone(zoneName, this.getDifference(zoneName)))
        this.timezoneList.innerHTML = this.cityList.map(city => city.render()).join('')
        this.hourList.push(new Hour(zoneName, parseInt(this.getDifference(zoneName))))
        this.hoursList.innerHTML = this.hourList.map(hour=>hour.render()).join('')
    }

    deleteTimezone(){

    }


    setDefault(){
    }

    listRender(){
    
    }

}

export default TimezoneManager;