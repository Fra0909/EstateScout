package com.estate.scout.helper;

public class DistanceCalculator {

  final static double EARTH_RADIUS = 6371; //Radius of the earth in kilometres

  public static double toRadians(double degrees) {
    return degrees * (Math.PI / 180);
  }

  //Haversine formula to calculate distance between two sets of coordinates, might need in the future
  public static double calculateDistance(double lat1, double lon1, double lat2, double lon2) {

    double dLat = toRadians(lat2 - lat1);
    double dLon = toRadians(lon2 - lon1);
    double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    //Distance in kilometres
    return EARTH_RADIUS * c;
  }

  //A bounding box is a geometric shape that encloses or surrounds an object or a group of objects in a digital image.
  public static double[] calculateBoundingBox(double lat, double lon, double distance) {
    double radDist = distance / EARTH_RADIUS;

    double minLat = lat - Math.toDegrees(radDist);
    double maxLat = lat + Math.toDegrees(radDist);

    double minLon, maxLon;
    double deltaLon = Math.toDegrees(radDist / Math.cos(Math.toRadians(lat)));
    minLon = lon - deltaLon;
    maxLon = lon + deltaLon;

    return new double[]{minLat, minLon, maxLat, maxLon};
  }
}
