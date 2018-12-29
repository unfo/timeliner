# Simple timeline grapher

Using Raphael, Moment and custom js to keep myself fresh with coding.

*Example showing 15 days' worth of data*

!examples/15d-data.jpg!

*Example showing 180 days' worth of data*

!examples/180d-data.jpg!


## Current features

* Read in an array of data and graph it on bottom quarter of canvas
* Scale horizontal spacing based on amount of data groups (days)
* Scale vertical values to fit normalized [min, max] of the graph
* Take into account missing dates as zero values so you see gaps in data
* Show start and end dates under the graph

## Planned features

* Add notation to graph with mouse and keyboard
* Store notation and/or data in localStorage depending on data size


### Data format

```js
var data = [
    "Information|24.6.2018 14.28.45|5615",
    "Information|24.6.2018 14.28.45|5617",
    "Information|24.6.2018 14.28.53|4625",
    "Information|20.12.2018 18.45.37|0",
    "Information|20.12.2018 18.45.38|0",
    "Information|20.12.2018 20.35.38|8224",
]
```

# Disclaimer

The date format comes straight out of Windows Event Viewer. Did not bother to fix it in any way, but rather just give the right formatting in-line for the Moment parser. `#dealwithit`.

As I write the js code I am constantly switching between `camelCaseNames` and `python_and_ruby_style`. Again `#dealwithit`.