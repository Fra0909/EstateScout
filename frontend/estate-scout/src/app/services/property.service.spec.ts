import {TestBed} from '@angular/core/testing';

import {PropertyService} from './property.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('PropertyService', () => {
  let service: PropertyService;
  let httpTestingController: HttpTestingController;
  let propertyURL = "http://localhost:4200/api/properties/";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PropertyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get a property", () => {
    const mockProperties = [
      {
        id: 0,
        addressLine1: "12 Bellington",
        addressLine2: "",
        addressLine3: "",
        postcode: "SE10 1BW",
        town: "Greenwich",
        numberOfBathrooms: 2,
        numberOfBedrooms: 2,
        numberOfLivingRooms: 1,
        hasGarden: true,
        hasParking: true,
        petsAllowed: true,
        smokersAllowed: true,
        studentsAllowed: true,
        propertyType: "FOR_SALE",
        price: 733425,
      },
    ];

    service
      .getProperty(0)
      .subscribe((property) => expect(property).toEqual(mockProperties[0]));

    const req = httpTestingController.expectOne(
      `${propertyURL}${mockProperties[0].id}`
    );

    expect(req.request.method).toEqual("GET");

    req.flush(mockProperties[0]);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
