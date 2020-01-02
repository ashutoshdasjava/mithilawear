import React from 'react';

const MithilaBuyingComponent = props =>{

    return(

        <div id="accordion">
            <div className="card">
                <div className="card-header">
                    <h5>
                        <a href="#collapse1" data-parent="#accordion" data-toggle="collapse">
                            Contact Information
                        </a>
                    </h5>
                </div>

                <div id="collapse1" className="collapse show">
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name"/>
                                </div>

                            </div>
                            <br/>
                            <div className="form-row">

                                <input className="form-control form-control" type="email" id="email"
                                       placeholder="Enter email"/>
                                    <small className="form-text text-muted">Your email will not ever be shared</small>


                            </div>
                            <br/>
                            <div className="form-row">


                                    <input className="form-control form-control" type="email" id="email"
                                           placeholder="Enter phone"/>
                                    <small className="form-text text-muted">Your phone will not ever be shared</small>

                            </div>
                            <br/>
                            <button className="btn btn-primary btn-block" type="submit">Save</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h5>
                        <a href="#collapse2" data-parent="#accordion" data-toggle="collapse">
                            Address Information
                        </a>
                    </h5>
                </div>

                <div id="collapse2" className="collapse ">
                    <div className="card-body">
                        <form>


                            <div className="form-row">

                                <input className="form-control " type="text"
                                       placeholder="Address Line 1"/>



                            </div>
                            <br/>
                            <div className="form-row">


                                <input className="form-control " type="text"
                                       placeholder="Address Line 2"/>


                            </div>
                            <br/>

                            <div className="form-row">
                                <div className="col">


                                    <select className="form-control" id="sel1" name="sellist1">
                                        <option selected>City</option>
                                        <option>Patna</option>
                                        <option>Indore</option>
                                        <option>Mumbai</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Zip Code"/>


                                </div>

                            </div>
                            <br/>

                            <div className="form-row">
                                <div className="col">


                                    <select className="form-control" id="sel1" name="sellist1">
                                        <option selected>State</option>
                                        <option>Bihar</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                    </select>
                                </div>
                                <div className="col">



                                        <select className="form-control" id="sel1" name="sellist1">
                                            <option selected>Country</option>
                                            <option>India</option>
                                            <option>Nepal</option>
                                            <option>United States Of America</option>
                                        </select>
                                    </div>



                            </div>
                            <br/>
                            <button className="btn btn-primary btn-block" type="submit">Save</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="card mb-5 ">
                <div className="card-header">
                    <h5>
                        <a href="#collapse3" data-parent="#accordion" data-toggle="collapse">
                            Order Summary
                        </a>
                    </h5>
                </div>

                <div id="collapse3" className="collapse ">
                    <div className="card h-100 ">

                        <div className="card-body ">
                            <div className="card-text d-inline-block"> Code : #{props.itemCode}</div>
                            <div className="card-text d-inline-block"> Amount : 1 </div>
                            <div className="card-text d-inline-block"> Price : Rs 5000 </div>

                        </div>
                    </div>
                    <div className="card h-100 ">

                        <div className="card-body">
                            <div className="card-text d-inline-block"> Product : #{props.itemCode}</div>
                            <div className="card-text d-inline-block"> Amount : 1 </div>
                            <div className="card-text d-inline-block"> Price : Rs 5000 </div>

                        </div>
                    </div>

                    <button className="btn btn-primary btn-block" type="submit">Order</button>
                    <br/>
                </div>

            </div>


        </div>
    );
}

export default MithilaBuyingComponent;