const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-4xl font-bold text-gray-800">404</h2>
          <p className="mt-2 text-center text-lg font-medium text-gray-600">Oops! This page could not be found.</p>
        </div>
        <div>
          <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
        </div>
        <div className="mt-8 space-y-2">
          <p className="text-center text-base font-medium text-gray-600">It looks like you're lost in space...</p>
          <div className="mt-6 flex justify-center">
            <a href="/" className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[--btn-color] hover:bg-indigo-700">
              Go back home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
