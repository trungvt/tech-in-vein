import { Template } from 'meteor/templating';

import '../view/layout/main.html';

Template.mainLayout.events({
  'keypress .main-page-search-textbox': function(event, instance) {
    if (event.which === 13) {
      event.preventDefault();
    }
  }
});
