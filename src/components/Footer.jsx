import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-32 px-5">
      <div className="flex justify-between sm:flex-nowrap flex-wrap gap-x-5 gap-y-3 items-start max-w-[592px] mx-auto">
        <ul>
          <li className="text-[20px] font-bold text-white">Lorem</li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
        </ul>

        <ul>
          <li className="text-[20px] font-bold text-white">Lorem</li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li className="mt-5 text-white font-bold text-[20px]">Lorem</li>
          <li>
            <a href="" className="text-white   font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]  ">
              Ipsum
            </a>
          </li>
        </ul>

        <ul>
          <li className="text-[20px] font-bold text-white">Lorem</li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
        </ul>

        <ul>
          <li className="text-[20px] font-bold text-white">Lorem</li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>

          <li className="text-[20px] font-bold text-white mt-5">Lorem</li>

          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
          <li>
            <a href="" className="text-white font-light text-[20px]">
              Ipsum
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center mt-16 py-5">
        <h1 className="text-[20px] font-light flex items-center justify-center gap-x-3 text-white ">
          <FaCopyright className="text-center" />
          {new Date().getFullYear()}
        </h1>
      </div>
    </footer>
  );
};
export default Footer;
