import React from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Login() { 
  function Auth(){
    // Generar un código de verificación aleatorio
    function generateCodeVerifier(length) {
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
        let codeVerifier = "";
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          codeVerifier += charset.charAt(randomIndex);
        }
        return codeVerifier;
      }
      
      // Calcular el hash SHA256 del código de verificación
      function sha256(plain) {
        const encoder = new TextEncoder();
        const data = encoder.encode(plain);
        return crypto.subtle.digest("SHA-256", data);
      }
      
      // Codificar en base64 el hash SHA256
      function base64urlencode(a) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(a)))
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
      }
      
      async function generateCodeChallengeFromVerifier(codeVerifier) {
        const hashedVerifier = await sha256(codeVerifier);
        return base64urlencode(hashedVerifier);
      }
      
        const clientId = '628c60b8375e459c84e91945da64817b';
        const redirectUri = 'http://localhost:4000/';
        
        let codeVerifier = generateCodeVerifier(128);
        
        generateCodeChallengeFromVerifier(codeVerifier).then(codeChallenge => {
          let state = generateCodeVerifier(16);
          let scope = '';
        
          localStorage.setItem('code-verifier', codeVerifier);
        
          let args = new URLSearchParams({
            response_type: 'code',
            client_id: clientId,
            scope: scope,
            redirect_uri: redirectUri,
            state: state,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge
          });
        
          window.location = 'https://accounts.spotify.com/authorize?' + args;
        });
  }
    return(
      <>
        <Container maxWidth="sm" sx={{display: 'grid', placeItems: 'center', height: '50vh', width: '100vw'}}>
          <h1>Ironicamente vamos a utilizar la API de Spotify para este proyecto jeje</h1>
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#255E27', height: '25em', width: '25em', borderRadius: '10px' }}>
            <Button variant="contained" onClick={Auth} color="success">Iniciar sesión con Spotify</Button>
          </Box>
        </Container>
      </>
  )
}