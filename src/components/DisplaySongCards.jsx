import React, {useRef, useEffect, useState} from "react";
import SongCard from "./SongCard";
import useSongAPI from "../hooks/useSongAPI";

export default function DisplaySongCards({currentPage, onPageChange}) {
	const songs = useSongAPI();

	//retornar el aareglo y usarlo en otro componenete para ahi desplegar los songcards
	const cardsPerPage = 6;
	const firstCardIndex = (currentPage - 1) * cardsPerPage;
	const lastCardIndex = firstCardIndex + cardsPerPage - 1;
	const visibleCards = songs.slice(firstCardIndex, lastCardIndex + 1);
	console.log(visibleCards);
	
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						//onPageChange((currentPage) => currentPage + 1);
					}
				});
			},
			{threshold: 1}
		);
		observer.observe(document.querySelector(".listen-again-bottom-div"));
		return () => {
			observer.disconnect();
		};
	}, []);
	return (
		<>
			{songs.length === 0 ? (
				<h3>Cargando...</h3>
			) : (
				visibleCards.map((el, index) => (
					<SongCard
						key={index}
						type={el.type}
						artist={el.artist}
						songName={el.songName}
						albumURL={el.albumURL}
						albumName={el.albumName}
						isVisible={true}
					/>
				))
			)}
		</>
	);
}
