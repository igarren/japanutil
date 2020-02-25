import React from "react";
import Layout from "../components/navigation/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Grid from '@material-ui/core/Grid';

import classes from '../styles/index.module.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Japan Util" description="All the utilities you need while living in Japan!" />
    <div className={[classes.Container, classes.Header].join(' ')}>
      <div className={classes.HeaderText}>
        <h2>Welcome to Japan Util!</h2>
        <h3>All the utilities you need while living in Japan!</h3>
      </div>
    </div>
    <div className={[classes.Container, classes.About].join(' ')}>
      <h3>About this site</h3>
      <p>
        Japan Util website was created to provide utility tools which can help foreigners living in Japan.
        Currently, only the immigration points calculator for highly skilled professionals is available.
        This site will continuously updated and more tools will be added in the future.
        If you have suggestions, feel free to email me at
       <a href="mailto:hello@japanutil.com"> hello@japanutil.com </a>. </p>
    </div>


  </Layout>
)

export default IndexPage
