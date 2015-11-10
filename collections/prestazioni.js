Prestazioni = new Meteor.Collection('prestazioni');

Prestazioni.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Prestazioni.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

// if (Meteor.isServer) {
//   Prestazioni.allow({
//     insert: function (userId, doc) {
//       return true;
//     },
//
//     update: function (userId, doc, fieldNames, modifier) {
//       return true;
//     },
//
//     remove: function (userId, doc) {
//       return true;
//     }
//   });
//
//   /*
//   Prestazioni.deny({
//   insert: function (userId, doc) {
//   return true;
// },
//
// update: function (userId, doc, fieldNames, modifier) {
// return true;
// },
//
// remove: function (userId, doc) {
// return true;
// }
// });
// */
// }

let PrestazioniSchema = new SimpleSchema({
  nome: {
    type: String,
    label: "Prestazione",
    max: 80
  },
  durata: {
    type: String,
    label: "Durata",
    autoform: {
      afFieldInput: {
        type: "time"
      }
    }
  }
});

Prestazioni.attachSchema(PrestazioniSchema);
