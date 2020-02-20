import React from 'react';
import Disqus from 'disqus-react';


const disqus = props => {

    const disqusShortname = 'wwwjapanutil';
    const disqusConfig = {
        url: props.url,
        identifier: props.identifier, //this.props.uniqueId
        title: props.title //this.props.title
      }
   
      return (
        <div className="article-container">
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
      );
};

export default disqus;
