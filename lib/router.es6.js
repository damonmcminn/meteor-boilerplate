FlowRouter.route('/', {
  action() {
    ReactLayout.render(<Main />, {
      content: <HelloWorld />
    });
  }
});
