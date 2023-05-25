# grease-monkey-scripts 

### Scripts

#### ExperianRedirect ([scripts/ExperianRedirect/experian-redirect.js](scripts/ExperianRedirect/experian-redirect.js))
After login, Experian directs a non-paid user to a page asking to upgrade to a paid account. This script automatically redirects the user after login immediately to the user's dashboard

#### PublicStorageAllowPaste ([scripts/PublicStorageAllowPaste/public-storage-allow-paste.js](scripts/PublicStorageAllowPaste/public-storage-allow-paste.js))
When looking up a reservation on the Public Storage website, it doesn't allow the user to paste a reservation number. This script allows the user to paste.

#### TreasuryFix ([scripts/TreasuryFix/treasury-fix.js](scripts/TreasuryFix/treasury-fix.js))
TreasuryDirect doesn't allow typing or autofill from a password manager due to the readonly tag. This script fixes this by removing the readonly tag from the text box and allowing typing and autofill from a password manager