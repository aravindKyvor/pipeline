import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class Sidebar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
   
  };
 

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];


    

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
   
   return (

    
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
      
      
          <ul className="nav">
       
         
          
       <li className={ this.isPathActive('/') ? 'nav-item active' : 'nav-item' }>
     <Link className="nav-link" to="/">
       <span className="menu-title"><Trans>Dashboard</Trans></span>
       <i className="mdi mdi-home menu-icon"></i>
     </Link>
   </li>
   <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
     <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
       <span className="menu-title"><Trans>Analysis</Trans></span>
       <i className="menu-arrow"></i>
       <i class="mdi mdi-file-find"></i>
     </div>
     <Collapse in={ this.state.basicUiMenuOpen }>
       <ul className="nav flex-column sub-menu">
         <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons"><Trans>Buttons</Trans></Link></li>
         <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns"><Trans>Dropdowns</Trans></Link></li>
         <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography"><Trans>Typography</Trans></Link></li>
       </ul>
     </Collapse>
   </li>
   <li className={ this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
     <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('formElementsMenuOpen') } data-toggle="collapse">
       <span className="menu-title"><Trans>Reports</Trans></span>
       <i className="menu-arrow"></i>
       <i class="mdi mdi-information"></i>
     </div>
     <Collapse in={ this.state.formElementsMenuOpen }>
       <ul className="nav flex-column sub-menu">
         <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link' } to="/form-elements/basic-elements"><Trans>Basic Elements</Trans></Link></li>
       </ul>
     </Collapse>
     <Collapse in={ this.state.formElementsMenuOpen }>
       <ul className="nav flex-column sub-menu">
         <li className="nav-item"> <Link className={ this.isPathActive('/form-elements/patientform') ? 'nav-link active' : 'nav-link' } to="/form-elements/patientform"><Trans>Patient Form</Trans></Link></li>
       </ul>
     </Collapse>
   </li>
   <li className={ this.isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
     <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') } data-toggle="collapse">
       <span className="menu-title"><Trans>Basespace</Trans></span>
       <i className="menu-arrow"></i>
       <i class="mdi mdi-human-male-female"></i>
     </div>
     <Collapse in={ this.state.tablesMenuOpen }>
       <ul className="nav flex-column sub-menu">
         <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Basic Table</Trans></Link></li>
       </ul>
     </Collapse>
   </li>
   <li className={ this.isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>
     <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse">
       <span className="menu-title"><Trans>Settings</Trans></span>
       <i className="menu-arrow"></i>
       <i class="mdi mdi-settings"></i>
     </div>
     <Collapse in={ this.state.iconsMenuOpen }>
       <ul className="nav flex-column sub-menu">
         <li className="nav-item"> <Link className={ this.isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link' } to="/icons/mdi"><Trans>Material</Trans></Link></li>
       </ul>
     </Collapse>
   </li>

   

 
     
       {/* <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
     <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
       <span className="menu-title"><Trans>User Pages</Trans></span>
       <i className="menu-arrow"></i>
       <i className="mdi mdi-lock menu-icon"></i>
     </div>
     <Collapse in={ this.state.userPagesMenuOpen }>
       <ul className="nav flex-column sub-menu">
         <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1"><Trans>Login</Trans></Link></li>
         
       </ul>
     </Collapse>
   </li> */}


   
     </ul>

  
        

   
      <ul>

      </ul>
  
        
          
      </nav>
    
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default withRouter(connect(mapStateToProps)(Sidebar));
