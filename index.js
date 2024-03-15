var tracker = require('delivery-tracker');
var courier = tracker.courier(tracker.COURIER.ROYALMAIL.CODE);
const trackingNumbers = [
  'WG339979238GB',
  'WG339979153GB',
  'WG339979048GB',
  'WG339128200GB',
  'WG330024689GB',
  'WG317952370GB',
  'WG313576660GB'
];

trackingNumbers.forEach(trackingNumber => {
    courier.trace(trackingNumber, function (err, result) {
        if (err) {
            console.error(`Error for ${trackingNumber}:`, err);
        } else {
            console.log(`Tracking Result for ${trackingNumber}:`, result);

        }
    });
});
