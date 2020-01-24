import React from "react";
import Layout from "../components/navigation/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";


import classes from '../styles/index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Japan Util" description="All the utilities you need while living in Japan!" />
    <div className={classes.Header}>
      <h1>All the utilities you need while living in Japan!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>


  </Layout>
)

export default IndexPage
