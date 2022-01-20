import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import "antd/dist/antd.min.css";
import { BigNumber, ethers, getDefaultProvider } from "ethers";
import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { getLibrary } from "./components/Demo";
import Layout from "./layout";
import RouteList from "./route";

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Suspense fallback={<div>aaa</div>}>
        <Router>
          <Layout>
            <RouteList />
          </Layout>
        </Router>
      </Suspense>
    </Web3ReactProvider>
  );
}

export default App;
