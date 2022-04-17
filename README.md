# Overview #
A preliminary single page application that connects users to a country and it's basic information; full name, population, currency, languages, region, flag etc. - with the idea being that it can help generate an idea for a new place to plan a trip
Using the REST countries API, and with a random country chosen on each page refresh.

### Walkthrough of the code ###
My index links to the second.js page - my original main.js document was linked to V2 of the API, when I realised there was a newer version V3.1, I decided to create a new file with the copied code and edited it to pull from the new API, the index.html file is straightforward, and the second.js file starts with the global variables, and then pulls information from the API based on the object selection. I have left the other .js files in this folder to show my learning process, but know that if I was to be sharing this normally, I would have just worked on one file and used the git commit -m "{insert description}" to track my changes. 

### Explain a technical hurdle (something you struggled with) ###
There were a few technical hurdles that I struggled with on this project. As mentioned, I originally coded the main.js using an older version of the API and then had to update the code to match the new V3.1 - when I did this it took me a while to work out that they had updated the new API to object so I had to change the language and currencies code from:
`document.getElementById("language").innerHTML = countryData.languages.map(lan => `${lan.name}`);
    document.getElementById("currencies").innerHTML = countryData.currencies.map(c => `${c.name} (${c.code}) `);
    `
    to: 
 `document.getElementById("language").innerHTML = Object.values(countryData.languages).map(lan => lan).join(", ");
    document.getElementById("currencies").innerHTML = Object.keys(countryData.currencies).map(c => {
        const currency = countryData.currencies[c];`

### Explain some things you learned (something you enjoyed) ###
I enjoyed solving the errors myself. Sometimes they were not even errors, it was just little details that I wanted to fix for myself. Like putting in commas into the larger numbers when pulling information for "population". This took a while to narrow down my google search but I was very happy when I used toLocaleString("en-US"); to make this work. I learnt how to incorporate .join and also how to host my page live on GitHub, which I think will be really useful to build a portfolio. 

### If you used technology that we haven't covered in class, provide an overview of that ###
We may have covered in class, but possibly very briefly. using .join() to present multiple values on tha page, ex. to separate them with a comma and appropriate spacing between them. For example the languages, when multiple key value pairs existed for languages were initially showing as x,y,z without spacing so this helped when .join(", "); they were transformed to x, y, z etc.

### Where next? What will you add? ###
I think from here I would add filters, for example if someone wanted to choose only Spanish speaking countries, or only countries in Asia, they could narrow down their search. I'd also love to insert a map of each country, or possibly a google map which is interactive, and I think I'd have to make an API myself for that, to link the 250+ countries each with corresponding coordinates - although I can see that perhaps I could use the latlng coordinates available. I started the process here just to give an idea of the map - however I would need to continue to workout how to update the map as the select (country) element is changed by the user.