Template.bCard.helpers({
    firstName: function() {
        return Session.get("firstName");
    },

    lastName: function() {
        return Session.get("lastName");
    },

    gender: function() {
        return Session.get("gender");
    },

    quote: function() {
        return Session.get("quote");
    },

    githubLink: function() {
        return Session.get("githubLink");
    }
});
