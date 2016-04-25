/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This is our first test suite - a test suite just contains
     * a related set of tests. This test is to make sure the defined RSS feeds
     * stored in allFeeds have a name and url.
     */
    describe('RSS Feeds', function() {
        
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* this test ensures in allFeeds has a URL defined
         * and that the URL is not empty.
         */
         it('Feeds has url', function(){
            var arraylength = allFeeds.length;
            for(var i = 0; i < arraylength; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toEqual({});
            }    
         });

        /* this test ensures in the allFeeds object 
         * and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Feeds has name', function(){
            var arraylength = allFeeds.length;
            for(var i = 0; i < arraylength; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toEqual({});
            }    
         });
    });


    /* a new test suite named "The menu",
     * make sure the menu is hidden when the site 
     * starts up and the hamburger button works perfectly
     */
    describe('Menu', function(){

        /* this test ensures the menu element is hidden by default. */
        it('menu slide is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* this test that ensures the menu will display and hidden when
         * clicked the hamburger icon
         */
        describe('icon', function () {
            /* Triggers the on click function before that has been created in
             * app.js before each test.
             */
            beforeEach(function () {
                $('.menu-icon-link').trigger('click');
            });

            /* Checks that the menu displays when the hamburger icon is
             * clicked on and the menu was hidden.
             */
            it('is clicked and displays', function () {
                expect($('body').hasClass('menu-hidden')).toBe(false);
            });

            /* Checks that the menu hides when the hamburger icon is
             * clicked on and the menu was displayed.
             */
            it('is clicked and hides', function () {
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
        });

    });

    /* a new test suite to make sure 
     * the feed being loaded has 
     * at least one entry to display
     */
    describe('Initial Entries', function(){

        /* Waits until the initial feed is loaded before running the test. */
        beforeEach(function(done){
            loadFeed(0, done);
        })

        /* this test ensures the feeds being loaded has one or more entries */
        it('has a entry element in the feed container', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    
    });

    /* a new test suite named "New Feed Selection" 
     * make sure when a new feed has been loaded that
     * the entries displayed have actually changed.
     */
    describe('New Feed Selection', function(){

        /* Before the test is run the html in the feed <div> is saved
         * in the variable feedContent.
         */
        var feedContent;

        beforeEach(function(done) {
            loadFeed(1, function(){
                feedContent = $('.feed').html();
                done();
            }); 
        });

        /* this test loads a different feed from the startup,
         * and compares the html in the feed <div>. 
         * The test pass if they are different
         */
        it('has changed content', function(done) {
            loadFeed(0, function(){
                expect($('.feed')).not.toEqual(feedContent);
            });
        });
    });   
}());
