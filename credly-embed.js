(function () {
  var e, t, a, badgeId, d, l, iframeHeight, m, n, o, u, c, iframeWidth;
  for (
    window.CREDLY_EMBED_JS_LOADER_VERSION = "20210331",
      e = "www.credly.com",
      t =
        /(.*\.credly.com$|(credly\.local|acclaim\.local|localhost|web):500[0-2]$)/,
      c = function (e) {
        if (null != e) return t.test(e) ? e : void 0;
      },
      l = function (e) {
        var t, a, r, d, l;
        if (null != document.querySelectorAll)
          return document.querySelectorAll("[data-" + e + "]");
        for (
          l = [], r = 0, d = (t = document.getElementsByTagName("*")).length;
          r < d;
          r++
        )
          (a = t[r]).getAttribute("data-" + e) && l.push(a);
        return l;
      },
      m = 0,
      n = (o = l("share-badge-id")).length;
    m < n;
    m++
  )
    (badgeId = (d = o[m]).attributes.getNamedItem("data-share-badge-id").value),
      (iframeWidth = d.attributes.getNamedItem("data-iframe-width").value),
      (iframeHeight = d.attributes.getNamedItem("data-iframe-height").value),
      (a = c(
        null != (u = d.attributes.getNamedItem("data-share-badge-host"))
          ? u.value
          : void 0
      )) || (a = e),
      /^https?:\/\//.test(a) || (a = "//" + a),
      (d.outerHTML =
        '<iframe name="acclaim-badge" allowTransparency="true" frameborder="0" id="embedded-badge-' +
        badgeId +
        '" scrolling="no" src="' +
        a +
        "/embedded_badge/" +
        badgeId +
        '" style="width: ' +
        iframeWidth +
        "px; height: " +
        iframeHeight +
        'px;" title="View my verified achievement on Credly." ></iframe>');
}).call(this);
