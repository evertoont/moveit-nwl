import React from "react";
import { FiArrowRight} from "react-icons/fi";
import {AiFillGithub} from "react-icons/ai"
import style from "../styles/pages/Index.module.css";

export default function Index() {
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

          <form>
            <input type="text" placeholder="Digite seu username" />
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
