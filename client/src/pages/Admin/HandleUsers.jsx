const HandleUsers = () => {
  return (
    <div
      className="min-h-screen p-8 pt-28 h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md border border-gray-200">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">User Requests</h1>
            <p className="text-gray-500 mt-1">
              Approve or reject pending user access requests.
            </p>
          </div>

          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
            1 Pending
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-6 py-4 font-semibold text-gray-700">
                  User
                </th>

                <th className="text-left px-6 py-4 font-semibold text-gray-700">
                  Status
                </th>

                <th className="text-center px-6 py-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-gray-200 hover:bg-slate-50 transition">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      M
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-800">
                        Michael Scott
                      </h3>

                      <p className="text-sm text-gray-500">michael@gmail.com</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                    Pending
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-3">
                    <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition cursor-pointer">
                      Approve
                    </button>

                    <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition cursor-pointer">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HandleUsers;
