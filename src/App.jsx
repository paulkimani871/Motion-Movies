import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, } from "react-router";
import NowShowing from "./pages/NowShowing";
import Series from "./pages/Series";
import Popular from "./pages/Popular";
import MovieDetails from "./pages/MovieDetails";
import SeriesDetails from "./pages/SeriesDetails";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="details/movie/:movieid" element={<MovieDetails/>}/>
        <Route path="now-showing" element={<NowShowing/>}/>
        <Route path="series" element={<Series/>}/>
        <Route path="details/tv/:seriesid" element={<SeriesDetails/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="popular" element={<Popular/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
