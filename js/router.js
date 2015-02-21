Todos.Router.map(function() {
  // Ember.js will detect when the application's URL matches '/' and to render the `todos` template.
  this.resource('todos', { path: '/' });
});


// Custom behavior (returning a specific set of models), 
// Implement the class and add the desired behavior.
// Ember.js has created a controller for us and set the controller's model property to our route's model.
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});