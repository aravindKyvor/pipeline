import React, { Component,Suspense, lazy } from 'react';
import { Switch,Route } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';



import EditForm from './form-elements/EditForm';

const PrivateRoutes =lazy(() => import('../PrivateRoutes'));
const Google =lazy(() => import('./user-pages/Google'));
const Login = lazy(() => import('./user-pages/Login'));
const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Profile =lazy(()=> import('../app/shared/Profile') )

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));


const BasicElements = lazy(() => import('./form-elements/BasicElements'));
const Patientform = lazy(() => import('./form-elements/Patientform'));
const BasicTable = lazy(() => import('./tables/BasicTable'));



const Mdi = lazy(() => import('./icons/Mdi'));


const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));



const BlankPage = lazy(() => import('./general-pages/BlankPage'));

class AppPrivateRoutess extends Component {
  render () {
  
    return (
     
  
      <Suspense fallback={<Spinner/>}>
         
        <Switch>
          <PrivateRoutes exact path="/" component={ Dashboard } />
          <PrivateRoutes path="/basic-ui/buttons" component={ Buttons } />
          <PrivateRoutes path="/basic-ui/dropdowns" component={ Dropdowns } />
          <PrivateRoutes path="/basic-ui/typography" component={ Typography } />
          <PrivateRoutes path="/form-Elements/basic-elements" component={ BasicElements } />
          <PrivateRoutes path="/form-Elements/patientform" component={ Patientform } />
          <PrivateRoutes path="/tables/basic-table" component={ BasicTable } />
          <PrivateRoutes path="/icons/mdi" component={ Mdi } />
          <PrivateRoutes path="/charts/chart-js" component={ ChartJs } />
          <Route path="/user-pages/login-1" component={ Login } />
          <Route path='/google' component={Google} />
      
          <PrivateRoutes path="/update/:id" component={EditForm} />
          <Route path='*' exact={true} component={Error404} />
   
          <PrivateRoutes path="/error-pages/error-500" component={ Error500 } />
          <PrivateRoutes path="/profile" component={ Profile } />
          <PrivateRoutes path="/general-pages/blank-page" component={ BlankPage } />
        </Switch>
      
      </Suspense>
      
    
    );
  }
}

export default AppPrivateRoutess;