HelloWorld = React.createClass({
  render() {
    return (
      <h1>Hello, world!</div>
    );
  }
});

Main = React.createClass({
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
});
