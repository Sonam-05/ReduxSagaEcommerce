import React from 'react'
import '../../styles/footerAboutPage.css'
import Layout from '../../components/Layout'

const FooterAboutPage = () => {
    return (
        <Layout>
            <div className="FooterAboutPageBigContainer">
                <div className="FooterAboutPageContainer">
                    <div className="FAPImageContainer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDr3t13EWpaxGRQ_nJOHfevKMD2DjqSQbHwg&usqp=CAU" alt="about-us-photo" />
                    </div>
                    <div className="FAPContentContainer">
                        Welcome to our ecommerce website! We are a team of dedicated individuals who are passionate about providing our customers with the best online shopping experience possible. Our goal is to offer a wide variety of products at competitive prices while delivering exceptional customer service. <br /> <br />
                        Our business was founded with the belief that everyone should have access to quality products at affordable prices. We understand that online shopping can be overwhelming with so many options to choose from. That's why we carefully curate our product selection to ensure that we only offer the best of the best. We work hard to source products that are both high-quality and affordable, so you don't have to sacrifice one for the other.
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FooterAboutPage
