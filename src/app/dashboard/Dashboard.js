
import React from 'react';

import { Link } from 'react-router-dom';

import logo2 from "../../assets/images/dashboard/circle.svg"
import logo3 from '../../assets/images/dashboard/circle.svg'



class Dashboard extends React.Component{
  constructor(){
      super();
      this.state={
          data:[]
      };
  }

  fetchData(){
      fetch(`${process.env.REACT_APP_API_URL}/api/project/`)
      .then(response=>response.json())
      .then((data)=>{
          this.setState({
              data:data
          });
      });
  }

  componentDidMount(){
      this.fetchData();
  }

  deleteData(id){
      fetch(`${process.env.REACT_APP_API_URL}/api/project/`+id+'/',{
          method:'DELETE',
          body:JSON.stringify(this.state),
      })
      .then(response=>response)
      .then((data)=>{
          if(data){
              this.fetchData();
          }
      });
  }

  render(){
    const projectData=this.state.data;
        const rows=projectData.map((item)=>
        <tr key={item.id}>
        <td>
          <img src='https://as2.ftcdn.net/v2/jpg/02/83/89/39/500_F_283893986_Z4bhxqocuMm69mlCMlKhZ3XJ4rA74CPT.jpg' className="mr-2" alt="face" />{item.projectName} </td>
        <td>{item.cancerType} </td>
        <td>
          <label className="badge badge-gradient-success">DONE</label>
        </td>
        <td>{item.biosampleTumorfile1}</td>
        <td>{item.biosampleTumorfile2} </td>
        <td>{item.biosampleTumorfile3 }</td>
        <td>{item.biosampleTumorfile4 }</td>
        <td>
                    <Link to={'update/'+item.id} className="btn btn-info mr-2">Update</Link>
                    <button onClick={()=>this.deleteData(item.id)} className="btn btn-danger">Delete</button>
                </td>
        
        
      
        </tr>
        );
   
    return (
      <div>
        
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span> Dashboard </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-data active" aria-current="page">
                <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-warning card-img-holder text-black">
              <div className="card-body">
                <img src={logo3} className="card-img-absolute" alt="circle" />
                <h4  className="font-weight-normal mb-3">Link To Analysis <i className="mdi mdi-file-find mdi-36px float-right"></i></h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-warning card-img-holder text-black">
              <div className="card-body">
                <img src={logo2} className="card-img-absolute" alt="circle" />
               <h4  className="font-weight-normal mb-3">Link To Reports  <i className="mdi mdi-information mdi-36px float-right"></i></h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-warning card-img-holder text-black">
              <div className="card-body">
                <img src={logo3} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Link To Patient Portal <i className="mdi mdi-seat-individual-suite mdi-36px float-right"></i></h4>
              </div>
            </div>
          </div>
        </div>
       
        <div className="row">
          <div className="col-12 grid-margin">
        
     
        <div className="card">
              <div className="card-body">
                <h4 className="card-title">Patient Details  </h4> 
                <hr/>
                <div class="text-center">
             
                 <Link to ='/form-Elements/patientform' className='btn bg-gradient-warning card-img-holder text-black btn-block'> ADD DETAILS</Link>
              

                </div>
                <hr/>
                
             
                <div className="table-responsive">
                  <table className="table table-bordered  table-hover">
                    <thead>
                      <tr>
                        <th> Project Name</th>
                        <th>Cancer Type </th>
                        <th> Status </th>
                        <th> BioSample TumorFile 1 </th>
                        <th> BioSample TumorFile 2 </th>
                        <th> BioSample TumorFile 3</th>
                        <th> BioSample TumorFile 4 </th>
                        <th> Action</th>
                        
                       
                      </tr>
                    </thead>
                    <tbody>
                   
                  
                    {rows}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

     
            
          </div>
        </div>
       
        
      </div> 
    );
  }

}


export default Dashboard