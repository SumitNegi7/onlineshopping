import React from 'react'

import "./service.css"

function Service() {
    return (
        <div class="services-section">
            <div class="inner-width">
                <h1 class="section-title">Our Services</h1>

                <div class="services-container">

                    <div class="service-box">
                        {/* <img src="computer-repair.jpeg"/> */}

                        <div class="service-icon">
                            <i class="fa fa-desktop"></i>
                        </div>
                        <div class="service-title"> PC Repairing</div>
                        <div class="service-desc">
                            computer cpu repairing service
                     </div>
                    </div>

                    <div class="service-box">
                        {/* <img src="https://bleuwire.com/wp-content/uploads/2019/06/HP-laptop-motherboard-repair.jpg"/> */}
                        <div class="service-icon">
                            <i class="fa fa-laptop"></i>
                        </div>
                        <div class="service-title">Laptop Repairing</div>
                        <div class="service-desc">
                            laptop service like display problem fan related issue, charging issue,etc
                    </div>
                    </div>

                    <div class="service-box">
                        {/* <img src="anti-virus-services.jpg"/> */}
                        <div class="service-icon">
                            <i class="fa fa-support fa-4x"></i>
                        </div>
                        <div class="service-title">Anti-virus-service</div>
                        <div class="service-desc">
                            we provide all type of anti virus service
                    </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Service;