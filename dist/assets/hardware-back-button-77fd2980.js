/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */ const d = () => {
    document.addEventListener("backbutton", () => {});
  },
  l = () => {
    const c = document;
    let o = !1;
    c.addEventListener("backbutton", () => {
      if (o) return;
      let s = 0,
        n = [];
      const i = new CustomEvent("ionBackButton", {
        bubbles: !1,
        detail: {
          register(t, e) {
            n.push({ priority: t, handler: e, id: s++ });
          },
        },
      });
      c.dispatchEvent(i);
      const a = async (t) => {
          try {
            if (t != null && t.handler) {
              const e = t.handler(r);
              e != null && (await e);
            }
          } catch (e) {
            console.error(e);
          }
        },
        r = () => {
          if (n.length > 0) {
            let t = {
              priority: Number.MIN_SAFE_INTEGER,
              handler: () => {},
              id: -1,
            };
            n.forEach((e) => {
              e.priority >= t.priority && (t = e);
            }),
              (o = !0),
              (n = n.filter((e) => e.id !== t.id)),
              a(t).then(() => (o = !1));
          }
        };
      r();
    });
  },
  u = 100,
  f = 99;
export {
  f as MENU_BACK_BUTTON_PRIORITY,
  u as OVERLAY_BACK_BUTTON_PRIORITY,
  d as blockHardwareBackButton,
  l as startHardwareBackButton,
};
