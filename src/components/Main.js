import { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: '',
    };

    this.inputMudou = this.inputMudou.bind(this);
  }

  inputMudou(e) {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>{ novaTarefa }</h1>
        <form action="#">
          <input type="text" name="" id="" onChange={this.inputMudou} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Main;
