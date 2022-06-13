import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./home";
import Navbar from "../components/navbar";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<>
			<HomePage />
		</>
	);
};

export default Home;
