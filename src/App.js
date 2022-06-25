import { useState } from 'react';
import js from './img/js.png';
import python from './img/python.jpg';
import jack from './img/jack.jpg';
import sara from './img/sara.jpg';
import rachel from './img/rachel.jpg';
import UserCard from './components/UserCard';
import Card from './components/Card';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SingInModal from './components/SingInModal';
import Hero from './components/Hero';
function App() {
  const [theme, setTheme] = useState('');
  const [modalClass, setModalClass] = useState('hidden');
  const user_list = [
    {
      name: 'Sara Green',
      image: sara,
      area: 'React-js',
    },
    {
      name: 'jack Freeman',
      image: jack,
      area: 'Laravel',
    },
    {
      name: 'Aarna Devi',
      image: rachel,
      area: 'Android',
    },
  ];
  const lang_list = [
    {
      title: 'Python',
      image: python,
      text: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant...',
    },
    {
      title: 'JavaScript',
      image: js,
      text: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. is used in react-js next-js and many other libraries...',
    },
  ];
  const handleTheme = () => {
    if (theme == '') {
      setTheme('dark');
    } else {
      setTheme('');
    }
  };
  const openModal = () => {
    if (modalClass == 'hidden') {
      setModalClass('block');
    } else {
      setModalClass('hidden');
    }
  };
  return (
    <div className={`min-h-screen px-auto ${theme}`}>
      <div
        className={`bg-white dark:bg-gray-600 ${
          modalClass == 'block' && 'brightness-40'
        }`}>
        <NavBar
          setTheme={handleTheme}
          checked={theme == 'dark'}
          openModal={openModal}
        />
        <Hero openModal={openModal} />

        <div className="max-w-full bg-gray-100  dark:bg-gray-700">
          <div className="grid md:grid-cols-2">
            {lang_list.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
          <div className=" grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
            {user_list.map((item) => (
              <UserCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
      <SingInModal modalClass={modalClass} openModal={openModal} />
    </div>
  );
}

export default App;
