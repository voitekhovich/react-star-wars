import UiVideo from "@UI/UiVideo";
import video from './video/han_solo.mp4';
import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <p className={styles.text}>
        The dark side of the force has won.
        <br />
        We cannot display data.
        <br />
        Come back when we fix everything
      </p>
      <UiVideo src={video} playbackRate={0.75} classes={styles.video}/>
    </div>
  );
};

export default ErrorMessage;
