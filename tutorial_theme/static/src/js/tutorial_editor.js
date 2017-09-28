(function() {
    'use strict';
    var website = odoo.website;
    //~ website.odoo_website = {};

    website.snippet.options.snippet_testimonial_options = website.snippet.Option.extend({
        on_focus: function() {
            alert("On focus!");
        },
        on_remove: function() {
            alert("On on_remove	!");
        }
    })
})();
