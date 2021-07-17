import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className=" space-between reveal-from-bottom">
          <h1 style={{paddingBottom:'3rem'}}><span className="text-color-primary">  KEUST </span></h1>
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            

            <FooterNav />

            
            <div className="footer-copyright">Made by <a style={{color:'darkgray'}} href="https://gitlab/EveRojas">Eve Rojas</a>. All rights reserved.</div>
<Logo/>            
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;