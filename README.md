# Video-Ad-Block

Removes ads on various video streaming sites.

## Supported Services
### Crunchyroll
1. Load crbundle.js into the player (vilos-player iframe)
  - The js is identical to Crunchyroll's js with the function `isUserPremium` set to return true.
  - This doesn't disable ads but causes it to use a different ad player which loads ads through `<video>` tags.
2. Detect changes in the DOM
  - When a change occurs, check for any `<video>`s and dispatch `new Event('ended')`
  - This simulates the ad having run to completion

### Funimation
Funimation appears to use a similar ad service to Crunchyroll, but without the added overhead of requiring custom JavaScript to trigger.
1. Detect changes in the DOM
  - When a change occurs, check for any `<video>`s and dispatch `new Event('ended')`
  - This simulates the ad having run to completion

## Installation Instructions
1. Clone the repo
2. Goto chrome://extensions
3. Enable `Developer Mode`
4. Click `Load Unpacked`
5. Select the repo folder
