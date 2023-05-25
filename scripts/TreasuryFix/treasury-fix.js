// This file is formatted for use with this add-on: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
// ==UserScript==
// @name     TreasuryFix
// @version  1.01
// @grant    none
// @include        https://www.treasurydirect.gov/RS/*
// ==/UserScript==

// TreasuryDirect doesn't allow typing or autofill from a password manager due to the readonly tag
// This script fixes this by removing the readonly tag from the text box and allowing typing and autofill from a password manager
for (let e of document.getElementsByClassName("pwordinput")) { e.removeAttribute('readonly'); }
