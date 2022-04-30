import React from "react";
import PageTitle from "../Hooks/PageTitle";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./Blogs.css";
const Blogs = () => {
  return (
    <div>
      <PageTitle title="Blogs"></PageTitle>
      <div className="accordion-container">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                1. Different between JavaScript and NodeJS
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="answer">
                <ol>
                  <li>
                    <strong>JavaScript</strong> is a programming language where
                    <strong> NodeJS</strong> is Javascript runtime environment.
                  </li>
                  <li>
                    <strong>JavaScript</strong> can only be run in the browsers.
                    On the otherhand we can run Javascript outside the browser
                    with the help of <strong>NodeJS</strong>.
                  </li>
                  <li>
                    <strong>JavaScript</strong> based on client-side and{" "}
                    <strong>NodeJS</strong>
                    is server-side
                  </li>
                </ol>
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                when should you use nodejs and when should you use mongodb
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="answer">
                When i need to run a web application server then i use{" "}
                <strong>NodeJS </strong>
                because of it's very fast, lightweight and easy to learn. On the
                other hand, when i need to store data i will use{" "}
                <strong>MongoDB</strong>
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Different between SQL and NoSQL
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="answer">
                <ol>
                  <li>
                    <strong>SQL</strong> databases are relational and{" "}
                    <strong>NoSQL</strong> databases are non-relational.
                  </li>
                  <li>
                    <strong>SQL</strong> use structured query language and{" "}
                    <strong>NoSQL</strong> have dynamic schemas for unstructured
                    data
                  </li>
                  <li>
                    <strong>SQL</strong> vertically scalable and{" "}
                    <strong>NoSQL</strong> are horizontally scalable
                  </li>
                </ol>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What is the purpose of jwt and how does it work
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="answer">
                <strong>JSON Web Token</strong> is a standard used to create
                access tokens for an application.Which help developer to create
                extra security for avoiding hackers. <br /> the server generates
                a token that certifies the user identity, and sends it to the
                client.The client will send the token back to the server for
                every subsequent request, so the server knows the request comes
                from a particular identity.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
