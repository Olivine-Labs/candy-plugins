var CandyShop = (function(self) { return self; }(CandyShop || {}));

CandyShop.Me = (function(self, Candy, $) {
  self.init = function(options) {
    $(Candy.View.Pane).bind('candy:view.message.beforeShow', function(e, args) {
      if(args.message.search(/^\/me/gi) > -1){
        args.template = '<dt>{{time}}</dt><dd class="emote-message"><a href="#" class="name">{{displayName}}</a> </span>{{{message}}}</dd>'
        args.message = args.message.replace(/^\/me (.*)/gi, '$1');
      }
    });
  };

  return self;
}(CandyShop.Me || {}, Candy, jQuery));
