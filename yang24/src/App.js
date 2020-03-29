import React from 'react';
import logo from './logo.svg';
import './App.css';
import BackgroundVideo from "./components/video/BackgroundVideo";

function App() {
  return (
      <div className="App">
          <BackgroundVideo
              loadingImage={
                  "https://images.pexels.com/photos/3380967/pexels-photo-3380967.jpeg?cs=srgb&dl=red-pagoda-temple-3380967.jpg&fm=jpg"
              }
              videoUrl={"https://turnkey-images.sfo2.digitaloceanspaces.com/yang-speech.mp4"}
              minHeight={"220px"}
              maxHeight={"1600px"}
              videoHeight={"100vh"}
              isMobile={true}
              contentToPresent={
                  <div
                      style={{
                          height: "100%",
                          width: "100%",
                          minHeight: "220px",
                          maxHeight: "1600px",
                          margin: "auto",
                          position: "relative"
                      }}
                  >
                      <div style={{ padding: "142px 24px 24px 24px" }}>
                          <h1
                              style={{
                                  marginTop: "24px",
                                  fontWeight: "800",
                                  color: "#ffffff",
                                  fontSize: "34px",
                                  fontFamily:
                                      "Circular, -apple-system, BlinkMacSystemFont, Roboto",
                                  lineHeight: "36px",
                                  letterSpacing: "-1px"
                              }}
                          >
                              Yang will return for 2024
                          </h1>
                      </div>
                  </div>
              }
          />
      </div>
  );
}

export default App;
