import { ApplicationSettings } from "@nativescript/core"
export const ApplicationSettingsService = {
    /**
     * Get an item from LocalStorage
     * Allows saving any JSON data
     * @param {String} key - Key to retrieve data by
     * @param {*} [fallback] - a fallback value if key is not found
     * @return9 {*}
     */
    getStringItem (key, fallback) {
      try {
        let item = ApplicationSettings.getString(key)
        return item ? JSON.parse(item) : fallback
      } catch (err) {
        return fallback
      }
    },
    /**
     * Sets an item by its key
     * @param {String} key - Key to save by
     * @param {*} value - Value to save. Transforms to a JSON string
     */
    setStringItem (key, value = {}) {
        ApplicationSettings.setString(key, JSON.stringify(value))
    },
    /**
     * Remove item by its key
     * @param {string} key
     */
    removeItem (key) {
        ApplicationSettings.remove(key)
    },
    /**
     * Removes all items from storage
     */
    clearAllItems () {
        ApplicationSettings.clear()
    }
  }