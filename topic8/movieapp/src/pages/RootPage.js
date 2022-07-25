import { Component, Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
//import AboutContainer from "../feature/About/AboutContainer/AboutContainer";
//import Layout from "../shared/components/Layout/Layout";
//import ErrorPage from "./errorPage/ErrorPage";
//import Home from "./home/Home";
//import MovieDetails from "./movieDetails/MovieDetails";

const AboutContainer = lazy(()=>import('../feature/About/AboutContainer/AboutContainer'))
const Layout = lazy(()=>import('../shared/components/Layout/Layout'))
const ErrorPage = lazy (()=> import('./errorPage/ErrorPage'))
const Home = lazy (() => import('./home/Home'))
const MovieDetails = lazy (()=> import('./movieDetails/MovieDetails'))

export class RootPage extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/movie/slug=:movie_slug" element={<MovieDetails />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/movie" element={<Navigate to="/home" replace />} />
            <Route path="/about" element={<AboutContainer />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Fragment>
    );
  }
}

export default RootPage;
