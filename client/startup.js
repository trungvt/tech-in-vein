import {Meteor} from 'meteor/meteor';

if (Meteor.isClient) {
  Meteor.startup(function startUp() {
    i18n.setLanguage('en');
  });

  // Account UI
  accountsUIBootstrap3.setLanguage('en');

  accountsUIBootstrap3.logoutCallback = function(error) {
    if(error) console.log("Error:" + error);
    Router.go('/');
  }

  Accounts.ui.config({
    requestPermissions: {},
    forceEmailLowercase: true,
    extraSignupFields: [
      {
        fieldName: 'terms',
        fieldLabel: i18n('signupAgreement'),
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
          if (value) {
              return true;
          } else {
              errorFunction(i18n('signupAgreementError'));
              return false;
          }
        }
      }
    ]
  });
}
