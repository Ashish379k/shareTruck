import React from 'react'
import fire from '../../config/fire'

export default class Quotation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       consignment : []
    }
  }
  
  // componentDidMount = () => {
  //   fire
  //   .database()
  //   .ref('consignments')
  //   .once('value')
  //   .then(snapShot => {
  //       let dt = []
  //       snapShot.forEach(item => {
  //           dt.push({...item.val(), id: item.key})
  //       })
  //       this.setState([...this.state.consignment, ...dt])
  //   })
  // }
  render(){
    // console.log(this.state.consignment)
    // if(this.state.consignment.length !=0){
      return (
       
        <div className="row mt-5 mx-auto" style={{width:"500px",height:"600px"}}>
          <div className="col-12 mt-4 mx-auto text-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-left">Billing Information</h5>
                <h6 className="card-subtitle mb-2 text-muted">Booking date</h6>
              </div>
              <table className="border border-dark p-2 m-2">
                <tr>
                  <td className="text-left m-2 p-2">Name:</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-left m-2 p-2">Pick-up Location:</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-left m-2 p-2"> Drop Location :</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-left m-2 p-2"> Booking Date:</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-left m-2 p-2"> Expected delivery Date:</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-left m-2 p-2"> Distance to be covered:</td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-left m-2 p-2"> Total cost:</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
          </div>
      )
    // }else{
    //   return <h1>Data Loading</h1>
    // }
    
  }
}


