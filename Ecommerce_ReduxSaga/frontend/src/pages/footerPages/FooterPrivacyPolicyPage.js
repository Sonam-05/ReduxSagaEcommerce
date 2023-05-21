import React from 'react'
import '../../styles/footerAboutPage.css'
import Layout from '../../components/Layout'

const FooterPrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="FooterAboutPageBigContainer">
        <div className="FooterAboutPageContainer">
          <div className="FAPImageContainer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypgKEVJejqjpRbYsXx226KouBLTVJV99Piw&usqp=CAU" alt="about-us-photo" />
          </div>
          <div className="FAPContentContainer">
            At our ecommerce website, we take your privacy very seriously. We understand the importance of keeping your personal information safe and secure, and we want to assure you that we will never share or sell your information to third parties without your explicit consent.

            When you visit our website, we may collect certain information such as your IP address, browser type, and operating system. This information is collected to help us improve our website and provide you with a better shopping experience. We may also use cookies and similar technologies to collect data about your browsing behavior, such as the pages you visit and the products you view.
            <br /> <br />
            If you make a purchase on our website, we will collect additional information such as your name, address, email address, and payment information. We use this information to process your order and communicate with you about your purchase.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FooterPrivacyPolicyPage
