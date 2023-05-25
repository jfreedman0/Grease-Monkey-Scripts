// This file is formatted for use with this add-on: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
// ==UserScript==
// @name     ExperianRedirect
// @version  2.1
// @grant    none
// @include        /https://usa.experian.com/.*member/preload/
// ==/UserScript==

// After login, Experian directs a non-paid user to a page asking to upgrade to a paid account
// This script automatically redirects the user after login immediately to the user's dashboard
window.location.replace ("https://usa.experian.com/member/dashboard");