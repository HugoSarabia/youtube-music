import React, {useEffect, useState, useRef} from "react";
import NavBar from "../components/MenuBar";
import MoodLabels from "../components/MoodLabels";
import ListenAgain from "../components/ListenAgain";
import useAuth from "../hooks/useAuth";


export default function Home({code}) {
	useAuth({code});

	return (
		<div className="main-container">
			<NavBar />
			<MoodLabels />
			<ListenAgain />

		</div>
	);
}
