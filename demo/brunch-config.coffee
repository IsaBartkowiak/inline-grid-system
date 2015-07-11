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
        'stylesheets/test.css': /^app\/less\/test.less/
        'stylesheets/ie-lt9.css': /^app\/less\/ie-lt9.less/
  watcher:
    usePolling: true
  modules:
    nameCleaner: (path) ->
      path.replace /^app\/js\//, ''
