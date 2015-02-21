Todos.Router.map(function() {
  // Ember.js will detect when the application's URL matches '/' and to render the `todos` template.
  this.resource('todos', { path: '/' });
});