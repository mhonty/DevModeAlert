# Dev Mode Alert

Dev Mode Alert is a Chrome extension designed to help developers easily distinguish between development and production environments. By adding a customizable border around the browser window when visiting specified URLs, it helps prevent accidental changes in the wrong environment.

## Features

- **Customizable Border**: Set the color and width of the border to suit your preferences.
- **URL Matching with Wildcards**: Use wildcards (`*` and `?`) in URLs to match multiple patterns.
- **Persistent Settings**: All settings are stored in `chrome.storage`, ensuring they persist across browser sessions.

## Installation

### From Chrome Web Store

1. Go to the [Chrome Web Store](#) (link to your extension once it's published).
2. Click "Add to Chrome".
3. Confirm the installation by clicking "Add extension" in the pop-up dialog.

### From Microsoft Edge Add-ons Store

1. Go to the [Microsoft Edge Add-ons Store](#) (link to your extension once it's published).
2. Click "Get".
3. Confirm the installation by clicking "Add extension" in the pop-up dialog.

### Manual Installation

1. Clone or download this repository.
2. Open Chrome or Edge and navigate to `chrome://extensions/` or `edge://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned/downloaded this repository.

## Usage

1. Click on the extension icon in the Chrome or Edge toolbar to open the settings popup.
2. Enable the extension by checking the "Enable Extension" checkbox.
3. Set the desired border color, width, and the URLs (with optional wildcards) where you want the border to be applied.
4. Changes are saved automatically and will be applied to any matching URLs as you browse.

## Settings

- **Enable Extension**: Toggle the extension on or off.
- **Border Color**: Choose the color of the border.
- **Border Width**: Specify the width of the border in pixels.
- **Trigger URL**: Enter the URLs where the border should be applied. Use `*` as a wildcard for zero or more characters and `?` for a single character.

## Contributing

We welcome contributions to enhance Dev Mode Alert. To contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html) file for details.

## Acknowledgments

- Inspired by the need to easily differentiate between development and production environments to prevent accidental changes.

## Contact

For any questions or suggestions, please open an issue on this repository.

