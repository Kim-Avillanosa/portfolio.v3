import dynamic from "next/dynamic";

const Me = dynamic(() => import("./me"));

export default Me;