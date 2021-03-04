import styles from "../styles/components/ModalErrorLogin.module.css";

export function ModalErrorLogin(props) {
  const { close } = props;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <button type="button" onClick={close}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
        <div className={styles.textModal}>
          <header>OPS!</header>
          <strong>Erro ao logar</strong>
          <p>Verifique o username digitado e tente novamente!</p>
        </div>
      </div>
    </div>
  );
}
