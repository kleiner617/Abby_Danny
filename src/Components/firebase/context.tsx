import React from "react";

const FirebaseContext = React.createContext<any | null>(null);

// @ts-ignore
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
