import me from '../assets/Emon-Ahmed.webp';
import resume from '../assets/Emon_Ahmed_MERN_Stack_Web_Developer_Resume.pdf';

function FloatingProfile() {
  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <a
        href={resume}
        download="Emon_Ahmed_MERN_Stack_Web_Developer_Resume.pdf"
      >
        <button className="bg-primary text-white rounded-lg shadow-lg flex items-center py-3 px-5 hover:opacity-90 transition-opacity duration-200">
          <img
            alt="Small portrait of Emon Ahmed"
            className="w-8 h-8 rounded-full mr-3 border-2 border-white"
            src={me}
          />
          <span className="font-semibold">Download Resume</span>
        </button>
      </a>
    </div>
  )
}

export default FloatingProfile;
