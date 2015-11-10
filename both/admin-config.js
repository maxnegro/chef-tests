AdminConfig = {
  collections: {
    Sedi: {
      tableColumns: [
        { label: "Sede", name: 'nome' }
      ]
    },
    Prestazioni: {
      tableColumns: [
        { label: 'Prestazione', name: 'nome' },
        { label: 'Durata', name: 'durata' }
      ]
    },
    Medici: {
      tableColumns: [
        { label: 'Nome', name: 'nome' }
      ]
    },
  },
  userSchema: new SimpleSchema({
    'emails': {
      type: Array,
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },

    'profile.gender': {
      type: String,
      allowedValues: ['male', 'female']
    }
  })

};
