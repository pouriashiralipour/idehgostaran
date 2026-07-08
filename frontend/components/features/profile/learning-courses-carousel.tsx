'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { enrolledCourses } from '@/data/enrolled-courses';
import { EnrolledCourseCard } from './enrolled-course-card';

/**
 * "دوره های در حال یادگیری" slider — same Swiper + Navigation setup
 * as `TestimonialsCarousel`, just without the card-flip effect since
 * course cards need a fixed, readable width rather than a stacked
 * deck. Falls back gracefully to a single-column view if there is
 * only one enrolled course (Swiper still renders fine with 1 slide).
 *
 * Client Component: Swiper is inherently interactive/DOM-dependent.
 */
export function LearningCoursesCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {enrolledCourses.map(course => (
        <SwiperSlide key={course.id}>
          <EnrolledCourseCard course={course} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
