import React from "react";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import style from "../styles/pages/Index.module.css";

export default function Index() {
  return (
    <div className={style.container}>
      <section>
        <img src="white-logo-full.svg" alt="Logo" />

        <strong>Bem-vindo</strong>

        <div className={style.titleContainer}>
        <FiGithub size={55} />
        <span>Faça login com seu Github para começar</span>
        </div>

        <form>
          <input type="text" placeholder="Digite seu username" />
          <button type="submit">
            {" "}
            <FiArrowRight />{" "}
          </button>
        </form>
      </section>
    </div>
  );
}
