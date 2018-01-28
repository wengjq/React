import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import TabPane from './TabPane';
import CSSModules from 'react-css-modules';
import styles from '../css/style.scss';

@CSSModules(styles, { allowMultiple: true })
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    return (
      <div>
        <section>
        <h4 styleName={'h4'}>Flat Theme</h4>
        <Tabs defaultActiveIndex={this.state.activeIndex} styleName={'tabs-flat'}>
          <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
          <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
          <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
          <TabPane order="3" tab={'Tab 4'}>第四个 Tab 里的内容</TabPane>
        </Tabs>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
