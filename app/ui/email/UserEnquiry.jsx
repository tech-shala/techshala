import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const UserEnquiry = ({ name, email, mobile, enquiryType, message }) => {
  return (
    <Html>
      <Head />
      <Preview>User Enquiry | TechShala</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hello yashnimse92@gmail.com, You got a new enquiry from{" "}
                  {email}!
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Here are the details:
                </Heading>
                <Text style={paragraph}>
                  <b>Name: </b>
                  {name}
                </Text>
                <Text style={paragraph}>
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={paragraph}>
                  <b>Mobile: </b>
                  {mobile}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Enquiry Type: </b>
                  {enquiryType}
                </Text>
                <Text style={paragraph}>
                  <b>Message: </b>
                  {message}
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src="https://aryanshinde.in/email-footer.png"
            />
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © {new Date().getFullYear()} | EVE Manager | Volunteer Invitation |
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const link = {
  color: "#007bff",
  textDecoration: "none",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
  padding: "20px",
};

const image = {
  maxWidth: "100%",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};

const boxInfos = {
  padding: "20px",
  textAlign: "left", // Optional for better alignment
};
