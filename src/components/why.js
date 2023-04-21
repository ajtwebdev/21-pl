import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { ButtonPrimary } from "./buttons"
import { Container, GridThree, Section } from "./layoutComponents"

export default function Why() {
  return (
    <Section>
      <Container className="spacing">
        <div>
          <p className="subheader accent">why choose project landscape</p>
          <h2 className="title">the best of calgary’s landscaping companies</h2>
        </div>
        <GridThree>
          <div className="spacing">
            <StaticImage
              src="../images/calgary-landscaper-benefits.jpg"
              alt="calgary landscaping company"
              width={50}
            />
            <h3 className="body--large caps bold">
              We Bring Your ideas to life
            </h3>
            <p>
              Hiring a professional landscape designer means that you’ll have a
              partner who is committed to bringing your landscaping dreams to
              life. Whether you have a vague idea of what you want or a specific
              vision in mind, a professional designer can help you clarify your
              ideas and bring them to fruition. They’ll work closely with you to
              ensure that your outdoor space is not only functional but also
              beautiful.
            </p>
          </div>
          <div className="spacing">
            <StaticImage
              src="../images/calgary-landscaper-benefits.jpg"
              alt="calgary landscaping company"
              width={50}
            />
            <h3 className="body--large caps bold">
              we save you money and time
            </h3>
            <p>
              When you work with a professional landscape designer, you’re not
              just investing in the beauty of your home’s exterior, but you’re
              also saving yourself time and money in the long run. A designer
              has the experience, skills, and tools to get the job done
              correctly and efficiently. They can help you select the right
              materials for your project, work within your budget, and avoid
              costly mistakes.
            </p>
          </div>
          <div className="spacing">
            <StaticImage
              src="../images/calgary-landscaper-benefits.jpg"
              alt="calgary landscaping company"
              width={50}
            />
            <h3 className="body--large caps bold">
              we can enhance your property value
            </h3>
            <p>
              Professional landscaping not only enhances the aesthetics of your
              home, but it can also increase its value. A well-designed
              landscape is a selling point that can make your home stand out
              from the competition. Working with a professional landscape
              designer ensures that your landscaping investment pays off by
              increasing your property value.
            </p>
          </div>
          <div className="spacing">
            <StaticImage
              src="../images/calgary-landscaper-benefits.jpg"
              alt="calgary landscaping company"
              width={50}
            />
            <h3 className="body--large caps bold">
              we provide Environmental Sustainability
            </h3>
            <p>
              A professional landscape designer understands the importance of
              environmental sustainability in landscaping. They can recommend
              the right plants and trees that are native to your area, conserve
              water, and reduce the use of fertilizers and pesticides. With
              their expertise, they can create a beautiful and eco-friendly
              landscape that will benefit both your family and the environment.
            </p>
          </div>
          <div className="spacing">
            <StaticImage
              src="../images/calgary-landscaper-benefits.jpg"
              alt="calgary landscaping company"
              width={50}
            />
            <h3 className="body--large caps bold">
              we provide reduced maintenance
            </h3>
            <p>
              Maintaining a landscape can be a daunting task, especially for
              those without the necessary knowledge and expertise. When you work
              with a professional landscape designer, they’ll create a
              low-maintenance landscape that fits your lifestyle. They’ll choose
              plants that require minimal watering and pruning, which saves you
              time and effort.
            </p>
          </div>
          <div className="spacing">
            <StaticImage
              src="../images/calgary-landscaper-benefits.jpg"
              alt="calgary landscaping company"
              width={50}
            />
            <h3 className="body--large caps bold">
              decades of landscaping experience
            </h3>
            <p>
              Working with a professional landscape designer is a smart
              investment for any homeowner who wants to enhance the beauty,
              functionality, and value of their property. With their expertise,
              you’ll have a partner who can bring your landscaping ideas to
              life, save you time and money, increase your property value,
              create an eco-friendly landscape, reduce maintenance, and ensure
              year-round enjoyment. So, if you’re considering a landscaping
              project, it’s worth considering working with a professional
              designer.
            </p>
          </div>
        </GridThree>
        <center>
          <ButtonPrimary to="/contact">get quote</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
