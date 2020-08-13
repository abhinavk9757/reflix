import React from 'react';
import {ScrollView} from 'react-native';
import ShowsHeader from './ShowsHeader';

import Trending from './components/Trending';
import Action from './components/Action';
import Binge from './components/Binge';
import Originals from './components/Originals';
import Teen from './components/Teen';

const Shows = () => {
  return (
    <ScrollView>
      <ShowsHeader />
      <Trending />
      <Action />
      <Binge />
      <Originals />
      <Teen />
    </ScrollView>
  );
};

export default Shows;
