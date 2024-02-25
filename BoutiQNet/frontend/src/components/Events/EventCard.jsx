import React from 'react'
import styles from "../../styles/style";
import CountDown from "./CountDown.jsx";
const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2 `}>
        <div className="w-full lg:-w[50%] m-auto">
            <img 
                src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt=""
            />
       </div>          
        <div className="w-full lg:[w-50%] flex flex-col justify-center">
            <h2 className={`${styles.productTitle}`}>Iphon 14pro max 8/256gb</h2>
            <p>
                hbgtdsn,oulikuyjghynfbtdvrdjk;,hbn vgcfytdvrkl:j;gvh,cfgnxfbtdkhbjlgvu,infyctd
                ojkihu,ygntfbrflk:hji;ogu,fyntdbrlkj,;ghnbvfcdxjk;gh,nfcvbdx
                pômiugyfjdthgrsfjomklphi:ng;ub,fnyvbdtbrhiljkogufy,ndt
            </p>
            <div className="flex py-2 justify-between">
                <div className="flex">
                    <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
                    1999$
                    </h5>
                    <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
                        999$
                    </h5>
                </div>
                <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
                 120sold
                </span>
            </div>
            <CountDown />
        </div>
    </div>
  );
};

export default EventCard
