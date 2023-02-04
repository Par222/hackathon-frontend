const { useState, useEffect } = require('react');
import Profile from '../../components/authorities/profile';
import Requests from './requests';
const Index = (props) => {
  return (
    <div className="flex h-100 w-100">
      <div className="flex flex-col w-1/5">
        <div className="p-4">
          <Profile />
        </div>
        <div className="p-4">
          <div className="p-4 text-center bg-tertiaryblue-200 rounded-md pb-6">
            <h3 className="text-center text-bold p-3 text-xl">
              {'Yug Harlalka'}
            </h3>
            <hr className="w-1/2 mx-auto bg-pink-400" />
            <h2 className="text-center p-3 text-bold text-lg">
              {'General Secretary'}
            </h2>
          </div>
        </div>
      </div>
      <Requests />
    </div>
  );
};

export default Index;
