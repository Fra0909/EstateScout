package com.estate.scout.helper;

/**
 * Helper class for calculating distances and bounding boxes.
 */
public class DistanceCalculator {

  private static final double EARTH_RADIUS_MILES = 3959; // Radius of the earth in miles

  /**
   * Converts degrees to radians.
   *
   * @param degrees the value in degrees
   * @return the value in radians
   */
  public static double toRadians(double degrees) {
    return Math.toRadians(degrees);
  }

  /**
   * Calculates the distance between two sets of coordinates using the Haversine formula.
   *
   * @param lat1 latitude of point 1
   * @param lon1 longitude of point 1
   * @param lat2 latitude of point 2
   * @param lon2 longitude of point 2
   * @return the distance between the two points in miles
   */
  public static double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
    double dLat = toRadians(lat2 - lat1);
    double dLon = toRadians(lon2 - lon1);
    double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS_MILES * c; // Distance in miles
  }

  public static double[] expandBoundingBox(double minLat, double minLon, double maxLat, double maxLon, double distance) {
    final double EARTH_RADIUS_MILES = 3958.8;  // Earth radius in miles

    // Calculate the center of the bounding box
    double centerLat = (minLat + maxLat) / 2;
    double centerLon = (minLon + maxLon) / 2;

    // Convert distance to radians
    double radDist = distance / EARTH_RADIUS_MILES;

    // Calculate new min and max latitude
    double newMinLat = centerLat - Math.toDegrees(radDist);
    double newMaxLat = centerLat + Math.toDegrees(radDist);

    // Calculate new min and max longitude
    double deltaLon = Math.toDegrees(radDist / Math.cos(Math.toRadians(centerLat)));
    double newMinLon = centerLon - deltaLon;
    double newMaxLon = centerLon + deltaLon;

    // Round to 5 decimal places
    newMinLat = Math.round(newMinLat * 100000.0) / 100000.0;
    newMinLon = Math.round(newMinLon * 100000.0) / 100000.0;
    newMaxLat = Math.round(newMaxLat * 100000.0) / 100000.0;
    newMaxLon = Math.round(newMaxLon * 100000.0) / 100000.0;

    return new double[]{newMinLat, newMinLon, newMaxLat, newMaxLon};
  }


}
