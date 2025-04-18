import {CarProps, FilterProps} from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, fuel } = filters;
  
   
    const headers = {
      "x-rapidapi-key": "831e667624msh6e8b3c3e0743dd2p145e05jsn4bbdf4e5db1e",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    };
    
  

    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );


  return await response.json();
  }

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1; 
    const ageFactor = 0.05; 
  
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
   
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append("customer", "img");
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 

  export const updateSearchParams = (type: string, value: string) => {
 
    const searchParams = new URLSearchParams(window.location.search);
  
  
    searchParams.set(type, value);


    return `${window.location.pathname}?${searchParams.toString()}`;
  };

  export const deleteSearchParams = (type: string) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete(type.toLocaleLowerCase());
      return `${window.location.pathname}?${newSearchParams.toString()}`;
  };
  
