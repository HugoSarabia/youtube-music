import React, {useRef, useEffect, useState} from "react";
import useAuthWithRefreshToken from "./useAPIWithRefreshToken";

export default function SongAPI() {
	const hasFetchedData = useRef(false);
	const [songs, setSongs] = useState([]);
	
	useEffect(() => {
		let url = "https://api.spotify.com/v1/me/top/tracks?limit=24";
		let access_token = localStorage.getItem("access-token");
		const getAPI = async () => {
			try {
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						Authorization: "Bearer " + access_token,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						let songs = [];
						for (const key in data) {
							if (key === "items") {
								data[key].forEach((item) => {
									let song = {
										type: null,
										artist: null,
										songName: null,
										albumURL: null,
										albumName: null,
									};
									for (const key2 in item) {
										if (item.hasOwnProperty(key2)) {
											if (key2 === "type") {
												if (item[key2] === "track") {
													song.type = "Canción";
												}
											}
											if (key2 === "name") {
												song.songName = item[key2];
											}
											if (key2 === "album") {
												for (const key3 in item[key2]) {
													if (item[key2].hasOwnProperty(key3)) {
														if (key3 === "images") {
															song.albumURL = item[key2][key3][0].url;
														}
														if (key3 === "name") {
															song.albumName = item[key2][key3];
														}
													}
												}
											}
											if (key2 === "artists") {
												item[key2].forEach((artist) => {
													for (const key4 in artist) {
														if (artist.hasOwnProperty(key4)) {
															if (key4 === "name") {
																song.artist = artist[key4];
															}
														}
													}
												});
											}
										}
									}
									setSongs((songs = [...songs, song]));
								});
							}
						}
					})
					.catch((error) => {
						console.error("Error:", error);
						return false;
					});
			} catch (error) {
				console.error("Error:", error);
				return false;
			}
		};
		if (hasFetchedData.current === false) {
			getAPI();
			hasFetchedData.current = true;
		}
	}, []);
	return songs;
}
