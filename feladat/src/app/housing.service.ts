import {Injectable} from '@angular/core';
import {HousingLocation} from './housinglocation';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `https://photos.zillowstatic.com/fp/06888600318e1a3628c0db4fd2c976d1-uncropped_scaled_within_1536_1152.webp`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `https://photos.zillowstatic.com/fp/97cbba0bde18a13d3b6e7a9099e8fa2a-uncropped_scaled_within_1536_1152.webp`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/2a/25/3c/alaska-heritage-house.jpg?w=700&h=-1&s=1`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `https://cdn.rt.emap.com/wp-content/uploads/sites/4/2012/12/29053215/canada-house-canadian-1.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `https://static01.nyt.com/images/2023/02/12/realestate/08WYG-INDIANAPOLIS/08WYG-INDIANAPOLIS-superJumbo.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Fairbanks',
      state: 'AK',
      photo: `https://www.shutterstock.com/image-photo/cabin-alaska-woods-600nw-2141555513.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `https://photos.zillowstatic.com/fp/94bc0ab8af23445f771d3400894322ce-uncropped_scaled_within_1536_1152.webp`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `https://photos.zillowstatic.com/fp/a0b6f9fc782326794e7b455d1b09ac7f-uncropped_scaled_within_1536_1152.webp`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Calm and Aspirations Group',
      city: 'Oakland',
      state: 'CA',
      photo: `https://photos.zillowstatic.com/fp/5c765ed1ec1819c3a4f139d47dfa0d7b-uncropped_scaled_within_1536_1152.webp`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `https://img.chime.me/imageemb/mls-listing/676/24-4537/eaeb3b1e/1714279575/original_HMABCoAgDADAF7XpcCX9RoySzDbc_k_QNXe1HbEeL2gTFwPTMrs-xU-ZA6oMLB0pUAqJ1shMtGXOnGP4LQK3Xl8AAAD__w-jpg.webp`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocation/* | undefined*/ {
    let location = this.housingLocationList.find((housingLocation) => housingLocation.id === id);
    if(location){
      return location;
    }
    return this.createHousingLocation();
  }
  createHousingLocation(): HousingLocation{
    var location: HousingLocation = {
      id: this.housingLocationList.length,
      name: '',
      city: '',
      state: '',
      photo: ``,
      availableUnits: 0,
      wifi: false,
      laundry: false,
    };
    return location;
  }
  save(housingLocation: HousingLocation): void {
    if(housingLocation){
      if(this.housingLocationList.includes(housingLocation)){
        this.housingLocationList[housingLocation.id] = housingLocation;
      }
      else{
        this.housingLocationList.push(housingLocation);
      }
    }
  }
  remove(housingLocation: HousingLocation | undefined): void {
    if(housingLocation){
      const index = this.housingLocationList.indexOf(housingLocation)
      if (index>-1){
        this.housingLocationList.splice(index, 1);
      }
    }
  }
  contains(housingLocation: HousingLocation): boolean{
    return this.housingLocationList.includes(housingLocation);
  }
}