import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="services" element={<ServicesPage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="directory/:campsiteId" element={<ServiceDetailPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
