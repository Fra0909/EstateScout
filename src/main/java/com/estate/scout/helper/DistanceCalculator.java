package com.estate.scout.helper;

/**
 * Helper class for calculating distances and bounding boxes.
 */
public class DistanceCalculator {

  private static final double EARTH_RADIUS_KM = 6371; // Radius of the earth in kilometers

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
   * @return the distance between the two points in kilometers
   */
  public static double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
    double dLat = toRadians(lat2 - lat1);
    double dLon = toRadians(lon2 - lon1);
    double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS_KM * c; // Distance in kilometers
  }

  /**
   * Calculates the bounding box coordinates given a center point and distance.
   *
   * @param lat      latitude of the center point
   * @param lon      longitude of the center point
   * @param distance distance from the center point in kilometers
   * @return an array containing [minLat, minLon, maxLat, maxLon] representing the bounding box
   */
  public static double[] calculateBoundingBox(double lat, double lon, double distance) {
    double radDist = distance / EARTH_RADIUS_KM;

    double minLat = lat - Math.toDegrees(radDist);
    double maxLat = lat + Math.toDegrees(radDist);

    double deltaLon = Math.toDegrees(Math.asin(Math.sin(radDist) / Math.cos(Math.toRadians(lat))));
    double minLon = lon - deltaLon;
    double maxLon = lon + deltaLon;

    return new double[]{minLat, minLon, maxLat, maxLon};
  }
}
