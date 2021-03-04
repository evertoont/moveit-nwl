import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import style from "../styles/pages/Index.module.css";
import { ModalErrorLogin } from "../components/ModalErrorLogin";

export default function Index() {
  const { push } = useRouter();
  const [username, setUsername] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  async function handleUsername(e) {
    e.preventDefault();

    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();

    if (user.message != "Not Found") {
      push(`/${username}`);
    } else {
      setIsOpenModal(true);
    }
  }
  
  function closeModal() {
    setIsOpenModal(false)
  }

  return (
    <>
      {isOpenModal && <ModalErrorLogin close={closeModal}/>}
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
    </>
  );
}
