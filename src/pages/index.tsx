import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import style from "../styles/pages/Index.module.css";

export default function Index() {
  const { push } = useRouter();
  const [username, setUsername] = useState("");

  function handleUsername(e) {
    e.preventDefault();
    if (username) {
      push(`/${username}`);
    }
  }

  return (
    <div className={style.container}>
      <section>
        <div className={style.LogoSymbol}>
          <img src="symbol.svg" alt="Simbolo Moveit" />
        </div>

        <div className={style.Gitlogin}>
          <img src="white-logo-full.svg" alt="Logo" />

          <strong>Bem-vindo</strong>

          <div className={style.titleContainer}>
            <AiFillGithub size={55} />
            <span>Faça login com seu Github para começar</span>
          </div>

          <form onSubmit={handleUsername}>
            <input
              type="text"
              placeholder="Digite seu username"
              value={username}
              onChange={(nameUser) => setUsername(nameUser.target.value)}
            />
            <button type="submit">
              {" "}
              <FiArrowRight />{" "}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
