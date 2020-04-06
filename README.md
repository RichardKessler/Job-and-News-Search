# Job and News article Search

```
This web application allows you to search for a new job or relevant news articles for any profession.
```

## User Story

```
As a User
I WANT to be able to find jobs in a certain area AND/OR news articles on the search terms
SO THAT I can find a new job AND/OR do research on any given topic
```

## Getting Started

You can access this application by going to: https://richardkessler.github.io/Job-and-News-Search/

## Application Details

This application is used as a dual purpose tool to search for job listings in a givin area, and to search for relevant news articles.  Once you have entered in your search criteria you are brought to another page that displays the job listings and news articles.  This is a great tool for learning about something new to you as a developer by reading the articles provided, and for looking for a new job within your area or a new area if you are looking to move.  At the top of every page is a navigation bar so you can get to your saved job listings and news articles as well as do more searches and go back to the home page.

The landing page presents you with the information about the application.  This page also allows you to enter your search criteria.  You will see two input fields on the page.  The first field, the one on the left, is where you enter your search terms that will filter what you are looking for.  For example IF you wanted to lookup Ruby or Vue.js then you would enter "Ruby" or "Vue.js" in that field.  The second search field is where you enter the city that you want to search for job listings in.  For example if you wanted to lookup listings in Washington DC then you would just enter "Washington DC" in that search field.  Once you have your search term and city location entered just click on the search button and get your results.

After you hit the search button on the landing page you are brought to a new page that displays the searched criteria.  You will see two list sections on this page side-by-side.  On the left is the job listings results, and on the right is the related news articles.  Displayed within the job list is the job position, the posted date, the city, the company that posted the job, and a brief job description.  For more information, or to view the full job listing, click on the job title to be brought to the application page.  This section loads the 10 current job postings at a time.  At the bottom of the section is a next and previous button that will load the next set of 10 or allow you to go back and view the previous set.

This page also displays the relevant news articles to your searched term.  This is displayed on the right of the page.  The displayed information includes the article title, the author, the date of publication, and a brief summary of the full article.  Clicking on the article title will redirect you to the full article allowing you to read the entire publication.  This section also loads 10 articles at a time and has a next and previous button at the bottom to navigate through the display pages.

The last thing you will be able to do on this page is save any job listings and news articles so that you can access them later if you run out of time.  There is a save button within the lists for each displayed result.  When you hit save that job listing or news article gets stored and pulled when you go to the saved list page.

The saved page allows you to view any job listings and news articles that you have saved at a later time.  If you wanted to do some research on a topic and saved a few articles but only had time to read one then you can always read the rest when you have more time.  The same for any job listings that you have saved.  If you are applying to multiple listings you can save ones that you have yet to apply for.

## CSS Framework

This application uses Materialize for the styling framework.  We used the grid layout to make our application both mobile and desktop friendly.  We utilized the card component to display the results of the search and saved listings and articles.

## From Mobile to Desktop

This applicaiton was built with a mobile first design.  The mobile display allows for a much more responsive layout that allows the user to toggle between job listings and news artilces so that the display is not cluttered.  When going fomr a mobile display to a desktop display then all of the information gets displayed.

## Built With

* [Materialize](https://materializecss.com/) - CSS Framework and layout
* Adzuna Jobs API - An API usesd for looking up job listings
* [News API](https://newsapi.org/) - An API used to lookup news articles
* HTML/CSS/JS
* [JQuery](https://jquery.com/)

## Development

* [Elliot Morgan](https://github.com/Elliotmrgn) - Project Backend Lead, QA Testing, Functionality Troubleshooting, Working with Jobs API
* [Richard Kessler](https://github.com/RichardKessler) - Project Lead, Building the Testing Environment, QA Testing, Working with News API
* [Shiva Sharma](https://github.com/ssh1sharma) - Project Design Lead, Implementation of  Materialize Framework, QA Testing