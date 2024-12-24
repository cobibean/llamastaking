"use client";

import Image from "next/image";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import { chain } from "./chain";
import { ConnectButton } from "thirdweb/react";
import { Staking } from "../../components/Staking";

export default function Home() {
  return ( 
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "20xp auto",
      width: "500 xp",
      gap: "1rem",
    }}>
      <h1>LoFi Llama Staking</h1>
     <ConnectButton
    client={client}
    chain={chain}
    />
    <Staking />
    </div>
  );
}