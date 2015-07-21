HelloWorld = React.createClass({
  render() {
    return (
      <h1>Hello, world!</h1>
    );
  }
});

MainLayout = React.createClass({
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
});
