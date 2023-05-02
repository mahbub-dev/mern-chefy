

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8  w-[100%]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="text-center md:text-left text-sm md:text-base mb-4 md:mb-0">
            &copy; 2023 Chefy. All rights reserved.
          </p>
          <ul className="flex flex-row md:flex-col justify-center md:justify-end list-none">
            <li className="mx-2 md:my-2">
              <a href="#" className="text-sm md:text-base hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li className="mx-2 md:my-2">
              <a href="#" className="text-sm md:text-base hover:text-white">
                Terms of Use
              </a>
            </li>
            <li className="mx-2 md:my-2">
              <a href="#" className="text-sm md:text-base hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer