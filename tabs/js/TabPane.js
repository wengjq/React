import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';

class TabPane extends Component {
  static propTypes = {
    tab: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]).isRequired,
    order: PropTypes.string.isRequired,
    disable: PropTypes.bool,
    isActive: PropTypes.bool,
  };

  render() {
    const { classPrefix, className, isActive, children, activeIndex } = this.props;
    
    const classes = classnames({
      [className]: className,
      [`${classPrefix}-panel`]: true,
      [`${classPrefix}-active`]: isActive,
    });

    let transform = activeIndex * 100;
    let transformStr = `translateX(-${transform}%)`;

    return (
      <div
        style={{transform: transformStr}}
        role="tabpanel"
        className={classes}
        aria-hidden={!isActive}>
        {children}
      </div>
    );
  }
}

export default TabPane;
