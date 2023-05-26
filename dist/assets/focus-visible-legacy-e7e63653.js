System.register([], function (e, t) {
  "use strict";
  return {
    execute: function () {
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
      const t = "ion-focused",
        o = [
          "Tab",
          "ArrowDown",
          "Space",
          "Escape",
          " ",
          "Shift",
          "Enter",
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "Home",
          "End",
        ];
      e("startFocusVisible", (e) => {
        let s = [],
          n = !0;
        const r = e ? e.shadowRoot : document,
          c = e || document.body,
          i = (e) => {
            s.forEach((e) => e.classList.remove(t)),
              e.forEach((e) => e.classList.add(t)),
              (s = e);
          },
          d = () => {
            (n = !1), i([]);
          },
          a = (e) => {
            (n = o.includes(e.key)), n || i([]);
          },
          u = (e) => {
            if (n && void 0 !== e.composedPath) {
              const t = e
                .composedPath()
                .filter(
                  (e) => !!e.classList && e.classList.contains("ion-focusable")
                );
              i(t);
            }
          },
          v = () => {
            r.activeElement === c && i([]);
          };
        return (
          r.addEventListener("keydown", a),
          r.addEventListener("focusin", u),
          r.addEventListener("focusout", v),
          r.addEventListener("touchstart", d),
          r.addEventListener("mousedown", d),
          {
            destroy: () => {
              r.removeEventListener("keydown", a),
                r.removeEventListener("focusin", u),
                r.removeEventListener("focusout", v),
                r.removeEventListener("touchstart", d),
                r.removeEventListener("mousedown", d);
            },
            setFocus: i,
          }
        );
      });
    },
  };
});
