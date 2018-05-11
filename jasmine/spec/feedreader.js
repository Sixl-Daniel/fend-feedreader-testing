/* 
 * Spec for feedreader.js 
 */

$(function() {

    /*
     * Define variables for test suite scope
     */

    /* variables, constants, pointers to DOM nodes */

    const   body = $('body'),
            menuIcon = $('.menu-icon-link'),
            feedContainer = $('.feed');

    let initialFeedContent = null;

    /* Regular Expression for URL validation by Diego Perini - https://gist.github.com/dperini/729294 */

    const regExpWebURL = new RegExp(
        "^" +
        // protocol identifier
        "(?:(?:https?|ftp)://)" +
        // user:pass authentication
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:" +
        // IP address exclusion
        // private & local networks
        "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
        "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
        "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
        // IP address dotted notation octets
        // excludes loopback network 0.0.0.0
        // excludes reserved space >= 224.0.0.0
        // excludes network & broacast addresses
        // (first & last IP address of each class)
        "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
        "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
        "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
        // host name
        "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
        // domain name
        "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
        // TLD identifier
        "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
        // TLD may end with dot
        "\\.?" +
        ")" +
        // port number
        "(?::\\d{2,5})?" +
        // resource path
        "(?:[/?#]\\S*)?" +
        "$", "i"
    );

    /* 
     * RSS feeds test suite
     */ 

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have a valid URL', function () {
            for (feed of allFeeds) {
                // console.log(feed.url);
                expect(feed.url).toBeDefined();
                expect(feed.url).toMatch(regExpWebURL);
            }
        });

        it('have a name', function () {
            for (feed of allFeeds) {
                // console.log(feed.name);
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });

    });

    /* 
     * Off canvas menu test suite
     */

    describe('The menu', function () {

        it('is hidden by default', function () {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        it('toggles it\'s visibility state correctly', function () {
            // check initial state
            expect(body.hasClass('menu-hidden')).toBe(true);
            // open menu on first click
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            // close menu on second click
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

    });

    /* 
     * Initial entries test suite
     */

    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('have loaded and contain at least one element', function (done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });

    });

    /* 
     * New feed selection test suite
     */

    describe('New Feed Selection', function () {

        beforeEach(function (done) {

            /* load initial feed with index 0 */
            initialFeedContent = feedContainer.html();

            /* initial feed had index 0 - load index 1 now */
            loadFeed(1, done);

        });

        it("has different content", function () {

            /* a minimum of two feeds is required */
            expect(allFeeds.length).toBeGreaterThan(1);
            
            /* compare generated HTML */
            newFeedContent = feedContainer.html();
            expect(newFeedContent).not.toBe(initialFeedContent);

        });

    });

}());
