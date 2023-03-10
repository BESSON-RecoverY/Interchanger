jQuery(function (y) {
  var M = {
    id: "",
    window_class: "",
    insert_div: "",
    close_class: "",
    title: "",
    content: "",
    scrollContent: "",
    shadow: 1,
    draggable: 1,
    enable_button: 0,
    button_title: "",
    button_class: "",
    before: function () {},
    after: function () {},
    close_after: function () {},
  };
  y.fn.JsWindow = function (t, n) {
    var i = y.extend({}, M, i, n),
      s = y(this),
      d = y.trim(i.id);
    d.length < 1 && (d = Math.floor(1e5 * Math.random()) + 1);
    var a = y.trim(i.window_class),
      o = y.trim(i.insert_div);
    insert_obj = 0 < o.length ? y(o) : y("body");
    var e,
      w,
      l = y.trim(i.close_class),
      r = parseInt(y.trim(i.shadow)),
      c = parseInt(y.trim(i.draggable)),
      _ = parseInt(y.trim(i.enable_button)),
      h = y.trim(i.button_title),
      v = y.trim(i.button_class),
      u = y.trim(i.title),
      m = y.trim(i.content),
      p = y.trim(i.scrollContent),
      b = i.before,
      f = i.after,
      g = i.close_after;
    function j() {
      var t = y(window).height() - 40,
        n = Math.ceil(
          (y(window).height() - y(".standart_window").height()) / 2
        ),
        i = Math.ceil((y(window).width() - y(".standart_window").width()) / 2);
      y(".standart_window:not(.dragged)").css({ top: n, left: i }),
        y(".standart_window").css({ "max-height": t, "overflow-y": "auto" });
    }
    return (
      "show" == t
        ? (b.apply(null, [s]),
          y(".js_techwindow").remove(),
          1 == r &&
            (insert_obj.append(
              '<div class="standart_shadow js_techwindow"></div>'
            ),
            y(".standart_shadow").show()),
          (e = ""),
          0 < p.length &&
            (e = '<div class="standart_window_scrollcontent">' + p + "</div>"),
          (w =
            '<div class="standart_window ' +
            a +
            ' js_techwindow" id="techwindow_' +
            d +
            '"><div class="standart_windowins"><div class="standart_window_ins"><div class="standart_window_title"><div class="standart_window_close js_window_close ' +
            l +
            '"></div><div class="standart_window_title_ins">' +
            u +
            '</div></div><div class="standart_window_content"><div class="standart_window_content_ins">' +
            m +
            '<div class="premium_clear"></div></div></div>' +
            e +
            (1 == _
              ? '<div class="standart_window_submit"><input type="submit" class="button ' +
                v +
                '" name="" value="' +
                h +
                '" /></div>'
              : "") +
            "</div></div></div>"),
          insert_obj.append(w),
          y("#techwindow_" + d).show(),
          j(),
          1 == c &&
            y("#techwindow_" + d).draggable({
              handle: ".standart_window_title",
              start: function () {
                y("#techwindow_" + d).addClass("dragged");
              },
            }),
          f.apply(null, [s]))
        : "hide" == t &&
          (b.apply(null, [s]),
          y(".js_techwindow").remove(),
          f.apply(null, [s])),
      y(window).on("scroll", function () {
        j();
      }),
      y(window).on("resize", function () {
        j();
      }),
      y(".js_window_close").on("click", function () {
        y(".js_techwindow").remove(), g.apply(null, [y(this)]);
      }),
      this
    );
  };
});
