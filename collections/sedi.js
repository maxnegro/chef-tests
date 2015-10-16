Sedi = new Meteor.Collection('sedi');


if (Meteor.isServer) {
  Sedi.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

/*
  Sedi.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
*/
}

Sedi.attachSchema(new SimpleSchema({
  nome: {
    type: String,
    label: "Sede",
    max: 80
  }
}));
