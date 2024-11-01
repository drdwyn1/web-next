'use client';
import axios from "axios";
import React from "react";

function Footer() {
  function handleClick() {
    axios
      .post("https://backend-fs30.onrender.com/mail-request")
      .then((res) => {
        alert("Mail Sent Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1>
        Ab Maarna mt hmko kyuki sari bate ekhi jgh ni bol rhe hai kuchh web me
        kuchh email pe🥹🥹, bs khatam ho hi gaya bs ek final submit plss🥹
      </h1>
      <h1>
        You said ki bahut salo se B'day never felt like ki B'day hai
      </h1>
      <h1>
        So, I hope this way of wishing you, would have made you feel special and a bit annoyed too🥹
      </h1>
      <h1>
         So.. Chholi fol that❤️🥹... Also ik tmhare sir ka drd ab dheere dheere bdh rha hoga... uske liye bhi sorry
      </h1>
      <h1>
        But yrr tere B'day pe itna krna bnta h yr ab door h to..
      </h1>
      <h1>
        Click once... wait for a minute and then click again... It's Done, check
        your mail!!!❤️
      </h1>
      <h1>
        Aur ni aye to 3 4 dafe click kr dena but tu mail dekhe bina ni ja rhi🥹🥹
      </h1>
      <button
        onClick={handleClick}
        class="my-8 flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
      >
        Send It
      </button>
      <h1>
        Developed with ❤️, humor, and occasional frustration by the incomparable
        Adi! Sir
      </h1>
    </div>
  );
}

export default Footer;
