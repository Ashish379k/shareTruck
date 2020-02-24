import React, { Component } from 'react';
import styles from './searchLocation.module.css'
import Search from "./Search";



class SearchLocation extends Component {
    constructor(props){
        super(props)
        this.state = {
            pickUpLocation: '',
            dropOffLocation: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" className={styles.home}>
                    <div className="row" >
                        <div className="col-6" className = {styles.bg_makeTrip}>
                            <div className="row p-4 my-2">
                                <div className="col">
                                    {/* <h4 className="font-weight-bold">SEARCH HERE...</h4> */}
                                    {/* <form>
                                        <div className="form-group">
                                            <label for="pickUpLocation">Pick-up Location</label>
                                            <input onChange={this.handleChange} name="pickUpLocation" type="text" className="form-control" id="pickUpLocation" placeholder="City, State..."/>
                                        </div>
                                        <div className="form-group">
                                            <label for="dropOffLocation">Drop-off Location</label>
                                            <input onChange={this.handleChange} name="dropOffLocation" type="text" className="form-control" id="dropOffLocation" placeholder="City, State..."/>
                                        </div>
                                        <div className="form-group">
                                            <button onClick={this.bookQuotes} className="btn btn-primary">sEARCH TRUCK</button>
                                        </div>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-6 text-center p-4 my-4">
                            <div>
                                <h1 classname="font-weight-bold">hire the best truck with best price</h1>
                            </div>
                        </div> */}
                    </div>
                    <br/>
                   
                </div>
                <div className="container-fluid">
                        <Search />
                </div>
            </React.Fragment>
            
        )
    }
}


export default SearchLocation;
