Medici = new Meteor.Collection('medici');

Medici.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Medici.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

// if (Meteor.isServer) {
//     Medici.allow({
//         insert: function (userId, doc) {
//             return true;
//         },
//
//         update: function (userId, doc, fieldNames, modifier) {
//             return true;
//         },
//
//         remove: function (userId, doc) {
//             return true;
//         }
//     });
//     /*
//      Prestazioni.deny({
//      insert: function (userId, doc) {
//      return true;
//      },
//
//      update: function (userId, doc, fieldNames, modifier) {
//      return true;
//      },
//
//      remove: function (userId, doc) {
//      return true;
//      }
//      });
//      */
// }

Medici.attachSchema(new SimpleSchema({
    nome: {
        type: String,
        label: "Nome e cognome",
        max: 80
    }
}));
