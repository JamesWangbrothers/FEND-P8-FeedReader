# Project Overview

This is a web-based application that reads RSS feeds. this project included [Jasmine](http://jasmine.github.io/)  andcomplete test suite. 

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

## What to run this application?
1. Check out the repository or Download or fork the application.
2. Select index.html to start the app.

Additionally to inspect the site on your phone, you can run a local server
  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```
and Open a browser and visit localhost:8080

OR 

Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.
  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```
# How did I complete this project?
1. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Review the functionality of the application within my browser.
3. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js*
5. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in my application.
6. Return the allFeeds variable to a passing state.
7. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. Write a new test suite named "The menu".
10. Write a test that ensures the menu element is hidden by default. I have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
12. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
14. When complete - all of the tests should pass.
