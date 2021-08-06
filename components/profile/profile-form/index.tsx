const ProfileForm = () => {
  return (
    <form className="flex flex-col w-1/2">
      <div className="flex flex-col items-center justify-center mt-2 mb-6">
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          className="border rounded-lg w-3/4 h-10"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-2 mb-6">
        <label htmlFor="old-password" className="mb-2 font-semibold">
          Old Password
        </label>
        <input
          type="password"
          id="old-password"
          className="border rounded-lg w-3/4 h-10"
        />
      </div>
      <div className="flex w-full justify-center">
        <button className="rounded py-2 px-8 bg-indigo-400 mx-auto text-white">
          Change Password
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
