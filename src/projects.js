import truncatedPreview from './images/truncatedPreview.svg';
import chatLandingPreview from './images/chatLandingPreview.svg';
import chatAppPreview from './images/chatAppPreview.svg';

const data = [
  {
    title: 'truncated',
    link: 'https://truncated.vercel.app/',
    previewImg: truncatedPreview,
    languages: ['React', 'CSS', 'Express', 'Node', 'MongoDB'],
  },
  {
    title: 'chatApp',
    link: 'https://chat-app-taupe.vercel.app/',
    previewImg: chatAppPreview,
    languages: ['React', 'Redux', 'Sass', 'Firebase', 'Firestore'],
  },
  {
    title: 'chatApp Landing Page',
    link: 'https://chat-app-landing-page-theta.vercel.app/',
    previewImg: chatLandingPreview,
    languages: ['HTML', 'CSS', 'FIGMA'],
  },
  // {
  //   title: 'chatApp',
  //   link: 'https://chat-app-taupe.vercel.app/',
  //   previewImg: chatLandingPreview,

  //   languages: ['React', 'Redux', 'Sass', 'Firebase', 'Firesstore'],
  // },
];

export default data;
