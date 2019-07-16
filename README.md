# Important Notes

- Booking is cancelled is you don't come within 10 minutes after start of Your booking! 
- In case booking extends outside of business hours, You need to create ticket for extra Cleaning http://sappip.deutsche-boerse.de/irj/portal/FM



# Innovation Lab Booking list

Create Your first booking in 4 simple steps:
  1. Login to GitHub with your UserId
  2. Open ```labRequests.js```
  3. Add line according to Your needs
  4. Create Pull request

You can choose from three areas:
 - A-ROUNDTABLE - The round table meeting area with 8 seats, Sharp SmartScreen 60'
 - B-LONGTABLE  - The long table workshop area with +12 seats, Sharp SmartScreen 80'
 - C-MEETROOM   - The meeting room with VC equip, 10 seats, Sharp screen 70'

## Format of booking:

```
 { title: '<name of event> / Your First S.', 
   start: '2018-12-24T08:30:00',  
   end  : '2018-12-31T16:30:00', 
   resourceId: <see-above-values>
} 
```
After commit, the pull request is automatically raised. When approved by authorized user, booking is confirmed and displays in calendar within one minute.

## Options

### Repeating Events
add parameter: ```id``` and set the same id values for event. Please be aware, that repeating meetings are accepted in exceptional cases only. In case of such request, please notify Area Owner.

Example:
```
  { id: 999, resourceId: 'A-ROUNDTABLE', title: 'Repeating Event / Stan.', start: '2018-06-09T16:00:00' },
  { id: 999, resourceId: 'A-ROUNDTABLE', title: 'Repeating Event / Stan.', start: '2018-06-16T16:00:00' }
``` 

### All Day Event
specify start and end time. In case you'll end after 6 PM, raise a ticket to FM ([link](http://sappip.deutsche-boerse.de/irj/portal/FM)) to postpone area cleanup. 

Example:
```
  { resourceId: 'C-MEETROOM', title: 'Workshop + VC / Stan.', start: '2018-06-04T08:00:00', end: '2018-06-04T17:00:00'}
```


### Multi Day Events
State first and (last day + 1) without time intervals

Example:
```
  { resourceId: 'B-LONGTABLE', title: 'Innovation Days / Stan.', start: '2018-06-04', end: '2018-06-08' }
```


### URL
Parameter adds URL link to the Event

Example:
```
   url: 'http://google.com/' 
```  
