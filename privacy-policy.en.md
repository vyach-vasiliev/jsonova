# Privacy Policy for JSONOVA

Last updated: August 3, 2026

JSONOVA is a Chrome extension that displays and formats JSON and XML directly in the current browser tab.

## Data processed by the extension

JSONOVA processes the following data locally on the user’s device:

- the JSON or XML content displayed in the current tab;
- the URL of the current JSON or XML page;
- viewer preferences such as theme, font, font size, line numbers, wrapping, tab size, and structure settings;
- page paths where the user explicitly selects `Disable on this page` (query parameters and hashes are not stored);
- custom CSS entered by the user.

JSON/XML content and URLs may contain personal or sensitive information depending on the page opened by the user. JSONOVA processes this content only to provide its viewing and formatting features.

## How data is used

JSONOVA uses page content and the current URL to:

- detect and parse valid JSON or XML;
- display formatted or raw JSON/XML;
- provide search and folding;
- show readable URL parts;
- copy or download JSON/XML after a user action;
- generate a download filename.

Viewer preferences, custom CSS, and user-selected page exclusions are stored with `chrome.storage.local` so the selected configuration can be restored between sessions.

## Network activity

JSONOVA does not send JSON/XML content, URLs, preferences, or custom CSS to JSONOVA-controlled servers or third-party analytics and advertising services.

## Clipboard access

JSONOVA writes to the clipboard only after the user clicks a copy action. It does not read clipboard contents.

## Local file access

JSONOVA can process local JSON and XML files only when the user explicitly enables “Allow access to file URLs” in Chrome’s extension settings.

## Data sharing and sale

JSONOVA does not sell user data. It does not share user data with third parties and does not use data for advertising, profiling, creditworthiness, or lending.

## Remote code

JSONOVA does not execute remote code. All JavaScript and CSS used by the extension are included in the installed package.

## Data retention and control

JSON/XML content and page URLs are processed in the active tab and are not retained after the page is closed unless the user explicitly selects `Disable on this page`. In that case, JSONOVA stores only the URL without query parameters or hashes. Viewer preferences, custom CSS, and page exclusions remain in `chrome.storage.local` until they are changed, cleared, or the extension is removed.

## Limited use

JSONOVA’s use of information received from Chrome APIs complies with the Chrome Web Store User Data Policy, including the Limited Use requirements. Data is used only to provide or improve JSONOVA’s user-facing viewing features.

## Changes

This policy may be updated when JSONOVA’s functionality or data practices change. The current version will be published at the privacy policy URL shown in the Chrome Web Store listing.

## Contact

For privacy questions, contact the publisher through the Chrome Web Store listing or the project’s public support page:

https://github.com/JSONOVA/jsonova-json-formatter-ext/issues
