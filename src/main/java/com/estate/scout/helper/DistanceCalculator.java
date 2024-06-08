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

  /**
   * Calculates the bounding box coordinates given a center point and distance.
   *
   * @param lat      latitude of the center point
   * @param lon      longitude of the center point
   * @param distance distance from the center point in miles
   * @return an array containing [minLat, minLon, maxLat, maxLon] representing the bounding box
   */
  public static double[] calculateBoundingBox(double lat, double lon, double distance) {
    final double EARTH_RADIUS_MILES = 3958.8;  // Earth radius in miles
    double radDist = distance / EARTH_RADIUS_MILES;

    // Calculate the min and max latitude
    double minLat = lat - Math.toDegrees(radDist);
    double maxLat = lat + Math.toDegrees(radDist);

    // Calculate the min and max longitude
    double deltaLon = Math.toDegrees(radDist / Math.cos(Math.toRadians(lat)));
    double minLon = lon - deltaLon;
    double maxLon = lon + deltaLon;

    // Formatting to 5 decimal places
    minLat = Math.round(minLat * 100000.0) / 100000.0;
    minLon = Math.round(minLon * 100000.0) / 100000.0;
    maxLat = Math.round(maxLat * 100000.0) / 100000.0;
    maxLon = Math.round(maxLon * 100000.0) / 100000.0;

    return new double[]{minLat, minLon, maxLat, maxLon};
  }


}
