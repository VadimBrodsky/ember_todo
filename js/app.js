// Create a new instance of `Ember.Application`
// Make it available as a variable named `Todos` within your browser's JavaScript environment.
window.Todos = Ember.Application.create();

// Adapters are responsible for communicating with a source of data for your application.
// `ApplicationAdapter` is an extension of the `DS.FixtureAdapter`.
// Here we are using an adapter designed to load fixture data.
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();