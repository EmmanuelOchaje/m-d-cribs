import { useState } from "react";

const SignInForm = () => {
  const [emailData, setEmailData] = useState({ email: "", isValid: true });
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmailData({
      email: emailValue,
      isValid: validateEmail(emailValue),
    });
  };

  function submit(e) {
    e.preventDefault();
    if (!emailData.email || !password) {
      setErr("Input Email and password");
    } else if (password.length < 6) {
      setErr("Password must be at least 6 characters");
    } else {
      setErr("");
      // Proceed with login logic here (e.g., calling an API)
      console.log("Form submitted successfully!");
    }
  }

  return (
    <div className="md:w-[50%] w-[100%] rounded-tl-xl h-full rounded-bl-xl border rounded-xl md:rounded-tr-none md:rounded-br-none">
      <h2 className="ml-5 mt-2 text-2xl font-bold">D-cribs</h2>
      <div className="justify-center flex align-center">
        <div className=" w-fit p-4">
          <h2 className="text-center py-10 font-bold text-3xl">Log In</h2>
          <form className="" onSubmit={submit}>
            <label className="mx-4 text-[13px]">Email</label>
            <br />
            <input
              className="border mx-1 lg:mx-4 rounded-lg md:w-[350px] w-[300px] p-2"
              placeholder="email"
              value={validateEmail.email}
              /* onChange={submit} */
              onChange={handleEmailChange}
            />
            <br />
            {!emailData.isValid && (
              <p className="mx-4 text-red-700 text-[13px]">
                Please enter a valid email address.
              </p>
            )}

            <label className="mx-4 text-[13px]">Password</label>
            <br />
            <input
              className="border mx-1 lg:mx-4 rounded-lg md:w-[350px] w-[300px] p-2"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="mx-4 text-red-700 text-[13px]">
              {/* Please fill the above fields. */}
              {err}
            </p>

            <hr className="w-[250px] my-5 m-auto" />

            <button className="bg-black text-white mx-4 text-[17px] py-1 w-[280px] lg:w-[350px] my-5 rounded-lg">
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
