import ProfileForm from '../profile-form';

const UserProfile = () => {
  // Redirect away if NOT auth

  return (
    <section className="min-h-full flex flex-col items-center">
      <h1 className="text-6xl mt-8 mb-4 font-semibold">Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
