# Time.Off
A travel app for people

## Problem & Related Work
The problem we decided to tackle in our application deals with the issue of not knowing how to maximize one’s time in a foreign city or place. When traveling on a limited time frame, there are only so many places one can visit and only so many things one can do. Our application aims to provide users with a restaurant, event, and sightseeing itinerary depending on their location and available time. This differs from similar existing applications in that ours does not focus on travel logistics (i.e. flights, hotels, transportation, etc.) but instead is concerned with planning day and night activities.

Existing services such as Yelp and Eventbrite can provide great recommendations, but they are unable to organize an itinerary or synthesize plans for an entire trip. The Google Trips app offers a way to track travel plans and makes recommendations of things to do in the area. We would like to build upon this aspect of the service, as it is rather limited in its current state. 

Our ultimate goal is to significantly reduce the need for users to research what they would like to do ahead of using the application and instead provide them with an automatic, personalized set of options from which they can choose an itinerary that best aligns with their needs.

## User Research 
We believe that the main causes of not knowing what to do when traveling are that it can be overwhelming to go through a great amount of information, and current applications are not personalized enough for users. In order to see if that is true, we had to validate with other people through interviews and conceptual inquiries.

For the conceptual inquiry we were able find out how people plan for trips by asking them to plan a day in a foreign city, for example, Santorini, Greece. We observed what applications they used to find things to do and how they organized all the information to make a full day of plans.

Given that the demographic of ‘traveler’ is extremely vague, we chose to narrow our scope to young adult travelers. In all cases, we asked the same 9 questions:

1. What apps or websites do you currently use when trying to plan travel?
2. What  non-technical methods do you use when trying to plan travel?
3. Rate your current level of satisfaction when planning travel
4. What is the hardest part of planning a trip?
5. How long on average does it take for you to plan a trip? (set number of days)
6. What are your favorite things to do when travelling?
7. Are your primary issues when planning travel regarding logistics (where to stay, how to get around, etc.) or more regarding finding fun things to do?
8. Do you budget while traveling/is cost a concern when planning things to do?
9. Willingness to pay for app/service?

## Paper Prototyping

Users seemed interested in the idea, and liked the general layout we presented. However, they also did give us insight into potential usability issues we would need to address down the line. Mostly, users were concerned with our interface not being intuitive enough--for example, several people commented on how to know exactly where to click and what to do on each page. From this feedback, we made sure that one of our main priorities when moving into the computer prototype was to ensure that our interface was as easy-to-use and intuitive as possible.

![image1](/report_static/image1.jpg)

![image4](/report_static/image4.jpg)

![image6](/report_static/image6.jpg)

![image3](/report_static/image3.jpg)

## High-Fidelity Prototyping
We created our high-fidelity prototype to support the following tasks:
1. Input a travel destination and select categories of interest
2. Click through each of the resulting cards (containing information on categories selected in the previous task) to learn more about options in the inputted destination
3. Create an itinerary by dragging recommended activities onto a customizable calendar

In order to support the above tasks, we implemented the following components:

1. Data Collection Form (Task 1): This form takes in text input (search bar) and checkbox input (category selection). On page 1, if the user types a destination less than 3 or greater than 15 characters, the search button/enter key will not work, AKA the website will not let the user progress. This was integrated in order to limit mistypes.

![image7](/report_static/image7.png)

![image10](/report_static/image10.png)

2. External Data Integration (Task 2): Our prototype takes the user-inputted location from the home page and integrates data from Yelp in order to display relevant options for the user based on their category preferences. External data integration gives our prototype most of its primary function, by providing the bulk of the actual data we wish to present. It is an extremely integral part of our design, and allows us to aggregate travel data to present to the user in an easy-to-digest manner.

![image9](/report_static/image2.png)

3. Custom Calendar (Task 3): Our calendar is a streamlined, customized page that combines user preferences and the Yelp API to create a personalized itinerary for each person’s trip. The site offers recommended activities in each of the categories selected by the user, and by simply dragging and dropping from these lists, the user can easily customize their itinerary. 

![image8](/report_static/image8.png)

4. ™ Branding (Overall prototype): A detailed essay of our ™ branding can be found in our P7 branding essay, but generally speaking, our branding shows up in the form of our consistent design across pages. This includes fonts, colors, logo and visual organization. 

## Reflection
Over the course of the quarter, we successfully implemented all three of the tasks we set out to do, and continually made improvements from instructor and user feedback. 

For example, this included things like updating the information presented on each card on page 3 of our website to show images and links, revising font choice to keep the overall “look” consistent, and updating each page to be more intuitive as to where to click and what to do. Our last two pages, which include Yelp API integration and a customizable calendar, were definitely the most difficult pages to develop, but gave us the opportunity to really push ourselves to apply what we were learning in class to our project.

If we had more time, we would focus on really refining the final calendar page. At the moment, it presents a random week, but ideally, the user would input the date range of their travel in the home page, and that information would be stored and implemented to make the calendar even more customized. Also, we would find a way to alter the amount of time each event on the calendar takes up--currently, there are only 1-hour and all-day options. Finally, we would integrate the ability to delete an event from the calendar once it has been added.

## Links

[Team repository](https://github.com/Team-Amble/time.off)

[Final Prototype Demo](https://youtu.be/374cqGKtul4)




