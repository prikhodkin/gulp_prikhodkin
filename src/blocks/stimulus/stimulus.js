(() => {
    const application = Stimulus.Application.start();
    application.register(
      "hello",
      class extends Stimulus.Controller {
          static targets = ["name", "output"];

          greet() {
              this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
          }
      }
    );
})();