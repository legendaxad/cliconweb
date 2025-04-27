import { Navigated } from "../compare/compare.style";
import { Leftone, MainDiv, Rightone } from "./style.small";
import home from "../../assets/shop/House.svg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { TextInput, Textarea } from "@mantine/core";
import { Button } from "../homepage/main/homapage.style";
export const FAQcomponent = () => {
  return (
    <div>
      <Navigated>
        <img src={home} alt="" />
        <h2>Home</h2>
        <h2>{">"}</h2>
        <h2>FAQs</h2>
      </Navigated>
      <MainDiv>
        <Leftone>
          <h2>Frequently Asked Questions</h2>
          <Accordion sx={{ width: "600px" }}>
            <AccordionSummary
              expandIcon={<>+</>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>
                What types of products or services do you offer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We provide the latest technology products including smartphones,
                laptops, smart home devices, accessories, and tech support
                services.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ width: "600px" }}>
            <AccordionSummary
              expandIcon={<>+</>}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How can I track my order?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Once your order is shipped, you'll receive an email with a
                tracking number and a link to track the delivery status in
                real-time.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ width: "600px" }}>
            <AccordionSummary
              expandIcon={<>+</>}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography>What is your return and refund policy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We offer a 30-day return policy on most products. Items must be
                returned in original condition. Refunds are processed within 5–7
                business days after we receive the returned item.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ width: "600px" }}>
            <AccordionSummary
              expandIcon={<>+</>}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography>Do you offer warranties on your products?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, most products come with a manufacturer warranty. We also
                offer extended warranty plans at checkout.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ width: "600px" }}>
            <AccordionSummary
              expandIcon={<>+</>}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography>How do I contact customer support?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can reach our support team via email, live chat, or by
                calling our hotline. Our team is available Monday to Friday, 9
                AM to 6 PM.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Leftone>
        <Rightone>
          <h1>Don’t find your answer, Ask for support.</h1>
          <h2>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
            molestie accumsan dui, non iaculis primis in faucibu raesent eget
            sem purus.
          </h2>
          <TextInput
            style={{ width: "350px" }}
            type="text"
            placeholder="Email"
            required
          />
          <TextInput
            type="text"
            style={{ width: "350px" }}
            placeholder="Subjectl"
            required
          />{" "}
          <Textarea style={{ width: "350px" }} placeholder="Message" />
          <Button type="submit">
            Submit{" "}
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.125 10H16.875"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 4.375L16.875 10L11.25 15.625"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </Rightone>
      </MainDiv>
    </div>
  );
};
