/**
* Coolstrapp.App.js 
*/

COOL.App = (function(coolstrap, undefined) {

  var default_config = {
    id: 1,
    name: 'coolstrap',
    version: 0.9,
    icon: '',
    log_level: 0
  }; 

  var init = function(app_config) {
      default_config = coolstrap.Core.extend(default_config, app_config);
      coolstrap.Boot(); 
  };

  var get = function(property) {
      return default_config[property];
  };
  
 
  return {
      init: init,
      get: get 
  };

})(COOL);