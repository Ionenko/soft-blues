/**
 * Safely attempt to get the property value of an object
 *
 * Note: This function works even if the end value is an empty string (''), 'false' boolean or '0' number value
 *
 * @param obj {object} - Object for finding
 * @param path {string} - (e.g. "a.b.c") path to a property in the object (separate property selectors with dots)
 * @param defaultValue {* = null} - default value. Returns this if path does not exist or resulting value is null/undefined. Default is null.
 * @return {*} Return value of property by specified path if not null/undefined, otherwise returns defaultValue
 */
export const safePropValueOr = (obj, path, defaultValue = null) => {
  if (!path) return defaultValue;
  let val = path.split(".").reduce((acc, item) => {
    if (!acc) return acc;

    return acc[item];
  }, obj);

  if (val === undefined || val === null || val === "") {
    val = defaultValue;
  }

  return val;
};