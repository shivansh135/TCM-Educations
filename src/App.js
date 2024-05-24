import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Home from './pages/home/home';
import Prayagraj from './pages/centre/prayagraj';
import Planning from './pages/plan_details/planning';
import Cat from './pages/Cat_page/cat';
import Panchmukhi from './pages/panchmukhi/panchmukhi';
import {Testimonial} from './pages/Testimonials/stud_testimonial';
import Teacher from './pages/teachers/teacher_one';
import {Login} from './pages/login_page/login';
import {Signup} from './pages/signup_page/signup';
import { Offline_centre as OfflineCentre } from './pages/Offline_centre/offline_centre';
import {Plans} from './pages/plans/plans';
import { Past_papers as PastPapers } from './pages/Past_papers/past_papers';
import { Test_series as TestSeries } from './pages/test_series/test_series';
import { Form_page as FormPage } from './pages/form_page/form_page';
import {Checkout} from './pages/checkout_page/checkout';
import PopupHome from './pages/home/popup_home';
import {Confirmation} from './pages/form_page/confirmation';
import MorePage from './pages/past_papers_more_page/more_page';
import { Navbar } from './components/navbar/navbar';

function App() {
  return (                                                 
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prayagraj" element={<Prayagraj />} />
      <Route path="/planning" element={<Planning />} />
      <Route path="/cat" element={<Cat />} />
      <Route path="/panchmukhi" element={<Panchmukhi />} />
      <Route path="/testimonial/:id" element={<Testimonial />} />
      <Route path="/teacher/:id" element={<Teacher />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/offline-centre" element={<OfflineCentre />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/past-papers" element={<PastPapers />} />
      <Route path="/test-series" element={<TestSeries />} />
      <Route path="/form-page" element={<FormPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/popup-home" element={<PopupHome />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/more-page" element={<MorePage />} />
    </Routes>
  </Router>
  );
}

export default App;

