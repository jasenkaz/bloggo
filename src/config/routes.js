function RouterConfig($routeProvider){
  $routeProvider
  .when('/', {   //when i want to use this home route '/' for the frontend, use this config
    template: '<home></home>' //this is from index.html
  })
  .when('/signup', {
    template: '<signup></signup>'   //this gives us the second page in browser with signup info; wires to components in app.js
  })
  .when('/login', {
    template: '<login></login>'
    })
  .when('/profile', {
      template: '<profile></profile>'
    })
  .when('/create', {
        template: '<post-creator></post-creator>'
    })
  .when('/edit/:postId', {
          template: '<post-editor></post-editor>'
    })
  .when('/read/:postId', {
            template: '<post-reader></post-reader>'
    })
  .otherwise({
    redirectTo: '/'
  }); //specific to angular router; .otherwise stops users from manipulating the site
}

RouterConfig.$inject = ['$routeProvider']; //dependencies

module.exports = RouterConfig;
