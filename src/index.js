import React from 'react';
import ReactDOM from 'react-dom';

import Virtualizer from './components/Virtualizer';

import style from './app.css';

let list = [];

for (let i = 1; i <= 1000; i++) {
  list.push({
    content: i > 100 ? `List - ${i} : hello` : `List - ${i} : hai`
  });
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list
    };

    this.renderList = this.renderList.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  renderList(from, to) {
    let { list } = this.state;

    let filterList = list.slice(from, to);

    return filterList.map(item => {
      let index = list.indexOf(item);
      return (
        <div
          key={index}
          className={index % 2 ? style.padding100 : style.padding50}
        >
          {item.content}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Virtualizer rowCount={50} renderList={this.renderList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('target'));
