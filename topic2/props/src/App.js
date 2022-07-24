class App extends React.Component {
  render() {
    let menuArr = ["Home", "About", "Contact", "Blog"];


    return (
      <>

        <Header menuData = {menuArr}/>


        <Box
          className="bg-warning"
          ruslan="salam"
          yas={28}
          tagi={<p>Lorem</p>}
          isMarried={true}
          handleJob={() => {
            // alert("Salam");
          }}
        />
        <Button color="blue">Gonder</Button>
        <h1> Test React</h1>
      </>
    );
  }
}
