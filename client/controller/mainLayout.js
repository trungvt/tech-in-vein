import { Template } from 'meteor/templating';

import '../view/layout/main.html';

Template.mainLayout.events({
  'keypress .main-page-search-textbox': function(event, instance) {
    if (event.which === 13) {
      event.preventDefault();
    }
  },

  'click a.main-page-post-button': function(event, instance) {
    event.preventDefault();
    if (Meteor.userId()) {
      Router.go('/');
    } else {
      Modal.show('warningModal', {
        warning: {
          title: i18n('loginRequiredTitle'),
          description: i18n('loginRequiredDescription')
        }
      });
    }
  }
});
