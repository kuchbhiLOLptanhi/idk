// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `ring${i}`;

      //position variables
      var posX = Math.random() * 200 - 100;  // Adjusted to generate positions between -10 and 10
      var posY = Math.random() * 2 + -383; // Adjusted to generate positions between -383 and -381
      var posZ = Math.random() * 20 + -5;  // Adjusted to generate positions between -5 and 15

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createRings(id, position);
    }
  },

  createRings: function (id, position) {
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id", id);
    ringEl.setAttribute("material", "color", "#ff9100");
    ringEl.setAttribute("position", position);
    ringEl.setAttribute("geometry", { primitive: "torus", radius: 8 });

    //set the static body attribute of physics system
    ringEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2,
    });

    ringEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    terrainEl.appendChild(ringEl);
  },
});
