# Iran Time Extension

![Logo](images/icon128.png)

**Iran Time Extension** is a simple Google Chrome extension that displays the current local time in Iran. It updates the time every second and shows the current date in the popup.

## Features

- Displays the current local time in Iran (Tehran) on the browser action badge.
- Shows the current time in the in the popup.
- Automatically updates the time every second.
- Handles system wake-up from sleep and extension startup.

## Installation

Go to the following link using Google chrome in Linux, Windows or MAC and press "Add to chrome".

Link: https://chromewebstore.google.com/detail/iran-local-time/apbpjjmgdkbpcbnmlkledhoelcbfhjll?hl=en-US&utm_source=ext_sidebar

## For developers

To develop such extension for other countries, follow these steps:

1. Clone the repository or download the ZIP file:
    ```sh
    git clone https://github.com/dshahmirzad/Iran-Local-Time.git
    ```
2- Go to the background.js file and change the time zone to your desired country. 

3. Go to `chrome://extensions/` in your Chrome browser.

4. Enable Developer mode by toggling the switch in the top right corner.

5. Click on the "Load unpacked" button and select the directory where you cloned or extracted the extension files.

6. If it works well, just pack it and publish it in Google chrome extension store, but remeber you need to register and pay the registration fee. 

## Usage

After installing the extension, you will see the current local time in Iran on the browser action badge. Click on the badge to open the popup, where you will see the current date in the Iranian calendar.

## Files

- `manifest.json`: Configuration file for the Chrome extension.
- `background.js`: Script to update the time on the browser action badge and handle system events.
- `popup.html`: HTML file for the extension's popup.
- `popup.js`: Script to display the current date in the Iranian calendar in the popup.
- `images/`: Directory containing the extension icons.

## Example Directory Structure

