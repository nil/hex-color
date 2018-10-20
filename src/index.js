/*!
 * hex-format v1.0.0
 * by Nil Vila
 */


function hexFormat(val) {
  // Return false if val is false, undefined, null, empty,...
  if (!val && val !== 0) {
    return false;
  }

  // Remove from two invalid characters to end
  let chars = String(val).replace(/[^a-fA-F0-9#]{2}.*/, '');

  // Remove invalid hexadecimal
  chars = chars.replace(/[^a-fA-F0-9]/g, '');
  const length = chars.length;
  let hex = '#';

  /*
   * 2 characters - alternate 1st and 2nd character three times
   * 3-5 characters - repeat each character twice
   * 6 or more characters - use only the first 6 characters
   * 0 valid characters - return false
   */

  if (length === 1) {
    hex += chars.repeat(6);
  } else if (length === 2) {
    hex += chars.repeat(3);
  } else if (length >= 3 && length < 6) {
    for (let i = 0; i < 3; i += 1) {
      hex += chars[i].repeat(2);
    }
  } else if (length >= 6) {
    hex += chars.substring(0, 6);
  } else {
    return false;
  }

  // Return valid, uppercase hexadecimal code
  return hex.toUpperCase();
}

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports) {
  module.exports = hexFormat;
}
