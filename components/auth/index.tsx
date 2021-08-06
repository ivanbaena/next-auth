import { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className="bg-indigo-800 w-5/12 mx-auto rounded mt-12 flex flex-col p-4">
      <h1 className="text-white text-center text-4xl mt-4 mb-5">
        {isLogin ? 'Login' : 'Sign Up'}
      </h1>
      <form>
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="email" className="text-white mb-2 font-semibold">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full rounded-lg h-10"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-2 mb-6">
          <label htmlFor="password" className="text-white mb-2 font-semibold">
            Your Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="w-full rounded-lg h-10"
          />
        </div>
        <div className="text-white flex flex-col mx-auto">
          <button className="text-white rounded py-2 px-8 bg-indigo-400 w-1/4 mx-auto">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
          <button
            className="mt-5"
            type="button"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
