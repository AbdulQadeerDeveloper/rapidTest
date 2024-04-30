import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoTestView from "./features/audioTest/component/testerView";
import RapidTest from './features/rapidTest/component/rapidTest';
import AudioTest from './features/audioTest/component/audioTest';
import Header from './features/shared/component/header';
import Footer from './features/shared/component/footer';
import LoginAuthenticator from './features/auth/container/loginAuthenticator';
import RegisterAuthenticator from './features/auth/container/registerAuthenticator';
import ForgotAuthenticator from './features/auth/container/forgotAuthenticator';
import ResetAuthenticator from './features/auth/container/resetAuthenticator';
import GoogleSheet from './features/audioTest/component/login-sheet';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-container mt-5 mb-5">
        <Routes>
          <Route path="/" element={<GoogleSheet />} />
          
          <Route path="/forgot-password" element={<ForgotAuthenticator />} />
          <Route path="/reset_password/:id/:token" element={<ResetAuthenticator />} />
          <Route path="/video-test" element={<VideoTestView />} />
          <Route path="/audio-test" element={<AudioTest />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
