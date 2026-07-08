export interface EnrolledCourseInstructor {
  name: string;
  avatarSrc: string;
  href: string;
}

export interface EnrolledCourse {
  id: string;
  title: string;
  category: string;
  categoryHref: string;
  imageSrc: string;
  imageAlt: string;
  /** "تکمیل شده" badge — absent means the course is still active/ongoing. */
  statusLabel?: string;
  chaptersLabel: string;
  durationLabel: string;
  instructor: EnrolledCourseInstructor;
  /** Either a price display or a free-course label ("رایگان!") — mutually exclusive with `priceLabel`. */
  priceLabel?: string;
  isFree?: boolean;
  /** 0-100 watched percentage, drives the progress bar + "٪ مشاهده شده" label. */
  progressPercent: number;
  continueHref: string;
}

/**
 * Placeholder "courses in progress" dataset for the dashboard slider.
 * Replace with a real fetch (e.g. `getEnrolledCourses(userId)`) once
 * the courses/enrollment backend exists.
 */
export const enrolledCourses: EnrolledCourse[] = [
  {
    id: 'enrolled-01',
    title: 'دوره پروژه محور React و Next',
    category: 'فرانت اند',
    categoryHref: '/course/category/frontend',
    imageSrc: '/images/courses/01.jpg',
    imageAlt: 'دوره پروژه محور React و Next',
    statusLabel: 'تکمیل شده',
    chaptersLabel: '۵ فصل',
    durationLabel: '۲۵ ساعت',
    instructor: {
      name: 'پوریا شیرالی پور',
      avatarSrc: '/images/avatars/01.jpeg',
      href: '/lecturer',
    },
    isFree: true,
    progressPercent: 49,
    continueHref: '/course-episodes/react-nextjs-project',
  },
];
