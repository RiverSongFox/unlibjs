# Online Presence

For given sets of time intervals for individual users, returns the hours when all of them were online. For example:

```
                       9  10 11 12 13 14 15 16 17 18 19 20 21 22 23
                       :  :  :  :  :  :  :  :  :  :  :  :  :  :  :
User A: 9-15, 18-21  = :##:##:##:##:##:##:  :  :  :##:##:##:  :  :
User B: 10-14, 21-22 = :  :##:##:##:##:  :  :  :  :  :  :  :##:##:
```

Conditions:

1. Interval starting hour is less than the ending, i.e. interval can't extend to the next day
