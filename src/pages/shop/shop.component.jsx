import React from "react";

import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class shopPage extends React.Component {
  constructor(props) {
    super(props); //because we need access to the state
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const {collections} = this.state;
      return (<div className='shop-page'>
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {... otherCollectionProps} />
        ))
      }
      </div>);

      }
  }

export default shopPage;
