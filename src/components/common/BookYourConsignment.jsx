import React, { Component } from 'react';
import styles from './bookYourConsignment.module.css'
import fire from '../../config/fire'
import {Link} from 'react-router-dom'
import swal from 'sweetalert2'


class BookYourConsignment extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            consignmentSize: '',
            pickUpLocation: '',
            dropOffLocation: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    bookTruck = (e) => {
      e.preventDefault()
      let bookConsign = {
            name: this.state.name,
            consignmentSize: this.state.consignmentSize,
            pickUpLocation: this.state.pickUpLocation,
            dropOffLocation: this.state.dropOffLocation,
            transaction: Date.now()
      }
      fire
        .database()
        .ref('consignments')
        .push({...bookConsign})

        swal.fire(
            'Booking Confirmed!',
            'success'
          )
          
        // this.props.history.push('/paynow')
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" className={styles.home}>
                    <div className="row" >
                        <div className="col" className = {styles.bg_makeTrip}>
                            <div className="row">
                                <div className="col">
                                    <h4 className="font-weight-bold">SEARCH HERE...</h4>
                                    <form onSubmit={(e)=>e.preventDefault()}>
                                        <div className="form-group">
                                            <label for="name">Name</label>
                                            <input onChange={this.handleChange} name="name" type="text" className="form-control" id="name" placeholder="Enter your name..."/>
                                        </div>
                                        <div className="form-group">
                                            <label for="consignmentSize">Consignment Size(sq.ft)</label>
                                            <input onChange={this.handleChange} name="consignmentSize" type="text" className="form-control" id="consignmentSize" placeholder="Item Size(sq.ft)..."/>
                                        </div>
                                        <div className="form-group">
                                            <label for="pickUpLocation">Pick-up Location</label>
                                            <input onChange={this.handleChange} name="pickUpLocation" type="text" className="form-control" id="pickUpLocation" placeholder="City, State..."/>
                                        </div>
                                        <div className="form-group">
                                            <label for="dropOffLocation">Drop-off Location</label>
                                            <input onChange={this.handleChange} name="dropOffLocation" type="text" className="form-control" id="dropOffLocation" placeholder="City, State..."/>
                                        </div>
                                        <div className="form-group">
                                            <button  onClick={this.bookTruck} className="btn btn-primary">Book Truck</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}



export default BookYourConsignment;
