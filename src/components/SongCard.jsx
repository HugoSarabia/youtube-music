import React, {useRef, useEffect, useState} from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {blue} from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import {CardActionArea} from "@mui/material";

export default function SongCard({type, artist, songName, albumURL, albumName, isVisible}) {
	return (
		<>
			<div className="song-card" style={{ display: isVisible ? 'block' : 'none' }}>
				<div className="song-thumbnail">
					<PlayArrowIcon sx={{height: 50, width: 50}} className="faplay" />
					<img src={albumURL} className="song-thumbnail-img" alt={albumName}/>
					<div className="song-thumbnail-options">
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</div>
				</div>
				<div className="song-info">
					<div className="song-title">
						<span>{songName}</span>
					</div>
					<span>
						{type} • {artist}
					</span>
				</div>
			</div>
		</>
	);
}
/*
      


			<Card
				sx={{
					display: "flex",
                    flexDirection: "column",
					flex: "1 0 auto",
					width: 180,
					height: 232,
					marginRight: 3,
					backgroundColor: "transparent",
				}}
			>
                <CardActionArea>
				<Box
					sx={{
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<CardMedia
						component="img"
						sx={{position: "absolute", top: 0, left: 0, width: 180, height: 180, zIndex: 1}}
						image={albumURL}
						alt={`${albumName} album cover`}
					/>
					<IconButton aria-label="play/pause" sx={{zIndex: 1}}>
						<PlayArrowIcon sx={{height: 50, width: 50, color: blue[50]}} />
					</IconButton>
				</Box>
                </CardActionArea>

				<CardContent sx={{flex: "1 0 auto"}}>
					<Typography variant="h5" sx={{color: blue[50]}}>
						{songName}
					</Typography>
				</CardContent>

			</Card>
*/
