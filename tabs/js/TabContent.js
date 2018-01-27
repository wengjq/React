import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';

class TabContent extends Component {
  static propTypes = {
    classPrefix: React.PropTypes.string,
    panels: PropTypes.node,
    activeIndex: PropTypes.number,
  };

  getTabPanes() {
    const { classPrefix, activeIndex, panels } = this.props;

    return React.Children.map(panels, (child) => {
      if (!child) { return; }

      const order = parseInt(child.props.order, 10);
      const isActive = activeIndex === order;
    
      return React.cloneElement(child, {
        classPrefix,
        isActive,
        children: child.props.children,
        key: `tabpane-${order}`,
        activeIndex: activeIndex
      });
    });
  }

  render() {
    const { classPrefix } = this.props;

    const classes = classnames({
      [`${classPrefix}-content`]: true,
    });

    let width = this.props.panels.length * 100;
    let widthStr = `${width}%`;

    return (
      <div style={{width: widthStr}} className={classes}>
        {this.getTabPanes()}
      </div>
    );
  }
}

export default TabContent;
