exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo:
        'javascripts/vendor.js': /^vendor/
        'javascripts/app.js': /^app\/js/
      order:
        before: [
          'vendor/jquery.2.1.4.min.js',
        ]
    stylesheets:
      joinTo:
        'stylesheets/app.css': /^app\/less\/app.less/
  watcher:
    usePolling: true
  modules:
    nameCleaner: (path) ->
      path.replace /^app\/js\//, ''
