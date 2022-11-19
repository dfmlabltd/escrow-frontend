import React from "react";
import { MdError } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";

export default function Notification({ message, kind }: any) {
	return (
		<div
			style={{
				background: "black",
				color: kind === "success" ? "green" : "red",
				display: "flex",
				alignItems: "center",
				height: "60px",
				borderRadius: "10px",
				fontSize: "20px",
				border: kind === "success" ? "1px solid green" : "1px solid red",
				margin: "20px 0px",
				justifyContent: "center",
			}}
		>
			<span style={{ margin: "0px 7px" }}>
				{kind === "success" ? <SiHiveBlockchain /> : <MdError />}
			</span>
			{message}
		</div>
	);
}
