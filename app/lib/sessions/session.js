define([
  'backbone-plugins',
  'uuid'
], function(Backbone, uuid) {

  var Session = Backbone.NestedModel.extend({
    idAttribute: 'uuid',
    _modelBinder: undefined,

    defaults: {
      connectOnStart: false,
      name: "Freenode",
      server: "irc.freenode.net",
      nick: "komanda",
      userName: 'komanda',
      realName: 'The Komanda IRC Client',
      port: 6667,
      debug: false,
      showErrors: false,
      autoRejoin: true,
      autoConnect: false,
      channels: [
        "#komanda", "#node-webkit"
      ],
      retryCount: 20,
      retryDelay: 5000,
      secure: false,
      selfSigned: false,
      certExpired: false,
      floodProtection: false,
      floodProtectionDelay: 1000,
      sasl: false,
      stripColors: true,
      channelPrefixes: "&#",
      messageSplit: 512,
      connected: false
    },

    validate: function (attrs) {
    },

    initialize: function () {
      this.on('change:connected', function(e) {
        console.log('WTF', e);
      }, this);
      if (!this.uuid) this.uuid = uuid.v4();
      this.connected = false;
      this._modelBinder = new Backbone.ModelBinder();
    },

    onClose: function() {
      this._modelBinder.unbind();
    }

  });

  return Session;

});
