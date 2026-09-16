/* Panier du domaine — stockage local, sans dépendance. */
(function () {
  var KEY = "aubigny-panier";
  var catalogue = {};
  var el = document.getElementById("panier-catalogue");
  if (el) {
    try {
      JSON.parse(el.textContent || "[]").forEach(function (w) { catalogue[w.id] = w; });
    } catch (e) { /* catalogue absent : le panier reste en lecture */ }
  }

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function write(cart) {
    try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) { /* stockage indisponible */ }
    render();
  }
  function euro(n) { return n.toLocaleString("fr-FR") + " €"; }

  function render() {
    var cart = read();
    var ids = Object.keys(cart).filter(function (id) { return cart[id] > 0; });
    var count = ids.reduce(function (n, id) { return n + cart[id]; }, 0);

    document.querySelectorAll("[data-cart-count]").forEach(function (node) {
      node.textContent = String(count);
      node.hidden = count === 0;
    });

    var lines = document.querySelector("[data-cart-lines]");
    if (!lines) return;
    var total = 0;
    lines.innerHTML = "";
    ids.forEach(function (id) {
      var w = catalogue[id];
      if (!w) return;
      total += w.price * cart[id];
      var row = document.createElement("div");
      row.className = "panier__line";
      var label = document.createElement("span");
      label.textContent = cart[id] + " × " + w.name;
      var value = document.createElement("span");
      value.textContent = euro(w.price * cart[id]);
      row.appendChild(label);
      row.appendChild(value);
      lines.appendChild(row);
    });
    var empty = document.querySelector("[data-cart-empty]");
    if (empty) empty.hidden = ids.length > 0;
    var totalNode = document.querySelector("[data-cart-total]");
    if (totalNode) totalNode.textContent = euro(total);
  }

  function qtyOf(box) { return parseInt(box.querySelector("[data-qty-out]").textContent, 10) || 1; }

  document.addEventListener("click", function (e) {
    var step = e.target.closest("[data-step]");
    if (step) {
      var box = step.closest("[data-stepper]");
      var size = parseInt(box.getAttribute("data-step-size") || "1", 10);
      var dir = parseInt(step.getAttribute("data-step"), 10);
      var out = box.querySelector("[data-qty-out]");
      var next = Math.max(size, Math.min(96, qtyOf(box) + dir * size));
      out.textContent = String(next);
      return;
    }
    var add = e.target.closest("[data-add]");
    if (add) {
      var id = add.getAttribute("data-add");
      var stepper = document.querySelector('[data-stepper="' + id + '"]');
      var n = stepper ? qtyOf(stepper) : 1;
      var cart = read();
      cart[id] = (cart[id] || 0) + n;
      write(cart);
      add.textContent = "Ajouté au panier";
      window.setTimeout(function () { add.textContent = "Ajouter au panier"; }, 1600);
      return;
    }
    if (e.target.closest("[data-cart-clear]")) { write({}); }
  });

  render();
})();
