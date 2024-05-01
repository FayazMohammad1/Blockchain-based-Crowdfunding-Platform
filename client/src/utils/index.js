/**
 * Calculates the number of days left until the deadline.
 * @param {Date} deadline The deadline of the campaign
 * @returns {number} The number of days left
 */
export const daysLeft = (deadline) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return remainingDays.toFixed(0);
};

/**
 * Calculates the percentage of the goal reached based on the raised amount.
 * @param {number} goal The target goal amount
 * @param {number} raisedAmount The amount raised so far
 * @returns {number} The percentage of the goal reached
 */
export const calculateBarPercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

/**
 * Checks if the provided URL is an image.
 * @param {string} url The URL of the image
 * @param {function} callback The callback function to handle the result
 */
export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};
