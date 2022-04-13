# Overview
###

## Walkthrough of the code
### My index links to the second.js page - my original main.js document was linked to V2 of the API, when I realised there was a newer version V3.1, I decided to create a new file with the copied code and edited it to pull from the new API

## Explain a technical hurdle (something you struggled with)
### There were many technical hurdles that I struggled with on this project. 

## Explain some things you learned (something you enjoyed)
### I enjoyed solving the errors myself. Sometimes they were not even errors, it was just little details that I wanted to fix for myself. Like putting in commas into the larger numbers when pulling information for "population". This took a while to narrow down my google search but I was very happy when I used toLocaleString("en-US"); to make this work

## If you used technology that we haven't covered in class, provide an overview of that
### we may have covered in class, but possibly very briefly. using .join() to present multiple values on tha page, ex to separate them with a comma and appropriate spacing between them. For example the languages, when multiple key value pairs existed for languages were initially showing as x,y,z without spacing so this helped when .join(", "); they were transformed to x, y, z etc.

## Where next? What will you add?
### I think from here I would add filters, for example if someone wanted to choose only Spanish speaking countries, or only countries in Asia, they could narrow down their search. I'd also love to insert a map of each country, or possibly a google map which is interactive, and I think I'd have to make an API myself for that, to link the 250+ countries each with corresponding coordinates 