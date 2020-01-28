import React from "react";
import Layout from "../components/navigation/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Grid from '@material-ui/core/Grid';

import classes from '../styles/index.module.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Japan Util" description="All the utilities you need while living in Japan!" />
    <div className={classes.Container}>
      <h1>All the utilities you need while living in Japan!</h1>


      <Grid container spacing={3}>
        <Grid item xs >
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`,textAlign: 'center' }}>
            <Image />
          </div>
          <p>
            What is 【Japan Util】 It is a utilities website that aims to help Gaijins living in Japan. This site will initially include immigration points calculator and pension calculator.
      </p>
        </Grid>

      </Grid>
    </div>

    {/* <div className={[classes.Container, classes.Even].join(' ')}>

      <Grid container spacing={3}>
        <Grid item xs>
          xs
        </Grid>
        <Grid item xs={6}>
          xs2
        </Grid>
        <Grid item xs>
          xs
        </Grid>
      </Grid>
    </div> */}


  </Layout>
)

export default IndexPage
