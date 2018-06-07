# Innovation Lab Booking list

Create Your first booking in 3 simple steps:
  1. Open ```labRequests.js```
  2. Add line according to Your needs
  3. Create Pull request

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
add parameter: ```id``` and set the same id values for event

Example:
```
  { id: 999, resourceId: 'A-ROUNDTABLE', title: 'Repeating Event / Stan.', start: '2018-06-09T16:00:00' },
  { id: 999, resourceId: 'A-ROUNDTABLE', title: 'Repeating Event / Stan.', start: '2018-06-16T16:00:00' }
``` 

### All Day Event 
Specify start day only

Example:
```
  { resourceId: 'C-MEETING', title: 'Workshop + VC / Stan.', start: '2018-06-04'}
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
