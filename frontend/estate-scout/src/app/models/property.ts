import {Image} from "./image";

export interface Property {
  id: number;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  postcode: string;
  town: string;
  numberOfBathrooms: number;
  numberOfBedrooms: number;
  numberOfLivingRooms: number;
  hasGarden: boolean;
  hasParking: boolean;
  petsAllowed: boolean;
  smokersAllowed: boolean;
  studentsAllowed: boolean;
  propertyType: string;
  images: Image[];
  price: number;
  latitude: number;
  longitude: number;
}
