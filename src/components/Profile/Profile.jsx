import styles from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.avatar} src={avatar} alt={username} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Folowers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Folowers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Folowers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
      </ul>
    </div>
  );
};
