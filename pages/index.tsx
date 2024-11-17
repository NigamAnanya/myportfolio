// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-row items-start max-w-5xl mx-auto space-x-20 text-white dark:text-black mt-10">
//       {/* Left Section: Text Content */}
//       <div className="flex-1 space-y-6">
//         <h1 className="text-5xl font-bold">
//           You <span className="font-light">R. Name</span>
//         </h1>
//         <p className="text-blue-500 dark:text-blue-400 text-xl cursor-pointer">
//           Affiliations. Address. Contacts. Motto. Etc.
//         </p>

//         <p className="text-lg">
//           Write your biography here. Tell the world about yourself. Link to your favorite{" "}
//           <span className="text-blue-500 dark:text-blue-400">subreddit</span>. You can put a picture in, too.
//           The code is already in, just name your picture <code className="bg-gray-700 dark:text-blue-400 p-1 rounded">prof_pic.jpg</code> and put it
//           in the <code className=" dark:text-blue-400 p-1 rounded">img/</code> folder.
//         </p>

//         <p className="text-lg">
//           Put your address / P.O. box / other info right below your picture. You can also disable
//           any of these elements by editing the profile property of the YAML header of your{" "}
//           <code className="bg-gray-700 dark:text-blue-400 p-1 rounded">_pages/about.md</code>. Edit <code className="bg-gray-700 dark:text-blue-400 p-1 rounded">_bibliography/papers.bib</code> and Jekyll will
//           render your publications page automatically.
//         </p>

//         <p className="text-lg">
//           Link to your social media connections, too. This theme is set up to use{" "}
//           <span className="text-blue-500 dark:text-blue-400">Font Awesome icons</span> and{" "}
//           <span className="text-blue-500 dark:text-blue-400">Academicons</span>, like the ones below. Add your
//           Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.
//         </p>

//         <div className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
//           <p>555 your office number</p>
//           <p>123 your address street</p>
//           <p>Your City, State 12345</p>
//         </div>
//       </div>

//       {/* Right Section: Profile Picture with Spacing */}
//       <div className="flex-shrink-0 flex items-center justify-center mt-20">
//         <Image
//           src="/img/Ananya Pic.jpeg"
//           alt="Profile"
//           width={300}
//           height={400}
//           className="rounded-lg object-cover grayscale"
//         />
//       </div>
//     </div>
//   );
// }



import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto mt-10 text-white dark:text-black">
      {/* Bio Section */}
      <div className="flex flex-row items-start space-x-20">
        {/* Left Section: Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold">
            You <span className="font-light">R. Name</span>
          </h1>
          <p className="text-blue-500 dark:text-blue-400 text-xl cursor-pointer">
            Affiliations. Address. Contacts. Motto. Etc.
          </p>

          <p className="text-lg">
            Write your biography here. Tell the world about yourself. Link to your favorite{" "}
            <span className="text-blue-500 dark:text-blue-400">subreddit</span>. You can put a picture in, too.
            The code is already in, just name your picture{" "}
            <code className="bg-gray-700 dark:text-blue-400 p-1 rounded">prof_pic.jpg</code> and put it
            in the <code className="bg-gray-700 dark:text-blue-400 p-1 rounded">img/</code> folder.
          </p>

          <p className="text-lg">
            Put your address / P.O. box / other info right below your picture. You can also disable
            any of these elements by editing the profile property of the YAML header of your{" "}
            <code className="bg-gray-700 dark:text-blue-400 p-1 rounded">_pages/about.md</code>. Edit{" "}
            <code className="bg-gray-700 dark:text-blue-400 p-1 rounded">_bibliography/papers.bib</code> and Jekyll will
            render your publications page automatically.
          </p>

          <p className="text-lg">
            Link to your social media connections, too. This theme is set up to use{" "}
            <span className="text-blue-500 dark:text-blue-400">Font Awesome icons</span> and{" "}
            <span className="text-blue-500 dark:text-blue-400">Academicons</span>, like the ones below. Add your
            Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.
          </p>

          <div className="space-y-2 text-gray-600 dark:text-gray-300 text-lg">
            <p>555 your office number</p>
            <p>123 your address street</p>
            <p>Your City, State 12345</p>
          </div>
        </div>

        {/* Right Section: Profile Picture */}
        <div className="flex-shrink-0 flex items-center justify-center mt-20">
          <Image
            src="/img/Ananya Pic.jpeg"
            alt="Profile"
            width={300}
            height={400}
            className="rounded-lg object-cover grayscale"
          />
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-8 border-gray-600 dark:border-gray-300" />

      {/* Interests Section */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center mb-6">Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Individual Interest Boxes */}
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold">Software Development</p>
          </div>
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold">Machine Learning</p>
          </div>
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold">Computer Vision</p>
          </div>
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold">Natural Language Processing</p>
          </div>
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold">Software Engineering</p>
          </div>
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold">Visualization</p>
          </div>
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold">Algorithms</p>
          </div>
          <div className="bg-gray-800 dark:bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold">Image Processing</p>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-8 border-gray-600 dark:border-gray-300" />

      {/* Contact Icons Section */}
      <div className="text-center mt-8">
        <div className="flex justify-center space-x-6">
          {/* Email Icon */}
          <a href="mailto:example@example.com">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 dark:bg-gray-200 rounded-full">
              <i className="fas fa-envelope text-white dark:text-black"></i>
            </div>
          </a>
          {/* Google Scholar Icon */}
          <a href="https://scholar.google.com">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 dark:bg-gray-200 rounded-full">
              <i className="ai ai-google-scholar text-white dark:text-black"></i>
            </div>
          </a>
          {/* LinkedIn Icon */}
          <a href="https://linkedin.com">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 dark:bg-gray-200 rounded-full">
              <i className="fab fa-linkedin text-white dark:text-black"></i>
            </div>
          </a>
          {/* RSS Icon */}
          <a href="/rss">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 dark:bg-gray-200 rounded-full">
              <i className="fas fa-rss text-white dark:text-black"></i>
            </div>
          </a>
        </div>
        <p className="mt-4 text-gray-400 dark:text-gray-600">
          You can even add a little note about which of these is the best way to reach you.
        </p>
      </div>
    </div>
  );
}
