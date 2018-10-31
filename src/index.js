/*!
 * hex-format v2.0.0
 * by Nil Vila
 */

export const defaults = {
  1: {
    default: 'altern',
    type: ['string', 'boolean'],
    accepted: ['invalid', false, 'altern', 'repeat', 'fill']
  },
  2: {
    default: 'repeat',
    type: ['string', 'boolean'],
    accepted: ['invalid', false, 'altern', 'repeat', 'fill']
  },
  3: {
    default: 'altern',
    type: ['string', 'boolean'],
    accepted: ['invalid', false, 'altern']
  },
  4: {
    default: 'altern',
    type: ['string', 'boolean'],
    accepted: ['invalid', false, 'altern', 'repeat', 'fill']
  },
  5: {
    default: 'altern',
    type: ['string', 'boolean'],
    accepted: ['invalid', false, 'altern', 'repeat', 'fill']
  },
  6: {
    default: 'equal',
    type: 'string',
    accepted: ['repeat', 'fill', 'equal', 'truncate']
  },
  7: {
    default: 'truncate',
    type: ['string', 'boolean'],
    accepted: ['invalid', false, 'truncate']
  },
  allValid: {
    type: 'boolean',
    default: false
  },
  minInvalid: {
    type: 'number',
    default: 2
  },
  uppercase: {
    type: 'boolean',
    default: true
  }
};


/**
 * Print a predefined warning message.
 *
 * @param {string} key - Name of the option.
 */

export function printWarnMessage(key) {
  const obj = defaults[key] || defaults.hey.default[key];

  console.warn(`hex-format: '${key}' has changed to its default value (${obj.default}).`);
}


/**
 * Check if the specified option is valid.
 *
 * @param {string} key    - Name of the option.
 * @param {object} valObj - Object containing the 'key'.
 * @param {object} list   - List of the default configuration.
 *
 * @returns {string} A valid value, specified or default.
 */

export function validateChosenValue(key, valObj, list = defaults) {
  const object = list[key];
  const val = valObj ? valObj[key] : undefined;
  const type = object.type;
  const accepted = object.accepted;
  const defaultValue = object.default;

  // Check if the option is specified
  if (!val && val !== false && val !== 0) {
    return defaultValue;
  }

  // Check if the specified option is a valid type
  if (type.includes(typeof val)) {
    // Check if the specified option has an accepted value
    if (accepted && !accepted.includes(val)) {
      console.error(`hex-format: value '${val}' is not accepted for '${key}'.`);
      printWarnMessage(key);

      return false;
    } else {
      return val;
    }
  } else {
    const typeList = typeof type === 'string' ? type : type.join(' or a ');

    // Print error and warning
    console.error(`hex-format: '${key}' must be a ${typeList}.`);
    printWarnMessage(key);

    return defaultValue;
  }
}

export const returnCode = {
  invalid() {
    return false;
  },
  altern(chars) {
    const length = chars.length >= 3 ? 3 : chars.length;
    let result = '#';

    for (let i = 0; i < length; i += 1) {
      result += chars[i].repeat(6 / length);
    }
    return result;
  },
  repeat(chars) {
    return `#${chars.repeat(6).substring(0, 6)}`;
  },
  fill(str, char = '0') {
    return `#${str}${char.repeat(6 - str.length)}`;
  },
  equal(chars) {
    return `#${chars}`;
  },
  truncate(chars) {
    return `#${chars.substring(0, 6)}`;
  }
};

export default class {
  // Options
  constructor(obj) {
    // Declare object
    this.options = {};

    // Set up configuration
    for (const key in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, key)) {
        this.options[key] = validateChosenValue(key, obj);
      }
    }
  }

  format(value) {
    const val = String(value);

    // Return false if value is false
    if (value === false) {
      return false;
    }

    // Return false if 'allValid' is active and there is at least one invalid character
    if (this.options.allValid && val.match(/[^a-fA-F0-9#]/)) {
      return false;
    }

    // Remove from minimum of invalid characters to the end
    const expression = `[^a-fA-F0-9#]{${this.options.minInvalid}}.*`;
    const regex = new RegExp(expression, 'g');
    const cleanedVal = val.replace(regex, '');

    // Remove all invalid characters
    const validVal = cleanedVal.replace(/[^a-fA-F0-9]/g, '');

    // Get length and method
    const length = validVal.length > 7 ? 7 : validVal.length;
    const method = this.options[length];

    // Return false if there insn't any valid character
    if (length === 0) {
      return false;
    }

    // Get a valid hex color format
    const formattedVal = returnCode[method](validVal);

    // Turn hex value to uppercase if the option is active
    if (formattedVal && this.options.uppercase) {
      return formattedVal.toUpperCase();
    }

    return formattedVal;
  }
}
