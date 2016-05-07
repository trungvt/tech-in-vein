// Common configuration
Router.configure({
  layoutTemplate : 'mainLayout', // default layout
  notFoundTemplate: '404',
  loadingTemplate: 'dataLoading'
});

Router.route('/', {
  action: function() {
    this.render('index');
  }
}, { where : 'server' });
