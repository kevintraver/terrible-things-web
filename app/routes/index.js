import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
     return Ember.RSVP.hash({
       cards: this.store.findAll('card')
     });
   },

   setupController: function(controller, models) {
     controller.setProperties(models);
   }
});
