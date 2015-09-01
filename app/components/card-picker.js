import Ember from 'ember';

export default Ember.Component.extend({
  card: null,
  actions: {
    showCard() {
      this.set('card', 
        this.get('cards').objectAt([Math.floor(Math.random() * this.get('cards').get('length'))])
      );
    }
  }
});
