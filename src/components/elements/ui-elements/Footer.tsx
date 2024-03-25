import React, { FC } from "react";

const Footer: FC = () =>{
    return (
        <footer
        style={{
          backgroundColor: "#323232",
          height: "150px",
          width: "100%",
          display: "flex",
          color: "white",
          position: "fixed",
          bottom: "0",
        }}
      >
        <h1 style={{ marginTop: "50px", marginLeft: "100px", color: "white" }}>
          Mini-Link
        </h1>
        <div style={{ marginLeft: "35%" }}>
          <h3 style={{ display: "block", marginBottom: "10px" }}>Help</h3>
          <a
            href={"/"}
            style={{
              display: "block",
              marginBottom: "10px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Social media
          </a>
          <a
            href={"/"}
            style={{
              display: "block",
              marginBottom: "10px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Professional
          </a>
        </div>

        <div style={{ marginLeft: "5%" }}>
          <h3 style={{ display: "block", marginBottom: "10px" }}>
            Contact support
          </h3>
          <a
            href={"/"}
            style={{
              display: "block",
              marginBottom: "10px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Our projects
          </a>
          <a
            href={"/"}
            style={{
              display: "block",
              marginBottom: "10px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Join our community
          </a>
        </div>
        <div style={{ marginLeft: "10%", marginTop: "20px" }}>
          <a
            href={"/"}
            style={{
              display: "block",
              marginBottom: "10px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Gift cards
          </a>
          <a
            href={"/"}
            style={{
              display: "block",
              marginBottom: "10px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Exclusive information
          </a>
          <a
            href={"/"}
            style={{
              display: "block",
              marginBottom: "10px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Other information
          </a>
        </div>
      </footer>
    )
}

export default Footer