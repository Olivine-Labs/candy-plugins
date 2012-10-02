var CandyShop = (function(self) { return self; }(CandyShop || {}));

CandyShop.Linkifier = (function(self, Candy, $) {
  self.init = function(options) {
    $(Candy.View.Pane).bind('candy:view.message.beforeShow', function(e, args) {
      var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
      args.message = args.message.replace(exp,"<a href='$1' target='_blank' ref='nofollow'>$1</a>");
    });
  };

  return self;
}(CandyShop.Linkifier || {}, Candy, jQuery));
