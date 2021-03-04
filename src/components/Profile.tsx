import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

interface UserGithub {
  name: string
  avatar_url: string
}

export function Profile(user: UserGithub) {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src={user?.avatar_url} alt={user?.name} />
      <div>
        <strong>{user?.name}</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
