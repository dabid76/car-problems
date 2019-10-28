import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <h1>Info About App</h1>
    <p>
    Created an app that would allow users to answer simple questions, which then will direct them to
additional information. The final determination will help them with the problems that they have.
    </p>
  </div>
);

export default InfoPage;
