// Typer Animation

const typer = new TypeIt("#typed", {
  speed: 60,
  breakLines: false,
  waitUntilVisible: true,
  loop: true
})
  .type("web development.")
  .pause(3000)
  .delete()
  .type("ecommerce.")
  .pause(3000)
  .delete()
  .type("custom web applications.")
  .pause(3000)
  .delete()
  .type("marketing.")
  .pause(3000)
  .delete()
  .type("ios applications.")
  .pause(3000)
  .delete()
  .type("custom development.")
  .pause(3000)
  .delete()
  .type("content creation.")
  .pause(3000)
  .delete()
  .go();

// about page typing animation

const typerAbout = new TypeIt("#typedAbout", {
  speed: 60,
  breakLines: false,
  waitUntilVisible: true
})
  .type("lets connect ↓↓↓↓ we will get back to you as soon as possible")
  .go();

(function() {
  var qs,
    js,
    q,
    s,
    d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = "typef_orm_share",
    b = "https://embed.typeform.com/";
  if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q);
  }
})();
