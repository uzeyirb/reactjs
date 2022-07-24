class Button extends React.Component {
  handleColor() {
    switch (this.props.color) {
      case "red":
        return "bg-danger";
      case "yellow":
        return "bg-warning";
      case "blue":
        return "bg-primary";
      default:
        break;
    }
  }

  render() {
    console.log("this Button", this);

    return (
      <>
        <div>
          <button className={this.handleColor()}>
            {this.props.children}
          </button>
        </div>
      </>
    );
  }
}
