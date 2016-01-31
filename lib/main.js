(function() {
  var $, $async, CND, D, alert, badge, debug, echo, help, info, log, njs_fs, njs_path, rpr, step, suspend, urge, warn, whisper;

  njs_path = require('path');

  njs_fs = require('fs');

  CND = require('cnd');

  rpr = CND.rpr;

  badge = 'MKTS/JIZURA/main';

  log = CND.get_logger('plain', badge);

  info = CND.get_logger('info', badge);

  whisper = CND.get_logger('whisper', badge);

  alert = CND.get_logger('alert', badge);

  debug = CND.get_logger('debug', badge);

  warn = CND.get_logger('warn', badge);

  help = CND.get_logger('help', badge);

  urge = CND.get_logger('urge', badge);

  echo = CND.echo.bind(CND);

  suspend = require('coffeenode-suspend');

  step = suspend.step;

  D = require('pipedreams');

  $ = D.remit.bind(D);

  $async = D.remit_async.bind(D);

  debug('©70785', Object.keys(global.MKTS));

  debug('©70785', Object.keys(MKTS));

  this.foo = 42;

}).call(this);

//# sourceMappingURL=../sourcemaps/main.js.map
