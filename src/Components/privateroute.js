import React from 'react';


function PrivateRoute({ Component, pageProps }) {
    return <Component {...pageProps} />
  }



export default PrivateRoute