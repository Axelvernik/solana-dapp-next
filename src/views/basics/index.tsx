
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';

export const BasicsView: FC = ({ }) => {

  return (
    <div className="hero mx-auto p-4 min-h-16 py-4">
      <div className="hero-content flex flex-col">
      <h1 className="text-3xl font-bold">
        Hodlerz Treasury
      </h1>
        {}
        <div className="row">
   <div className="colgold">
     <img src="goldb.gif" />
   </div>
   <div className="colbg">
     <img src="bg.gif" />
   </div>

 </div>

        <div className="p-2 text-center">
         <a className="btn btnn btn-sm rounded-btn">Create Staking Pool</a>
        
        </div>
      </div>
    </div>
  );
};
