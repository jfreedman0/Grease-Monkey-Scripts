// This file is formatted for use with this add-on: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
// ==UserScript==
// @name     PublicStorageAllowPaste
// @version  1.0
// @grant    none
// @include        https://www1.publicstorage.com/access-reservation
// ==/UserScript==

document.getElementById("access-reservation-form-reservation-number").removeAttribute('type');
document.getElementById("access-reservation-form-reservation-number").removeAttribute('onkeypress');