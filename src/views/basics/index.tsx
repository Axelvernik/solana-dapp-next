
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';

export const BasicsView: FC = ({ }) => {

  return (
    <div className="hero mx-auto p-4 min-h-16 py-4">
      <div className="hero-content flex flex-col">
      <h1 className="text-3xl font-bold">
        BugBearz Treasury
      </h1>
        {}
        <div className="row">
   <div className="colgold">
     <img src="gold.gif" />
   </div>
   <div className="col-6">
     <img src="gold.gif" />
   </div>
   <div className="col">
     <img src="gold.gif" />
   </div>
 </div>

        <div className="p-2 text-center">
         <a className="btn btnn btn-sm rounded-btn">Create Staking Pool</a>
          <SignMessage/>
          <SendTransaction />
          {<p>&lt; your content &gt;</p>}
        </div>
      </div>
    </div>
  );
};
