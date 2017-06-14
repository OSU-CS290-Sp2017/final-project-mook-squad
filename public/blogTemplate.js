(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['blogss'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"Blogg\">\n    <div class=\"BlogText\">\n        <p class=\"BlogTitle\">\n            "
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))
    + "\n        </p>\n\n        <p class=\"BlogDate\">\n          "
    + alias4(((helper = (helper = helpers.Datee || (depth0 != null ? depth0.Datee : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Datee","hash":{},"data":data}) : helper)))
    + "\n        </p>\n\n        <p class=\"BlogContent\">\n          "
    + alias4(((helper = (helper = helpers.Content || (depth0 != null ? depth0.Content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Content","hash":{},"data":data}) : helper)))
    + "\n        </p>\n\n    </div>\n</article>\n";
},"useData":true});
})();