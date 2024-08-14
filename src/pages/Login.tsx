


function Login() {
  return (
    <div className='grid lg:grid-cols-2 shadow-2xl lg:p-16 bg-[#ffe5ea]'>
      <div className='w-full flex justify-center items-center bg-white'>
        hello
      </div>

      <div className='lg:border lg:w-full lg:p-14 p-6 rounded bg-white'>
        <h2 className='text-3xl mb-4 font-bold text-center uppercase'>Login</h2>
        <form className="form-control">
          <input type="email" name='email' placeholder="Enter your email" className="input rounded bg-gray-100 w-full" required />
          <input type="password" name='password' placeholder="Enter your password" className="input w-full rounded bg-gray-100 mt-6" required />
          {/* <p className='text-red-600 pl-2'>{error}</p> */}
          <p className='text-red-300 my-2'>Forget Password?</p>
          <input type="submit" value='Login' className="input bg-red-200 font-semibold w-full" />
          <p className='mt-2 text-center'>Don&apos;t have an account?Sign Up</p>
        </form>
        <div className='divider'>OR</div>
        <div className='text-center space-y-4'>
          <button className="btn btn-outline">
            Continue With Google</button><br />
          <button className="btn btn-outline">
            Continue With Facebook</button><br />
          <button className="btn btn-outline">
            Continue With Twitter</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
