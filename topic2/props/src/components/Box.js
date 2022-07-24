class Box extends React.Component {
    render() {
      console.log("this Box", this);
  
      return (
        <>
        <div className={this.props.className}>

        <h1>Box</h1>
          <p>{this.props.ruslan}</p>
          {this.props.tagi}
          {this.props.handleJob()}
        </div>
          
        </>
      );
    }
  }